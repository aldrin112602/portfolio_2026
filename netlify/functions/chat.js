const rateStore = {};
const RATE_LIMIT    = 20;
const RATE_WINDOW   = 10 * 60 * 1000; 

function isRateLimited(ip) {
  const now  = Date.now();
  const entry = rateStore[ip];

  if (!entry || now - entry.start > RATE_WINDOW) {
    rateStore[ip] = { count: 1, start: now };
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

const ALLOWED_ORIGIN = "https://aldrin-portfolio-2026.netlify.app";
const CHAT_SECRET    = process.env.CHAT_SECRET;

exports.handler = async function (event) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin":  ALLOWED_ORIGIN,
        "Access-Control-Allow-Headers": "Content-Type, x-chat-token",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return reply(405, { error: "Method not allowed" });
  }

  const origin = event.headers["origin"] || "";
  if (origin !== ALLOWED_ORIGIN) {
    return reply(403, { error: "Forbidden" });
  }

  const token = event.headers["x-chat-token"] || "";
  if (!CHAT_SECRET || token !== CHAT_SECRET) {
    return reply(401, { error: "Unauthorized" });
  }

  const ip = event.headers["x-forwarded-for"]?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return reply(429, { error: "Too many requests. Please slow down." });
  }
  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return reply(400, { error: "Invalid JSON" });
  }

  if (!Array.isArray(body.messages) || body.messages.length === 0) {
    return reply(400, { error: "Missing messages" });
  }

  const messages = body.messages
    .slice(-10)
    .filter(m => m && typeof m.role === "string" && typeof m.content === "string")
    .map(m => ({
      role:    m.role === "assistant" ? "assistant" : "user",
      content: String(m.content).slice(0, 2000),
    }));

  if (messages.length === 0) {
    return reply(400, { error: "No valid messages" });
  }

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type":    "application/json",
      "x-api-key":       process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model:      "claude-haiku-4-5-20251001",
      max_tokens: 400,                         
      system:     body.system || "",
      messages,
    }),
  });

  const data = await res.json();
  return reply(res.status, data);
};


function reply(status, body) {
  return {
    statusCode: status,
    headers: {
      "Content-Type":                "application/json",
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    },
    body: JSON.stringify(body),
  };
}