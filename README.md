# Portofolio — Rohesa Sidiq Permana

Website portofolio pribadi saya sebagai **Backend Engineer (Java & Spring Boot)**. Dibangun dengan React, TypeScript, Vite, dan Tailwind CSS.

## Fitur

- Profil, tentang saya, tech stack, proyek unggulan, dan sertifikat
- Statistik GitHub live (dengan data cadangan bila API gagal)
- Dwibahasa (Indonesia / English) dan tema terang / gelap
- Form kontak via Web3Forms (fallback ke `mailto`)

## Menjalankan

```bash
npm install
npm run dev
```

Build produksi: `npm run build`, lalu `npm run preview`.

## Struktur

- `src/components` — komponen tiap section
- `src/data/content.json` — media sosial, sertifikat, tech stack, dan proyek (tambah item di sini)
- `src/data/profile.ts` — data profil & konfigurasi
- `src/i18n` — teks terjemahan
- `src/github`, `src/theme` — context GitHub & tema
