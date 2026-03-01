/* =============================================
   CONFIG.JS — Edit data di sini untuk update portofolio
   ============================================= */

const CONFIG = {

  // ===== IDENTITAS =====
  name:        "Abdul Kholid Iswan",
  degree:      "S.Kom.",
  title:       "Full Stack Developer & IoT Engineer",
  shortName:   "Iswan",
  description: "Full Stack Developer & IoT Engineer yang berfokus membangun aplikasi web modern, scalable, dan berperforma tinggi, serta berpengalaman dalam pemrograman mikrokontroler (Arduino, ESP8266, ESP32) dan pengembangan sistem IoT. Berpengalaman di bidang freelance dengan teknologi terkini.",
  location:    "Indonesia 🇮🇩",
  available:   true,
  photo:       "assets/photo.jpg",

  // ===== KONTAK =====
  email:          "isoftdigital@gmail.com",
  github:         "https://github.com/iswansoftware",
  githubUsername: "@iswansoftware",
  linkedin:       "https://www.linkedin.com/in/iswan",
  linkedinName:   "Abdul Kholid Iswan",
  whatsapp:       "6285607502566", // format: 62xxxxxxxxxxx (tanpa +)

  // ===== STATISTIK (About section) =====
  experienceYears: "5+",
  projectsDone:    "20+",

  // ===== TYPED ROLES (Hero section) =====
  roles: [
    "Full Stack Developer",
    "Laravel Specialist",
    "React.js Enthusiast",
    "Freelance Developer",
    "Web App Engineer",
    "Microcontroller Programmer",
    "IoT Developer",
    
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
      period:  "2015 — Sekarang",
      icon:    "fa-laptop-code",
      tasks: [
        "Membangun aplikasi web end-to-end menggunakan Laravel + React.js",
        "Merancang dan mengimplementasikan REST API untuk kebutuhan client",
        "Pengembangan dan maintenance sistem manajemen berbasis web",
        "Konsultasi teknis dan optimasi performa aplikasi untuk klien",
        "Mengelola version control menggunakan Git & GitHub",
      ],
      techs: ["Laravel", "React.js", "JavaScript", "MySQL", "REST API", "Git"],
    },
    {
      role:    "Microcontroller Programmer & IoT Developer",
      company: "Freelance / Self-Employed",
      period:  "2018 — Sekarang",
      icon:    "fa-microchip",
      tasks: [
        "Merancang dan memprogram sistem berbasis Arduino, ESP8266, dan ESP32",
        "Membangun perangkat IoT untuk otomasi rumah, monitoring sensor, dan kontrol jarak jauh",
        "Mengintegrasikan mikrokontroler dengan aplikasi web melalui protokol MQTT dan WebSocket",
        "Membuat sistem bel sekolah otomatis dan jam waktu sholat berbasis mikrokontroler",
        "Merancang rangkaian elektronik dan firmware C/C++ untuk kebutuhan klien",
      ],
      techs: ["Arduino", "ESP8266", "ESP32", "C/C++", "MQTT", "IoT", "WebSocket"],
    },
  ],

  // ===== PROYEK =====
  projects: [
    {
      title:       "Jam Waktu Sholat & Adzan Otomatis berbasis ESP8266 dan Arduino",
      description: "Jam waktu sholat dengan fitur adzan otomatis menggunakan ESP8266 dan Arduino, menampilkan jadwal sholat dan informasi cuaca menggunakan Led Matrix Display`.`",
      icon:        "fa-mosque",
      gradient:    "from-primary/30 to-secondary/20",
      iconColor:   "text-primary/40",
      hoverBorder: "hover:border-primary/50",
      hoverTitle:  "group-hover:text-primary",
      status:      { label: "Completed", color: "blue" },
      techs:       ["Arduino", "ESP8266", "IoT"],
      github:      "https://github.com/iswansoftware",
      // demo:        "#",
    },
    {
      title:       "Pemrograman Mikrokontroler untuk Cerdas Cermat",
      description: "Pemrograman mikrokontroler menggunakan ESP8266 untuk  cerdas cermat, dengan tombol buzzer sebagai input dan LED sebagai output, memberikan pengalaman interaktif untuk peserta cerdas cermat.",
      icon:        "fa-microchip",
      gradient:    "from-secondary/30 to-primary/20",
      iconColor:   "text-secondary/40",
      hoverBorder: "hover:border-secondary/50",
      hoverTitle:  "group-hover:text-secondary",
      status:      { label: "Completed", color: "blue" },
      techs:       ["ESP8266", "Arduino", "WebSocket"],
      github:      "https://github.com/iswansoftware",
      // demo:        "#",
    },
    {
      title:       "Bel Sekola Otomatis berbasis ESP8266 dan Arduino",
      description: "Bel sekolah otomatis menggunakan ESP8266 dan Arduino, dengan fitur pengaturan jadwal, notifikasi suara, dan kontrol jarak jauh.",
      icon:        "fa-bell",
      gradient:    "from-accent/30 to-orange-500/20",
      iconColor:   "text-accent/40",
      hoverBorder: "hover:border-accent/50",
      hoverTitle:  "group-hover:text-accent",
      status:      { label: "Completed", color: "blue" },
      techs:       ["ESP8266", "Arduino", "IoT"],
      github:      "https://github.com/iswansoftware",
      // demo:        "#",
    },
    {
      title:       "Aplikasi sistem manajemen notaris dan ppat berbasis Laravel dan React.js ",
      description: "Aplikasi sistem manajemen untuk notaris dan ppat berbasis Laravel dan React.js, dengan fitur manajemen dokumen, jadwal, dan laporan keuangan.",
      icon:        "fa-file-contract",
      gradient:    "from-pink-500/30 to-purple-500/20",
      iconColor:   "text-pink-500/40",
      hoverBorder: "hover:border-pink-500/50",
      hoverTitle:  "group-hover:text-pink-400",
      status:      { label: "Live", color: "green" },
      techs:       ["Laravel", "React.js", "TailwindCSS"],
      github:      "https://github.com/iswansoftware",
      // demo:        null,
    },
    {
      title:       "Template dashboard untuk company profile, sekolah berbasis Laravel dan React.js",
      description: "Template dashboard untuk company profile dan sekolah berbasis Laravel dan React.js, dengan fitur analitik bisnis, visualisasi data interaktif, laporan real-time, dan export PDF.",
      icon:        "fa-gauge",
      gradient:    "from-green-500/30 to-teal-500/20",
      iconColor:   "text-green-500/40",
      hoverBorder: "hover:border-green-500/50",
      hoverTitle:  "group-hover:text-green-400",
      status:      { label: "Completed", color: "blue" },
      techs:       ["React.js", "Chart.js", "Laravel API"],
      github:      "https://github.com/iswansoftware",
      // demo:        null,
    },
  ],

};
