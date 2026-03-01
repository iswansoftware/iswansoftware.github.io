/* =============================================
   CONFIG.JS — Edit data di sini untuk update portofolio
   ============================================= */

const CONFIG = {

  // ===== IDENTITAS =====
  name:        "Abdul Kholid Iswan",
  degree:      "S.Kom.",
  title:       "Full Stack Developer",
  shortName:   "Iswan",
  description: "Full Stack Developer yang berfokus membangun aplikasi web modern, scalable, dan berperforma tinggi. Berpengalaman di bidang freelance dengan teknologi terkini.",
  location:    "Indonesia 🇮🇩",
  available:   true,
  photo:       "assets/photo.svg",

  // ===== KONTAK =====
  email:          "isoft.sby@gmail.com",
  github:         "https://github.com/iswansoftware",
  githubUsername: "@iswansoftware",
  linkedin:       "https://www.linkedin.com/in/iswan",
  linkedinName:   "Abdul Kholid Iswan",
  whatsapp:       "6285607502566", // format: 62xxxxxxxxxxx (tanpa +)

  // ===== STATISTIK (About section) =====
  experienceYears: "3+",
  projectsDone:    "20+",

  // ===== TYPED ROLES (Hero section) =====
  roles: [
    "Full Stack Developer",
    "Laravel Specialist",
    "React.js Enthusiast",
    "Freelance Developer",
    "Web App Engineer",
  ],

  // ===== PENDIDIKAN =====
  education: {
    university:  "Institut Sains Teknologi Palapa Malang",
    major:       "S1 Teknik Informatika",
    badge:       "Lulus S.Kom.",
    location:    "Malang, Jawa Timur",
    description: "Menempuh pendidikan di bidang Teknik Informatika dengan fokus pada pengembangan perangkat lunak, pemrograman web, dan rekayasa sistem informasi.",
    skills:      ["Pemrograman Web", "Rekayasa Perangkat Lunak", "Basis Data", "Algoritma & Struktur Data", "Sistem Informasi"],
  },

  // ===== PENGALAMAN =====
  experiences: [
    {
      role:    "Full Stack Developer",
      company: "Freelance / Self-Employed",
      period:  "2022 — Sekarang",
      icon:    "fa-laptop-code",
      tasks: [
        "Membangun aplikasi web end-to-end menggunakan Laravel + React.js",
        "Merancang dan mengimplementasikan REST API untuk kebutuhan client",
        "Pengembangan dan maintenance sistem manajemen berbasis web",
        "Konsultasi teknis dan optimasi performa aplikasi untuk klien",
        "Mengelola version control menggunakan Git & GitHub",
      ],
      techs: ["Laravel", "React.js", "JavaScript", "MySQL", "REST API"],
    },
  ],

  // ===== PROYEK =====
  projects: [
    {
      title:       "E-Commerce Platform",
      description: "Sistem e-commerce lengkap dengan fitur manajemen produk, keranjang belanja, payment gateway, dan dashboard admin.",
      icon:        "fa-shopping-cart",
      gradient:    "from-primary/30 to-secondary/20",
      iconColor:   "text-primary/40",
      hoverBorder: "hover:border-primary/50",
      hoverTitle:  "group-hover:text-primary",
      status:      { label: "Live", color: "green" },
      techs:       ["Laravel", "React.js", "MySQL"],
      github:      "https://github.com/iswansoftware",
      demo:        "#",
    },
    {
      title:       "Sistem Manajemen Tugas",
      description: "Aplikasi manajemen tugas & proyek dengan fitur kolaborasi tim, tracking progress, notifikasi real-time.",
      icon:        "fa-tasks",
      gradient:    "from-secondary/30 to-primary/20",
      iconColor:   "text-secondary/40",
      hoverBorder: "hover:border-secondary/50",
      hoverTitle:  "group-hover:text-secondary",
      status:      { label: "Completed", color: "blue" },
      techs:       ["React.js", "Laravel API", "WebSocket"],
      github:      "https://github.com/iswansoftware",
      demo:        "#",
    },
    {
      title:       "Sistem Informasi Sekolah",
      description: "Aplikasi SIAKAD sekolah dengan manajemen siswa, guru, nilai, absensi, dan laporan akademik.",
      icon:        "fa-graduation-cap",
      gradient:    "from-accent/30 to-orange-500/20",
      iconColor:   "text-accent/40",
      hoverBorder: "hover:border-accent/50",
      hoverTitle:  "group-hover:text-accent",
      status:      { label: "Live", color: "green" },
      techs:       ["Laravel", "JavaScript", "Bootstrap"],
      github:      "https://github.com/iswansoftware",
      demo:        "#",
    },
    {
      title:       "Blog CMS Platform",
      description: "Platform blog modern dengan fitur CMS, editor rich text, SEO optimized, dan manajemen konten.",
      icon:        "fa-blog",
      gradient:    "from-pink-500/30 to-purple-500/20",
      iconColor:   "text-pink-500/40",
      hoverBorder: "hover:border-pink-500/50",
      hoverTitle:  "group-hover:text-pink-400",
      status:      null,
      techs:       ["Laravel", "React.js", "TailwindCSS"],
      github:      "https://github.com/iswansoftware",
      demo:        null,
    },
    {
      title:       "Dashboard Analytics",
      title:       "Dashboard Analytics",
      description: "Dashboard analitik bisnis dengan visualisasi data interaktif, laporan real-time, dan export PDF.",
      icon:        "fa-chart-line",
      gradient:    "from-green-500/30 to-teal-500/20",
      iconColor:   "text-green-500/40",
      hoverBorder: "hover:border-green-500/50",
      hoverTitle:  "group-hover:text-green-400",
      status:      null,
      techs:       ["React.js", "Chart.js", "Laravel API"],
      github:      "https://github.com/iswansoftware",
      demo:        null,
    },
  ],

};
