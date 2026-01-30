# Ki-Mas Landing Page

Landing page untuk produk Ki-Mas Sacha Inchi - camilan sehat kaya Omega 3, 6, 9.

## Teknologi

- **SvelteKit** - Framework web modern
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool yang cepat

## Instalasi

```bash
npm install
```

## Development

Jalankan server development:

```bash
npm run dev
```

Buka browser di `http://localhost:5173`

## Build

Build untuk production:

```bash
npm run build
```

Preview build production:

```bash
npm run preview
```

## Struktur Proyek

```
src/
├── lib/
│   └── components/      # Komponen Svelte
│       ├── Hero.svelte
│       ├── ProductDescription.svelte
│       ├── Benefits.svelte
│       ├── ProductShowcase.svelte
│       └── Footer.svelte
├── routes/
│   ├── +layout.svelte   # Layout utama
│   └── +page.svelte     # Halaman landing
├── app.css              # Global styles
└── app.html             # HTML template
```

## Fitur

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Animasi fade-in untuk setiap section
- ✅ Color palette hijau sesuai brand Ki-Mas
- ✅ SEO-friendly dengan meta tags
- ✅ Smooth scrolling

## Catatan

- Gambar produk dapat ditambahkan di folder `static/` dan direferensikan di komponen
- Semua konten dalam bahasa Indonesia sesuai dengan gambar promosi
