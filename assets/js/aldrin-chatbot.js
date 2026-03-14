(function () {
  const PROXY_URL = "/.netlify/functions/chat";
  const MODEL = "claude-haiku-4-5-20251001";
  const CHAT_SECRET = "@MkJJfZmJWI+sk]M";

  const SYSTEM_PROMPT = `You are Aldrin Caballero — a passionate Full-Stack Web Developer from the Philippines. You are speaking directly to visitors of your personal portfolio website. Speak in first person, naturally and conversationally, as if the visitor just walked up and started chatting with you.

  PERSONAL
  - Name: Aldrin Caballero
  - Role: Full-Stack Web Developer
  - Location: Philippines
  - Birthday: November 26, 2002 (23 years old)
  - Email: caballeroaldrin02@gmail.com
  - GitHub: github.com/aldrin112602
  - LinkedIn: linkedin.com/in/aldrin02

  ABOUT ME
  I'm a developer who enjoys building real-world systems that people actually use. I like solving problems, designing clean architectures, and turning ideas into working applications. I care about writing maintainable code, building secure systems, and creating smooth user experiences.

  MY JOURNEY
  My journey into programming didn't start with a powerful computer. I actually started learning web development using a broken old phone and try to fit small battery on it. Sometimes we didn’t have electricity at home, especially during rainy days, so I studied using a small solar light. I also didn’t always have money for mobile data, so I downloaded tutorials and coding resources that I could study offline.

  Even with just my phone, I started building small projects and sharing them on Facebook because I was proud of what I made. Eventually, someone noticed my work and I got my first freelance opportunity. I built a web application using only my phone and earned around 10,000 PHP pesos from that project.

  The first thing I did was buy my first laptop. That moment really changed everything for me. From there, I kept improving my skills, building more systems, working with clients, and continuing my journey through college until I became a professional developer.


  EXPERIENCE
  - Junior Software Engineer at OrangeApps, Inc. (July 2025 - Present)
  - Flutter Developer Intern at SupSoft Tech
  - Freelance Full-Stack Developer (2022 - Present)

  STATS
  - 4+ years experience
  - 25+ projects built
  - 15+ happy clients
  - 8+ technologies used regularly

  SKILLS
  Backend: Laravel, PHP, Node.js, Express.js, Prisma, REST APIs
  Frontend: Vue.js, React, JavaScript, TypeScript, Tailwind CSS, Bootstrap, jQuery, CSS3
  Database: MySQL
  Mobile: Flutter, React Native, Ionic
  Realtime / WebRTC: Socket.IO, Peer connections
  Tools: Git, GitHub, Figma, PHP Mailer
  AI/ML: Face-api.js, TensorFlow.js, Claude 

  DEVELOPMENT STYLE
  - I focus on clean and maintainable codebases
  - I think about scalability and performance early
  - I care about security and preventing vulnerabilities
  - I enjoy designing systems from backend architecture to frontend UI

  AI WORKFLOW
  I often use AI tools to speed up development and help solve complex problems, generate ideas, and build utilities when needed — but I always review and refine the code myself.

  PROJECTS
  1. WebInn — Laravel 11, Face-api.js, TensorFlow.js  
  School management system with face recognition attendance, QR scanning, grading system, and multiple user roles.  
  github.com/aldrin112602/WebInn

  2. Tingloy Ferry Reservation — Laravel 12, React, TypeScript  
  Online ferry ticket booking and reservation platform.  
  github.com/aldrin112602/Tingloy-Ferry-Reservation-System

  3. OmeTV Clone — Node.js, Express, Socket.IO, WebRTC  
  Random video chat platform that connects strangers worldwide. Users can instantly match, chat anonymously, and skip to the next person anytime with no registration required.  
  github.com/aldrin112602/ometv-clone

  4. Random Video Chat Mobile App — React Native  
  Mobile version of the random video chat application for smartphones.  
  github.com/aldrin112602/random-video-chat-app

  5. CookPal (Frontend) — Ionic, React, TypeScript  
  Mobile recipe application frontend.  
  github.com/aldrin112602/CookPal

  6. CookPal API — Laravel  
  Backend API for the CookPal mobile app.  
  github.com/aldrin112602/CookPal-API

  7. Mail API — Node.js, Express  
  Email sending API deployed on Render.  
  github.com/aldrin112602/mail-api-v1

  8. Swiftlink — PHP, Bootstrap, MySQL  
  Fiber internet billing and customer management system.  
  github.com/aldrin112602/swiftlink-v2

  9. Inntayan Cabin Reservation — PHP, Bootstrap, PHP Mailer  
  Cabin booking and reservation platform.  
  github.com/aldrin112602/inntayan-cabin-reservation

  10. PIMS — PHP, Bootstrap  
  Population information management system.  
  github.com/aldrin112602/Population-Information-Management-System

  GOALS
  I want to continue building impactful software, improve engineering standards, and help teams maintain scalable and secure systems.

  TONE
  - Warm, approachable, genuine
  - Enthusiastic about projects and tech
  - Concise by default (under 120 words), detailed only when asked
  - Direct visitors wanting to hire you to caballeroaldrin02@gmail.com
  - Slightly playful but professional
  - Never break character. Only answer about yourself, your work, or web development.
  `;



  const SUGGESTIONS = [
    "What's your tech stack?",
    "Tell me about yourself or your journey",
    "Tell me about your OmeTV clone",
    "Available for freelance?",
    "Your strongest skill?",
    "How to contact you?"
  ];

  const style = document.createElement("style");
  style.textContent = `
    #ac-window {
      transform-origin: bottom right;
      transition: opacity 0.2s ease, transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
    }
    #ac-window.ac-out { opacity:0; transform:scale(0.92) translateY(10px); pointer-events:none; }
    #ac-window.ac-in  { opacity:1; transform:scale(1) translateY(0); pointer-events:all; }
    #ac-fab svg { transition: opacity 0.15s, transform 0.2s; position:absolute; }
    #ac-fab svg.ac-ico-chat  { opacity:1; transform:scale(1) rotate(0deg); }
    #ac-fab svg.ac-ico-close { opacity:0; transform:scale(0.5) rotate(-45deg); }
    #ac-fab.ac-open svg.ac-ico-chat  { opacity:0; transform:scale(0.5) rotate(45deg); }
    #ac-fab.ac-open svg.ac-ico-close { opacity:1; transform:scale(1) rotate(0deg); }
    .ac-msg { animation: ac-pop 0.18s ease; }
    @keyframes ac-pop { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:translateY(0)} }
    .ac-dot { animation: ac-b 1.2s infinite ease-in-out; }
    .ac-dot:nth-child(2) { animation-delay:0.18s }
    .ac-dot:nth-child(3) { animation-delay:0.36s }
    @keyframes ac-b { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-5px)} }
    #ac-msgs::-webkit-scrollbar { width:3px }
    #ac-msgs::-webkit-scrollbar-thumb { background:#e2e8f0; border-radius:9px }
    .dark #ac-msgs::-webkit-scrollbar-thumb { background:#334155 }
    #ac-ta { resize:none; min-height:40px; max-height:96px; overflow-y:auto; }
    #ac-notif { animation: ac-ni 0.3s ease; transform-origin:bottom right; }
    @keyframes ac-ni { from{opacity:0;transform:scale(0.9) translateY(6px)} to{opacity:1;transform:scale(1)} }
    .ac-chip:hover { background:#42b883!important; color:#fff!important; border-color:#42b883!important; }
    .ac-send:disabled { background:#cbd5e1!important; cursor:not-allowed; }
    .dark .ac-send:disabled { background:#334155!important; }
    .ac-bot a { color:#059669; text-decoration:underline; }
    .dark .ac-bot a { color:#34d399; }
    .ac-code { background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px; font-size:12px; font-family:monospace; }
    .dark .ac-code { background:rgba(255,255,255,0.1); }
  `;
  document.head.appendChild(style);

  const notifEl = document.createElement("div");
  notifEl.id = "ac-notif";
  notifEl.setAttribute("onclick", "window._acChat.open()");
  notifEl.setAttribute("class",
    "cursor-pointer select-none " +
    "bg-white dark:bg-slate-800 " +
    "border border-gray-100 dark:border-slate-700 " +
    "rounded-2xl rounded-br-sm shadow-xl " +
    "px-4 py-3"
  );
  notifEl.style.cssText = "position:fixed !important; bottom:96px; right:24px; z-index:2147483646; max-width:196px;";
  notifEl.innerHTML = `
    <p class="text-sm leading-snug text-slate-600 dark:text-slate-300">
      <span class="font-semibold text-[#42b883]">Hey there!</span><br>
      Ask me anything about my work 👋
    </p>
    <div style="position:absolute;bottom:-7px;right:12px;width:0;height:0;
                border-left:7px solid transparent;border-right:7px solid transparent;
                border-top:7px solid white;" class="dark:!border-t-slate-800"></div>
  `;
  document.body.appendChild(notifEl);

  const fabEl = document.createElement("button");
  fabEl.id = "ac-fab";
  fabEl.setAttribute("aria-label", "Chat with Aldrin");
  fabEl.setAttribute("onclick", "window._acChat.toggle()");
  fabEl.setAttribute("class",
    "w-14 h-14 rounded-full " +
    "bg-[#42b883] hover:bg-[#3aa876] " +
    "flex items-center justify-center " +
    "shadow-[0_4px_18px_rgba(66,184,131,0.45)] " +
    "transition-colors focus:outline-none " +
    "focus:ring-2 focus:ring-[#42b883] focus:ring-offset-2"
  );
  fabEl.style.cssText = "position:fixed !important; bottom:24px; right:24px; z-index:2147483647;";
  fabEl.innerHTML = `
    <svg class="ac-ico-chat" width="22" height="22" viewBox="0 0 24 24"
      fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
    <svg class="ac-ico-close" width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `;
  document.body.appendChild(fabEl);

  const winEl = document.createElement("div");
  winEl.id = "ac-window";
  winEl.setAttribute("class",
    "ac-out " +
    "w-[360px] max-h-[560px] " +
    "flex flex-col " +
    "bg-white dark:bg-slate-900 " +
    "rounded-2xl overflow-hidden " +
    "border border-gray-100 dark:border-slate-700/80 " +
    "shadow-2xl"
  );
  winEl.style.cssText = "position:fixed !important; bottom:96px; right:24px; z-index:2147483646;";
  winEl.innerHTML = `
    <!-- Header -->
    <div class="flex items-center gap-3 px-4 py-3 bg-[#42b883] flex-shrink-0">
      <div class="w-9 h-9 rounded-full bg-white/25 flex-shrink-0
                  flex items-center justify-center
                  text-white text-xs font-bold tracking-wide">
        AC
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-white font-semibold text-sm leading-none">Aldrin Caballero</p>
        <p class="text-white/75 text-xs flex items-center gap-1.5 mt-1">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-200 flex-shrink-0 animate-pulse"></span>
          AI Assistant · Always online
        </p>
      </div>
      <button onclick="window._acChat.close()" aria-label="Close"
        class="text-white/70 hover:text-white hover:bg-white/15
               transition-colors p-1.5 rounded-lg flex-shrink-0">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>

    <!-- Messages area -->
    <div id="ac-msgs"
      class="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 scroll-smooth bg-gray-50/50 dark:bg-slate-900">
    </div>

    <!-- Suggested questions -->
    <div id="ac-chips" class="px-4 pb-2 flex flex-wrap gap-1.5 flex-shrink-0"></div>

    <!-- Divider -->
    <div class="h-px bg-gray-100 dark:bg-slate-700/60 mx-3 flex-shrink-0"></div>

    <!-- Input bar -->
    <div class="flex items-end gap-2 px-3 py-3 flex-shrink-0">
      <textarea id="ac-ta" rows="1"
        placeholder="Ask me anything…"
        onkeydown="window._acChat.handleKey(event)"
        oninput="window._acChat.autoResize(this)"
        class="flex-1 rounded-xl border border-gray-200 dark:border-slate-600
               bg-white dark:bg-slate-800
               text-slate-800 dark:text-slate-100
               placeholder-gray-400 dark:placeholder-slate-500
               text-sm px-3.5 py-2.5
               focus:outline-none focus:ring-2 focus:ring-[#42b883]/30 focus:border-[#42b883]
               transition-colors">
      </textarea>
      <button id="ac-send" onclick="window._acChat.send()"
        aria-label="Send"
        class="ac-send w-10 h-10 rounded-xl bg-[#42b883] hover:bg-[#3aa876]
               flex items-center justify-center flex-shrink-0
               transition-colors focus:outline-none">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
          stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      </button>
    </div>
  `;
  document.body.appendChild(winEl);

  const state = { open: false, loading: false, history: [], firstOpen: true };
  const $ = (id) => document.getElementById(id);
  function esc(t) {
    return t
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function fmt(raw) {
    let h = esc(raw);
    h = h.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    h = h.replace(/`([^`]+)`/g, '<code class="ac-code">$1</code>');
    h = h.replace(/(caballeroaldrin02@gmail\.com)/g, '<a href="mailto:$1">$1</a>');
    h = h.replace(/(github\.com\/[\w\-\/]+)/g, '<a href="https://$1" target="_blank" rel="noopener">$1</a>');
    h = h.replace(/\n/g, "<br>");
    return h;
  }

  function addMsg(role, text) {
    const msgs = $("ac-msgs");
    const row = document.createElement("div");
    row.className = "ac-msg flex " + (role === "user" ? "justify-end" : "justify-start");

    if (role === "user") {
      row.innerHTML = `
        <div class="max-w-[80%] text-sm leading-relaxed px-4 py-2.5
                    bg-[#42b883] text-white
                    rounded-2xl rounded-br-sm">
          ${esc(text)}
        </div>`;
    } else {
      row.innerHTML = `
        <div class="ac-bot max-w-[80%] text-sm leading-relaxed px-4 py-2.5
                    bg-white dark:bg-slate-800
                    text-slate-700 dark:text-slate-200
                    rounded-2xl rounded-bl-sm
                    border border-gray-100 dark:border-slate-700/60 shadow-sm">
          ${fmt(text)}
        </div>`;
    }
    msgs.appendChild(row);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function showTyping() {
    const msgs = $("ac-msgs");
    const el = document.createElement("div");
    el.id = "ac-typing";
    el.className = "ac-msg flex justify-start";
    el.innerHTML = `
      <div class="flex items-center gap-1.5 px-4 py-3
                  bg-white dark:bg-slate-800
                  rounded-2xl rounded-bl-sm
                  border border-gray-100 dark:border-slate-700/60 shadow-sm">
        <span class="ac-dot w-2 h-2 rounded-full bg-gray-300 dark:bg-slate-500 block"></span>
        <span class="ac-dot w-2 h-2 rounded-full bg-gray-300 dark:bg-slate-500 block"></span>
        <span class="ac-dot w-2 h-2 rounded-full bg-gray-300 dark:bg-slate-500 block"></span>
      </div>`;
    msgs.appendChild(el);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function removeTyping() {
    const el = $("ac-typing");
    if (el) el.remove();
  }

  function renderChips(show) {
    const el = $("ac-chips");
    el.innerHTML = "";
    if (!show) return;
    SUGGESTIONS.forEach((q) => {
      const btn = document.createElement("button");
      btn.className = `ac-chip text-xs px-3 py-1.5 rounded-full
                       border border-gray-200 dark:border-slate-600
                       bg-white dark:bg-slate-800
                       text-slate-500 dark:text-slate-400
                       transition-all duration-150 whitespace-nowrap`;
      btn.textContent = q;
      btn.onclick = () => {
        $("ac-ta").value = q;
        window._acChat.send();
      };
      el.appendChild(btn);
    });
  }
  async function callClaude(userMsg) {
    state.history.push({ role: "user", content: userMsg });
    const recentHistory = state.history.slice(-6);

    const res = await fetch(PROXY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-chat-token": CHAT_SECRET,
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages: recentHistory,
      }),
    });

    if (!res.ok) {
      const e = await res.json().catch(() => ({}));
      throw new Error(e?.error?.message || `HTTP ${res.status}`);
    }
    const data = await res.json();
    const reply = data.content?.[0]?.text || "Sorry, I couldn't generate a reply.";
    state.history.push({ role: "assistant", content: reply });
    return reply;
  }

  window._acChat = {
    toggle() { state.open ? this.close() : this.open(); },

    open() {
      state.open = true;
      winEl.classList.remove("ac-out");
      winEl.classList.add("ac-in");
      fabEl.classList.add("ac-open");
      if (notifEl.parentNode) notifEl.remove();
      if (state.firstOpen) {
        state.firstOpen = false;
        addMsg("bot", "Hey! 👋 I'm Aldrin — the AI version of me. Ask me about my projects, skills, tech stack, or if you're thinking of working together!");
        renderChips(true);
      }
      setTimeout(() => $("ac-ta").focus(), 150);
    },

    close() {
      state.open = false;
      winEl.classList.remove("ac-in");
      winEl.classList.add("ac-out");
      fabEl.classList.remove("ac-open");
    },

    handleKey(e) {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); this.send(); }
    },

    autoResize(el) {
      el.style.height = "auto";
      el.style.height = Math.min(el.scrollHeight, 96) + "px";
    },

    async send() {
      const ta = $("ac-ta");
      const text = ta.value.trim();
      if (!text || state.loading) return;

      ta.value = "";
      ta.style.height = "auto";
      renderChips(false);
      addMsg("user", text);

      state.loading = true;
      $("ac-send").disabled = true;
      showTyping();

      try {
        const reply = await callClaude(text);
        removeTyping();
        addMsg("bot", reply);
      } catch (err) {
        removeTyping();
        addMsg("bot", "Hmm, something went wrong on my end. You can always email me directly at caballeroaldrin02@gmail.com!");
        console.error("[Aldrin Chatbot]", err);
      } finally {
        state.loading = false;
        $("ac-send").disabled = false;
        $("ac-ta").focus();
      }
    },
  };

  setTimeout(() => {
    if (notifEl.parentNode && !state.open) {
      notifEl.style.transition = "opacity 0.35s ease";
      notifEl.style.opacity = "0";
      setTimeout(() => notifEl.parentNode && notifEl.remove(), 350);
    }
  }, 5000);

})();