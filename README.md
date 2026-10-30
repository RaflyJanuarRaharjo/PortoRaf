# RafPorto

React + Vite + Tailwind CSS v4 + React Router.

## Jalankan (Windows CMD)

```
npm install
npm run dev
```

Build produksi: `npm run build` (hasil di folder `dist`).

## Struktur

```
public/
  avatar.jpg              foto profil
  videos/nietzsche.mp4    video project
src/
  data/                   SEMUA KONTEN ada di sini (edit tanpa sentuh UI)
    profile.js            nama, bio, email, instagram
    achievements.js       daftar pencapaian
    experience.js         daftar pengalaman
    projects.js           daftar project (featured: true = tampil di Home)
  components/             UI yang dipakai ulang
    Layout.jsx            sidebar + konten
    Sidebar.jsx           navbar (menu aktif ▶, tombol back)
    Section.jsx           judul section
    ShowMore.jsx          tombol Show all / Show less
    ProjectCard.jsx       kartu project di Home
    ProjectMedia.jsx      video / gambar / ikon project
    SoundToggle.jsx       tombol mute
    icons.jsx             ikon SVG
  hooks/
    useSfx.jsx            efek suara hover & click (atribut data-sfx)
    useScrollSpy.js       highlight menu sesuai scroll
  pages/
    Home.jsx              halaman utama  (/)
    Projects.jsx          semua project  (/projects)
  App.jsx                 routing
  main.jsx                entry point
```

## Menambah project

Tambah object baru di `src/data/projects.js`. Simpan videonya di `public/videos/`
atau gambarnya di `public/`, lalu isi `media: { type: 'video', src: '/videos/nama.mp4' }`
atau `{ type: 'image', src: '/nama.png' }`. Halaman Projects dan navbarnya ikut otomatis.

## Deploy ke Vercel

Push ke GitHub, lalu Import di Vercel (framework: Vite). `vercel.json` sudah
mengatur supaya URL `/projects` tidak 404.
