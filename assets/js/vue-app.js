const { createApp } = Vue;

createApp({
  data() {
    return {
      darkMode: false,
      profile: {
        name: "Aldrin Caballero",
        role: "Full-Stack Web Developer",
        intro:
          "Specializing in building exceptional digital experiences with Laravel, Vue.js, and modern web technologies.",
      },
      typedText: "",
      typingPhrases: [
        "Full-Stack Web Developer",
        "Laravel Specialist",
        "Vue.js Expert",
        "API Architect",
        "Problem Solver",
      ],
      currentPhraseIndex: 0,
      currentCharIndex: 0,
      isDeleting: false,
      typingSpeed: 100,

      about: {
        description:
          "I am a passionate developer with deep expertise in both back-end architecture and front-end interactivity. I bridge the gap between complex logic and user-friendly design.",
        subDescription:
          "My workflow focuses on clean, maintainable code using the best tools for the job. Whether it is a complex dashboard using React or a monolithic application with Laravel and Blade, I deliver optimized results.",
      },

      experience: [
        {
          role: "Junior Software Engineer",
          company: "OrangeApps, Inc.",
          duration: "July 2025 – Present",
          description:
            "Developing and maintaining production-level web applications. Working with APIs, databases, and modern JavaScript frameworks while collaborating with a professional engineering team.",
          tech: [
            { name: "Laravel", icon: "fab fa-laravel" },
            { name: "Vue.js", icon: "fab fa-vuejs" },
            { name: "MySQL", icon: "fas fa-database" },
            { name: "REST API", icon: "fas fa-plug" },
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "Github", icon: "fab fa-github-alt" },
            { name: "Figma", icon: "fab fa-figma" },
          ],
        },
        {
          role: "Flutter Developer Intern",
          company: "SupSoft Tech",
          duration: "Internship",
          description:
            "Assisted in building mobile application features using Flutter. Implemented UI components, handled state management, and followed team coding standards.",
          tech: [
            { name: "Flutter", icon: "fas fa-mobile-alt" },
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "Github", icon: "fab fa-github-alt" },
            { name: "Figma", icon: "fab fa-figma" },
          ],
        },
        {
          role: "Freelance Full-Stack Developer",
          company: "Self-Employed",
          duration: "2022 - Present",
          description:
            "Delivered full-stack solutions including management systems, reservation platforms, and admin dashboards for clients.",
          tech: [
            { name: "Laravel", icon: "fab fa-laravel" },
            { name: "PHP", icon: "fab fa-php" },
            { name: "MySQL & Prisma", icon: "fas fa-database" },
            {
              name: "Node.js & Express.js",
              icon: "fab fa-node-js",
              color: "#339933",
            },
            { name: "React", icon: "fab fa-react" },
            { name: "Vue.js", icon: "fab fa-vuejs" },
            {
              name: "JavaScript & TypeScript",
              icon: "fab fa-js",
              color: "#3178c6",
            },
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "Github", icon: "fab fa-github-alt" },
            { name: "Figma", icon: "fab fa-figma" },
          ],
        },
      ],

      stats: [
        { label: "Years Experience", value: "4+" },
        { label: "Projects Completed", value: "25+" },
        { label: "Happy Clients", value: "15+" },
        { label: "Technologies", value: "8+" },
      ],

      skills: [
        { name: "Laravel", icon: "fab fa-laravel", color: "#ff2d20" },
        { name: "Vue.js", icon: "fab fa-vuejs", color: "#42b883" },
        { name: "React", icon: "fab fa-react", color: "#61dafb" },
        { name: "PHP", icon: "fab fa-php", color: "#777bb4" },
        { name: "MySQL", icon: "fas fa-database", color: "#00758f" },
        { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
        { name: "TypeScript", icon: "fab fa-js", color: "#3178c6" },
        { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
        { name: "Express.js", icon: "fas fa-server", color: "#000000" },
        { name: "Prisma", icon: "fas fa-database", color: "#0c344b" },
        { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572b6" },
        { name: "Tailwind CSS", icon: "fas fa-wind", color: "#38B2AC" },
        { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
        { name: "GitHub", icon: "fab fa-github", color: "#181717" },
        { name: "Figma", icon: "fab fa-figma", color: "#F24E1E" },
        { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3" },
        { name: "jQuery", icon: "fas fa-code", color: "#0769ad" },
        { name: "PHP Mailer", icon: "fas fa-envelope", color: "#00758f" },
        { name: "Face-api.js", icon: "fas fa-smile", color: "#6C63FF" },
        { name: "REST API", icon: "fas fa-plug", color: "#4A90E2" },
      ],

      codeSnippets: [
        {
          name: "Laravel",
          file: "UserController.php",
          language: "php",
          code: "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Models\\User;\nuse Illuminate\\Http\\Request;\n\nclass UserController extends Controller\n{\n    public function index()\n    {\n        $users = User::with('roles')\n            ->latest()\n            ->paginate(10);\n            \n        return view('users.index', compact('users'));\n    }\n    \n    public function store(Request $request)\n    {\n        $validated = $request->validate([\n            'name' => 'required|max:255',\n            'email' => 'required|email|unique:users',\n            'password' => 'required|min:8|confirmed',\n        ]);\n        \n        $user = User::create([\n            'name' => $validated['name'],\n            'email' => $validated['email'],\n            'password' => bcrypt($validated['password']),\n        ]);\n        \n        return redirect()->route('users.index')\n            ->with('success', 'User created successfully!');\n    }\n}",
        },
        {
          name: "Vue.js",
          file: "TodoList.vue",
          language: "javascript",
          code: '<template>\n  <div class="todo-app">\n    <input \n      v-model="newTodo" \n      @keyup.enter="addTodo"\n      placeholder="Add new task..."\n      class="input"\n    />\n    \n    <ul class="todo-list">\n      <li \n        v-for="todo in todos" \n        :key="todo.id"\n        :class="{ completed: todo.done }"\n      >\n        <input \n          type="checkbox" \n          v-model="todo.done"\n        />\n        <span>{{ todo.text }}</span>\n        <button @click="removeTodo(todo.id)">×</button>\n      </li>\n    </ul>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst todos = ref([]);\nconst newTodo = ref(\'\');\n\nconst addTodo = () => {\n  if (newTodo.value.trim()) {\n    todos.value.push({\n      id: Date.now(),\n      text: newTodo.value,\n      done: false\n    });\n    newTodo.value = \'\';\n  }\n};\n\nconst removeTodo = (id) => {\n  todos.value = todos.value.filter(t => t.id !== id);\n};\n<\/script>',
        },
        {
          name: "React",
          file: "Dashboard.jsx",
          language: "javascript",
          code: "import React, { useState, useEffect } from 'react';\nimport axios from 'axios';\n\nconst Dashboard = () => {\n  const [stats, setStats] = useState({\n    users: 0,\n    revenue: 0,\n    orders: 0\n  });\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    fetchDashboardStats();\n  }, []);\n\n  const fetchDashboardStats = async () => {\n    try {\n      const { data } = await axios.get('/api/dashboard/stats');\n      setStats(data);\n    } catch (error) {\n      console.error('Error fetching stats:', error);\n    } finally {\n      setLoading(false);\n    }\n  };\n\n  if (loading) return <div>Loading...</div>;\n\n  return (\n    <div className=\"dashboard\">\n      <h1>Analytics Dashboard</h1>\n      <div className=\"stats-grid\">\n        <StatCard title=\"Users\" value={stats.users} />\n        <StatCard title=\"Revenue\" value={'$' + stats.revenue} />\n        <StatCard title=\"Orders\" value={stats.orders} />\n      </div>\n    </div>\n  );\n};\n\nexport default Dashboard;",
        },
        {
          name: "API",
          file: "api.js",
          language: "javascript",
          code: "const express = require('express');\nconst router = express.Router();\nconst jwt = require('jsonwebtoken');\nconst bcrypt = require('bcrypt');\n\n// User authentication\nrouter.post('/auth/login', async (req, res) => {\n  try {\n    const { email, password } = req.body;\n    \n    const user = await User.findOne({ email });\n    if (!user) {\n      return res.status(401).json({ \n        error: 'Invalid credentials' \n      });\n    }\n    \n    const validPassword = await bcrypt.compare(\n      password, \n      user.password\n    );\n    \n    if (!validPassword) {\n      return res.status(401).json({ \n        error: 'Invalid credentials' \n      });\n    }\n    \n    const token = jwt.sign(\n      { id: user._id, email: user.email },\n      process.env.JWT_SECRET,\n      { expiresIn: '24h' }\n    );\n    \n    res.json({ \n      token, \n      user: {\n        id: user._id,\n        name: user.name,\n        email: user.email\n      }\n    });\n  } catch (error) {\n    res.status(500).json({ error: error.message });\n  }\n});\n\nmodule.exports = router;",
        },
      ],
      currentCodeFile: "UserController.php",
      currentCodeLanguage: "php",
      currentCode: "",

      gameState: {
        target: [],
        current: [],
        moves: 0,
        won: false,
      },

      apiDemo: {
        quote: "",
        author: "",
        loading: false,
      },

      projects: [
        {
          title: "WebInn | School Management System",
          description:
            "A Laravel-based system with face recognition attendance, QR code scanning, and grading for students, teachers, admins, and counselors. Built with TensorFlow.js and Face-api.js.",
          url: "#",
          repository: "https://github.com/aldrin112602/WebInn",
          tags: [
            "Laravel 11",
            "Face-api.js",
            "TensorFlow.js",
            "Tailwind.css",
            "JavaScript",
          ],
        },
        {
          title: "Tingloy Ferry Reservation System",
          description:
            "Ferry reservation platform with account creation, ticket booking, multiple payment options, group booking, automated passenger tracking, and email notifications.",
          url: "#",
          repository:
            "https://github.com/aldrin112602/Tingloy-Ferry-Reservation-System",
          tags: ["Laravel 12", "React", "TypeScript", "Tailwind.css"],
        },
        {
          title: "Cookpal Front-end | Personal Recipe App",
          description:
            "Mobile app built with Ionic and React, powered by a Laravel API. Explore, save, and create recipes with meal planning features.",
          url: "#",
          repository: "https://github.com/aldrin112602/CookPal",
          tags: ["Ionic", "React", "Laravel API", "TypeScript", "Tailwind.css"],
        },
        {
          title: "Cookpal Backend API",
          description:
            "Mobile app built with Ionic and React, powered by a Laravel API. Explore, save, and create recipes with meal planning features.",
          url: "#",
          repository: "https://github.com/aldrin112602/CookPal-API",
          tags: ["Ionic", "React", "Laravel API", "TypeScript", "Tailwind.css"],
        },
        {
          title: "Mail API",
          description:
            "Web API for sending emails via HTTP requests with custom sender, subject, and body content. Built with Node.js and Express for contact forms and notifications.",
          url: "#",
          repository: "https://github.com/aldrin112602/mail-api-v1",
          tags: ["Node.js", "Express", "REST API", "Render"],
        },
        {
          title: "Swiftlink | Fiber Internet Website",
          description:
            "Fiber internet billing and subscription management system supporting multiple user roles including Admin, Lineman, and Subscribers.",
          url: "#",
          repository: "https://github.com/aldrin112602/swiftlink-v2",
          tags: ["PHP", "Bootstrap", "jQuery", "MySQL"],
        },
        {
          title: "Inntayan Cabin Reservation System",
          description:
            "Cabin reservation system with a user-friendly interface for booking and managing reservations for both guests and admins.",
          url: "#",
          repository:
            "https://github.com/aldrin112602/inntayan-cabin-reservation",
          tags: ["PHP", "Bootstrap", "jQuery", "PHP Mailer"],
        },
        {
          title: "PIMS",
          description:
            "A comprehensive population information management system that enables registration of residents, automated record keeping, demographic analysis, and reporting. Built to improve efficiency, accuracy, and accessibility of population data for local governance.",
          url: "#",
          repository:
            "https://github.com/aldrin112602/Population-Information-Management-System",
          tags: ["PHP", "Bootstrap", "jQuery", "PHP Mailer"],
        },
      ],

      contact: {
        email: "caballeroaldrin02@gmail.com",
      },
    };
  },
  computed: {
    highlightedCode() {
      return hljs.highlight(this.currentCode, {
        language: this.currentCodeLanguage,
      }).value;
    },
  },
  methods: {
    copyCode() {
      navigator.clipboard.writeText(this.currentCode).then(() => {
        const originalFile = this.currentCodeFile;
        this.currentCodeFile = "✅ Copied to Clipboard!";
        setTimeout(() => {
          this.currentCodeFile = originalFile;
        }, 2000);
      });
    },
    toggleTheme() {
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    },

    typeText() {
      const currentPhrase = this.typingPhrases[this.currentPhraseIndex];

      if (!this.isDeleting) {
        if (this.currentCharIndex < currentPhrase.length) {
          this.typedText = currentPhrase.substring(
            0,
            this.currentCharIndex + 1,
          );
          this.currentCharIndex++;
          setTimeout(() => this.typeText(), this.typingSpeed);
        } else {
          setTimeout(() => {
            this.isDeleting = true;
            this.typeText();
          }, 2000);
        }
      } else {
        if (this.currentCharIndex > 0) {
          this.typedText = currentPhrase.substring(
            0,
            this.currentCharIndex - 1,
          );
          this.currentCharIndex--;
          setTimeout(() => this.typeText(), 50);
        } else {
          this.isDeleting = false;
          this.currentPhraseIndex =
            (this.currentPhraseIndex + 1) % this.typingPhrases.length;
          setTimeout(() => this.typeText(), 500);
        }
      }
    },

    changeCode(snippet) {
      this.currentCodeFile = snippet.file;
      this.currentCodeLanguage = snippet.language;
      this.currentCode = snippet.code;
    },

    generatePattern() {
      // Creates a flat 16-element array of booleans
      const pattern = Array(16).fill(false);
      // Determine how many cells to light up (between 4 and 8)
      const numActive = Math.floor(Math.random() * 5) + 4;
      let count = 0;

      while (count < numActive) {
        const index = Math.floor(Math.random() * 16);
        if (!pattern[index]) {
          pattern[index] = true;
          count++;
        }
      }
      return pattern;
    },

    resetGame() {
      // Generate a new target pattern
      this.gameState.target = this.generatePattern();
      // Reset user progress to all false
      this.gameState.current = Array(16).fill(false);
      this.gameState.moves = 0;
      this.gameState.won = false;
    },

    toggleCell(index) {
      if (this.gameState.won) return;

      // Toggle the boolean value at the specific index
      this.gameState.current[index] = !this.gameState.current[index];
      this.gameState.moves++;

      // Check for win condition by comparing every element
      const isMatch = this.gameState.current.every(
        (val, i) => val === this.gameState.target[i],
      );

      if (isMatch) {
        this.gameState.won = true;
      }
    },
    async fetchQuote() {
      this.apiDemo.loading = true;

      const quotes = [
        {
          text: "Code is like humor. When you have to explain it, it's bad.",
          author: "Cory House",
        },
        {
          text: "First, solve the problem. Then, write the code.",
          author: "John Johnson",
        },
        {
          text: "Experience is the name everyone gives to their mistakes.",
          author: "Oscar Wilde",
        },
        {
          text: "In order to be irreplaceable, one must always be different.",
          author: "Coco Chanel",
        },
        {
          text: "Java is to JavaScript what car is to Carpet.",
          author: "Chris Heilmann",
        },
        { text: "Knowledge is power.", author: "Francis Bacon" },
        {
          text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
          author: "Dan Salomon",
        },
        {
          text: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
          author: "Antoine de Saint-Exupery",
        },
        {
          text: "Code never lies, comments sometimes do.",
          author: "Ron Jeffries",
        },
        {
          text: "Simplicity is the soul of efficiency.",
          author: "Austin Freeman",
        },
      ];

      setTimeout(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        this.apiDemo.quote = randomQuote.text;
        this.apiDemo.author = randomQuote.author;
        this.apiDemo.loading = false;
      }, 1000);
    },
  },
  mounted() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      this.darkMode = true;
      document.documentElement.classList.add("dark");
    } else {
      this.darkMode = false;
      document.documentElement.classList.remove("dark");
    }

    this.typeText();
    this.currentCode = this.codeSnippets[0].code;
    this.resetGame();
  },
}).mount("#app");
