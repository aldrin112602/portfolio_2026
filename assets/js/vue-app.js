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
  methods: {
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
  },
}).mount("#app");
