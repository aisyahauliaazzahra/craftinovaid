// Company information
export const companyInfo = {
  name: "Craftinova",
  tagline: "DIY Art Therapy untuk Kesehatan Mental",
  description: "Craftinova adalah brand yang menghadirkan kit DIY berbasis art therapy untuk membantu mengurangi stress. Kami menggunakan limbah tekstil sebagai bahan utama kit, menciptakan solusi yang ramah lingkungan sekaligus bermanfaat untuk kesehatan mental Anda.",
  vision: "Menciptakan dunia yang lebih tenang melalui seni dan kreativitas berkelanjutan",
  mission: [
    "Menyediakan kit DIY art therapy yang mudah digunakan dan efektif",
    "Memanfaatkan limbah tekstil untuk produk yang ramah lingkungan",
    "Memberikan edukasi tentang manfaat art therapy untuk kesehatan mental",
    "Membangun komunitas kreatif yang peduli lingkungan dan kesehatan mental"
  ]
};

// Articles data
export const articles = [
  {
    id: 1,
    title: "Art Therapy: Cara Efektif Mengurangi Stress",
    excerpt: "Mengenal lebih dalam tentang art therapy dan bagaimana aktivitas kreatif dapat membantu menenangkan pikiran...",
    image: "🎨",
    date: "15 Agustus 2025",
    readTime: "5 min",
    content: "Art therapy telah terbukti secara ilmiah dapat mengurangi tingkat stress dan kecemasan. Melalui aktivitas kreatif seperti melukis, menjahit, atau kerajinan tangan, otak melepaskan hormon endorfin yang memberikan perasaan tenang dan bahagia. Craftinova menyediakan kit yang dirancang khusus untuk memaksimalkan manfaat art therapy ini."
  },
  {
    id: 2,
    title: "DIY Craft: Terapi Kreatif di Rumah",
    excerpt: "Pelajari cara membuat kerajinan DIY sederhana yang dapat membantu meredakan stress dalam kehidupan sehari-hari...",
    image: "✂️",
    date: "12 Agustus 2025",
    readTime: "7 min",
    content: "Kegiatan DIY craft di rumah dapat menjadi bentuk meditasi aktif yang efektif. Fokus pada detail pekerjaan tangan membantu mengalihkan pikiran dari kekhawatiran sehari-hari. Kit Craftinova dirancang dengan panduan langkah demi langkah yang mudah diikuti, sehingga siapa saja dapat merasakan manfaat terapi kreatif."
  },
  {
    id: 3,
    title: "Limbah Tekstil untuk Kesehatan Mental",
    excerpt: "Bagaimana memanfaatkan limbah tekstil menjadi media terapi yang bermanfaat untuk kesehatan mental...",
    image: "♻️",
    date: "10 Agustus 2025",
    readTime: "8 min",
    content: "Menggunakan limbah tekstil dalam art therapy memberikan manfaat ganda: mengurangi sampah lingkungan sekaligus meningkatkan kesehatan mental. Tekstur dan warna kain bekas memberikan stimulasi sensorik yang menenangkan. Craftinova berkomitmen menggunakan bahan daur ulang berkualitas untuk setiap kit yang diproduksi."
  },
  {
    id: 4,
    title: "Mindful Crafting: Seni Meditasi Kreatif",
    excerpt: "Praktik mindfulness melalui kegiatan crafting yang dapat membantu mencapai ketenangan mental...",
    image: "🧘‍♀️",
    date: "8 Agustus 2025",
    readTime: "6 min",
    content: "Mindful crafting menggabungkan teknik mindfulness dengan aktivitas kreatif. Fokus penuh pada proses pembuatan kerajinan membantu menghilangkan pikiran negatif dan mencapai state of flow. Setiap kit Craftinova dilengkapi dengan panduan mindful crafting untuk memaksimalkan manfaat terapi."
  }
];

// Single product data
export const products = {
  id: 1,
  name: "Craftinova Complete DIY Kit",
  description: "Kit DIY lengkap 3-in-1 dengan bahan limbah tekstil berkualitas untuk membuat pouch, scrunchie, dan gantungan kunci",
  price: "Rp 125,000",
  originalPrice: "Rp 160,000",
  kitContents: [
    "Kain limbah tekstil berkualitas untuk pouch cantik",
    "Kain scrunchie dengan motif menarik",
    "Kain untuk gantungan kunci unik",
    "Gunting kecil khusus craft",
    "Jarum jahit berbagai ukuran",
    "Benang dalam 6 warna pilihan",
    "Ring metal untuk gantungan kunci",
    "Karet elastis untuk scrunchie", 
    "Tali kuat untuk gantungan kunci"
  ],
  features: [
    "3 project dalam 1 kit (pouch + scrunchie + keychain)",
    "Panduan video tutorial online step-by-step",
    "Template pola siap pakai untuk semua project",
    "Bahan 100% dari limbah tekstil daur ulang",
    "Eco-friendly packaging",
    "Estimated crafting time: 3-4 jam (santai & menyenangkan)"
  ],
  benefits: [
    "Mengurangi stress melalui aktivitas kreatif",
    "Menghasilkan 3 produk fungsional sekaligus",
    "Berkontribusi pada lingkungan dengan upcycling",
    "Meningkatkan fokus dan mindfulness"
  ],
  image: "🎨",
  shopeeLink: "https://shopee.co.id/craftinova-diy-kit" // Ganti dengan link Shopee yang sebenarnya
};

// Initial questions for quiz
export const initialQuestions = [
  {
    id: 1,
    question: "Seberapa sering Anda merasa stres dalam seminggu terakhir?",
    options: ["Tidak pernah", "1-2 kali", "3-4 kali", "Hampir setiap hari"]
  },
  {
    id: 2,
    question: "Aktivitas kreatif apa yang paling menarik bagi Anda?",
    options: ["Menjahit/Bordir", "Melukis/Menggambar", "Kerajinan Tangan", "Belum pernah mencoba"]
  },
  {
    id: 3,
    question: "Berapa lama waktu yang bisa Anda luangkan untuk aktivitas relaksasi?",
    options: ["15-30 menit", "30-60 menit", "1-2 jam", "Lebih dari 2 jam"]
  }
];

// Post-test questions
export const postTestQuestions = [
  {
    id: 1,
    question: "Setelah menonton tutorial, seberapa tertarik Anda mencoba DIY art therapy?",
    options: ["Sangat tertarik", "Tertarik", "Cukup tertarik", "Kurang tertarik"]
  },
  {
    id: 2,
    question: "Apakah Anda merasa aktivitas kreatif dapat membantu mengurangi stress?",
    options: ["Sangat yakin", "Yakin", "Mungkin", "Tidak yakin"]
  },
  {
    id: 3,
    question: "Seberapa penting bagi Anda menggunakan bahan ramah lingkungan?",
    options: ["Sangat penting", "Penting", "Cukup penting", "Tidak terlalu penting"]
  },
  {
    id: 4,
    question: "Bagaimana perasaan Anda saat ini setelah mengetahui tentang art therapy?",
    options: ["Sangat tenang", "Tenang", "Biasa saja", "Masih stres"]
  },
  {
    id: 5,
    question: "Seberapa sering Anda berencana melakukan aktivitas crafting?",
    options: ["Setiap hari", "Beberapa kali seminggu", "Seminggu sekali", "Sesekali saja"]
  }
];