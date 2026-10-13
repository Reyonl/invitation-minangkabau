export interface CoupleProfile {
  fullName: string;
  nickname: string;
  titleTradisi?: string; // "Anak Daro" atau "Marapulai"
  father: string;
  mother: string;
  photo: string;
  instagram?: string;
  bio?: string;
}

export interface WeddingEvent {
  title: string;
  subtitle?: string;
  date: string; // "Sabtu, 28 November 2026"
  isoDate: string; // "2026-11-28"
  time: string; // "08:00 - 10:00 WIB"
  venue: string;
  address: string;
  mapsUrl: string;
  calendarLink?: string;
}

export interface StoryMilestone {
  year: string;
  title: string;
  description: string;
  photo?: string;
}

export interface GalleryPhoto {
  url: string;
  caption?: string;
  span?: "tall" | "wide" | "normal";
}

export interface BankGift {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  qrCodeUrl?: string;
}

export interface WeddingData {
  title: string;
  subTitleTradisi: string;
  heroPhoto?: string;
  couple: {
    groom: CoupleProfile;
    bride: CoupleProfile;
    hashtag: string;
  };
  countdownDate: string; // Target date ISO 8601 string: 28 November 2026
  quotes: {
    verse: string;
    source: string;
    petatahMinang?: string;
    meaning?: string;
  };
  events: {
    ceremony: WeddingEvent; // Akad Nikah
    reception: WeddingEvent; // Baralek Gadang (Resepsi)
  };
  stories: StoryMilestone[];
  gallery: GalleryPhoto[];
  gifts: BankGift[];
  audio: {
    url: string;
    title: string;
    artist: string;
    autoplayOnOpen: boolean;
  };
  socialLinks?: {
    instagram?: string;
    whatsappShareText?: string;
  };
}

export const weddingData: WeddingData = {
  title: "The Wedding of Diah & Made",
  subTitleTradisi: "Baralek Gadang — Pernikahan Adat Minangkabau",
  heroPhoto: "/images/hero/hero-photo.jpg",
  couple: {
    groom: {
      fullName: "I Made Aryana Putra.",
      nickname: "Made",
      titleTradisi: "Marapulai",
      father: "Bpk. I Wayan Suryawan",
      mother: "Ibu Ni Made Astuti",
      photo: "/images/profiles/made-profile.jpg",
      instagram: "@aryanaputra",
      bio: "Putra pertama yang penuh dedikasi, berprinsip kokoh, dan berhati tulus.",
    },
    bride: {
      fullName: "Diah Insani.",
      nickname: "Diah",
      titleTradisi: "Anak Daro",
      father: "Alm. Bpk. Maraidijon.",
      mother: "Ibu Rina Mardiyah S.pd.",
      photo: "/images/profiles/diah-profile.jpg",
      instagram: "@diahinsani",
      bio: "Putri tercinta yang anggun, berhati lembut, dan senantiasa membawa kehangatan di tengah keluarga.",
    },
    hashtag: "#DiahMadeBaralek",
  },
  countdownDate: "2026-11-28T08:00:00+07:00",
  quotes: {
    verse:
      "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    source: "QS. Ar-Rum: 21",
    petatahMinang:
      "Anak dipangku kamanakan dibimbiang, urang kampuang dipatenggangkan. Samanih rancak bungo kambang, baitu cinto manjalin janji suci.",
    meaning:
      "Dengan restu orang tua dan keluarga besar, dua insan bersatu mengikat janji suci dalam bingkai adat yang luhur dan ridho Illahi.",
  },
  events: {
    ceremony: {
      title: "Akad Nikah",
      subtitle: "Prosesi Ijab Kabul & Janji Suci",
      date: "Sabtu, 28 November 2026",
      isoDate: "2026-11-28",
      time: "08:00 - 10:00 WIB",
      venue: "Kediaman Mempelai Wanita",
      address: "Jl. Dayung IIIC No.6, RT.4/RW.6, Klp. Dua, Kecamatan Kelapa Dua, Kabupaten Tangerang, Banten 15810",
      mapsUrl: "https://maps.app.goo.gl/vGJdqmPMKnoCSBZEA",
    },
    reception: {
      title: "Baralek Gadang (Resepsi)",
      subtitle: "Perayaan Adat & Jamuan Kasih Keluarga Besar",
      date: "Sabtu, 28 November 2026",
      isoDate: "2026-11-28",
      time: "11:00 - 16:00 WIB",
      venue: "Kediaman Mempelai Wanita",
      address: "Jl. Dayung IIIC No.6, RT.4/RW.6, Klp. Dua, Kecamatan Kelapa Dua, Kabupaten Tangerang, Banten 15810",
      mapsUrl: "https://maps.app.goo.gl/vGJdqmPMKnoCSBZEA",
    },
  },
  stories: [
    {
      year: "2020",
      title: "Mulo Basuo (Pertemuan Pertama)",
      description:
        "Sebuah perjumpaan tak terduga yang membuka ruang komunikasi penuh rasa saling menghargai dan menyatukan dua latar belakang yang saling melengkapi.",
      photo: "/images/story/story-1.jpg",
    },
    {
      year: "2022",
      title: "Manjalin Janji (Membangun Komitmen)",
      description:
        "Berjalan beriringan dalam suka dan duka, belajar saling mengerti dan menaruh keyakinan bahwa takdir sedang menenun perjalanan kami berdua.",
      photo: "/images/story/story-2.jpg",
    },
    {
      year: "2025",
      title: "Batimbang Tando (Hari Lamaran)",
      description:
        "Di hadapan keluarga besar dengan segenap adat dan kehormatan, cincin tanda kesungguhan disematkan sebagai ikrar menuju mahligai rumah tangga.",
      photo: "/images/story/story-3.jpg",
    },
    {
      year: "2026",
      title: "Baralek Gadang (Hari Bahagia)",
      description:
        "Dengan penuh rasa syukur dan doa restu niniak mamak serta kedua orang tua, kami melangkah bersama mengarungi samudera kehidupan.",
      photo: "/images/story/story-4.jpg",
    },
  ],
  gallery: [
    {
      url: "/images/gallery/gallery-1.jpg",
      caption: "Janji Suci dalam Keanggunan Tradisi",
      span: "tall",
    },
    {
      url: "/images/gallery/gallery-2.jpg",
      caption: "Duo Hati Manjalin Cinto",
      span: "wide",
    },
    {
      url: "/images/gallery/gallery-3.jpg",
      caption: "Momen Penuh Kehangatan",
      span: "normal",
    },
    {
      url: "/images/gallery/gallery-4.jpg",
      caption: "Saliang Manuntun Manuju Ridho-Nya",
      span: "normal",
    },
    {
      url: "/images/gallery/gallery-5.jpg",
      caption: "Cahaya Emas di Hari Bahagia",
      span: "wide",
    },
    {
      url: "/images/gallery/gallery-6.jpg",
      caption: "Langkah Abadi Berdua",
      span: "tall",
    },
  ],
  gifts: [
    {
      bankName: "Bank Central Asia (BCA)",
      accountNumber: "8801234567",
      accountHolder: "Diah Insani",
    },
    {
      bankName: "Bank Mandiri",
      accountNumber: "1370019283746",
      accountHolder: "I Made Aryana Putra",
    },
  ],
  audio: {
    url: "/audio/wedding-song.mp3",
    title: "Urang Minang Baralek Gadang",
    artist: "Randy Chow feat. Yeyen Zymra",
    autoplayOnOpen: true,
  },
  socialLinks: {
    whatsappShareText:
      "Assalamu'alaikum Wr. Wb. Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri Baralek Gadang (Pernikahan) kami: Diah Insani & I Made Aryana Putra.",
  },
};
