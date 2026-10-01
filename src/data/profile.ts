// Data statis profil — diambil dari GitHub @Rohesa123 (per Juni 2026).
// Dipisah dari komponen agar gampang di-update sewaktu-waktu.
//
// Data berbentuk daftar (sosial, sertifikat, tech stack, proyek) ada di
// content.json — tambah/ubah item di sana, tidak perlu menyentuh file ini.

import content from "./content.json";

export const profile = {
  name: "Rohesa Sidiq Permana",
  username: "Rohesa123",
  avatar: "https://avatars.githubusercontent.com/u/94891358?v=4",
  location: "Indonesia",
  role: "Java & Spring Boot Developer",
  tagline: "Membangun backend yang kokoh, aman, dan rapi dengan Java & Spring Boot.",
  email: "rohesasidiqpermana05@gmail.com",
  githubUrl: "https://github.com/Rohesa123",
  blogUrl: "https://rohesa.vercel.app",
  joinedYear: 2021,
  // Bio singkat — silakan revisi sesuai gaya Anda.
  bio: "Backend Developer di PT Digital Amore Kriyanesia (DAK). Saya fokus membangun REST API dan sistem yang aman menggunakan Java & Spring Boot, dengan minat khusus pada keamanan aplikasi (JWT & 2FA). Di luar itu saya juga membangun aplikasi mobile dan web, serta terus belajar teknologi baru.",
} as const;

// Perusahaan tempat bekerja saat ini (deskripsi ada di i18n).
export const company = {
  name: "PT Digital Amore Kriyanesia",
  short: "DAK",
  role: "Backend Developer",
  url: "https://dak.co.id/",
} as const;

// Tautan media sosial. `type` dipakai untuk memilih ikon (lihat SocialLinks.tsx).
export type SocialType =
  | "github"
  | "linkedin"
  | "twitter"
  | "instagram"
  | "facebook"
  | "email"
  | "blog";

export type Social = { type: SocialType; label: string; url: string };

/** Teks dwibahasa di content.json. */
export type Localized = { id: string; en: string };

export const socials = content.socials as Social[];

export type Certificate = { title: string; issuer: string; url: string };

export const certificates: Certificate[] = content.certificates;

// Access key Web3Forms — daftar gratis di https://web3forms.com (cukup masukkan
// email, key dikirim ke email Anda), lalu tempel di sini. Selama masih kosong,
// form kontak otomatis memakai fallback mailto (buka aplikasi email pengunjung).
export const WEB3FORMS_ACCESS_KEY = "7bb7e3c8-13c0-4f0d-8182-f70c06e5fd18";

// Nilai cadangan (fallback) — dipakai HANYA kalau belum pernah ada data live
// tersimpan di cache (mis. kunjungan pertama + langsung kena rate limit).
export type LanguageStat = { name: string; count: number; pct: number };

export const staticSnapshot = {
  publicRepos: 24,
  followers: 11,
  following: 20,
  createdYear: 2021,
  name: profile.name,
  avatar: profile.avatar,
  bio: null as string | null,
  location: profile.location as string | null,
  // Distribusi bahasa cadangan (dari snapshot repo terakhir).
  languages: [
    { name: "Java", count: 4, pct: 33 },
    { name: "Dart", count: 3, pct: 25 },
    { name: "PHP", count: 2, pct: 17 },
    { name: "JavaScript", count: 1, pct: 8 },
    { name: "TypeScript", count: 1, pct: 8 },
    { name: "C++", count: 1, pct: 8 },
  ] as LanguageStat[],
};

// Urutan kartu statistik. `key` = field di snapshot, `labelKey` = teks di i18n.
export const statFields = [
  { key: "publicRepos", labelKey: "repos" },
  { key: "followers", labelKey: "followers" },
  { key: "following", labelKey: "following" },
  { key: "createdYear", labelKey: "since" },
] as const;

export type Tech = { name: string; description: Localized };

// Diurutkan dari yang paling dominan di portofolio.
export const techStack = content.techStack as Tech[];

export type Project = {
  name: string;
  language: string;
  stars?: number;
  /** Rujukan spesifikasi resmi, kalau proyeknya mengimplementasikan sebuah standar. */
  spec?: string;
  description: Localized;
  highlight: Localized;
};

export const featuredProjects: Project[] = content.projects;
