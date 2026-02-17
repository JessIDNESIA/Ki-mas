<script>
  import { onMount, onDestroy } from 'svelte';

  const slides = [
    {
      image: '/images/pohon-muda.jpg',
      label: '01 — POHON Kacang Sacha Inchi',
      title: 'Tanaman Merambat Muda',
      subtitle: 'Plukenetia volubilis',
      desc: 'Sacha Inchi tumbuh sebagai tanaman merambat yang kuat. Pada fase muda, buah berwarna hijau cerah berbentuk bintang melekat di setiap ruas batang. Tanaman ini dapat mencapai ketinggian hingga 2 meter dan mulai berbuah dalam 3–6 bulan setelah tanam.',
      tag: 'Fase Pertumbuhan',
      color: '#4ade80',
      portrait: true,
    },
    {
      image: '/images/buah-tua.jpg',
      label: '02 — BUAH Kacang Sacha Inchi',
      title: 'Buah Yang Sudah Tua',
      subtitle: 'Siap dipanen',
      desc: 'Ketika buah mencapai kematangan, kulit luar mengering dan pecah membentuk mahkota bintang yang khas. Di dalamnya tersimpan biji-biji Sacha Inchi yang kaya omega-3, omega-6, dan protein tinggi siap dipanen oleh para petani.',
      tag: 'Fase Pematangan',
      color: '#fb923c',
      portrait: false,
    },
    {
      image: '/images/hasil-panen.png',
      label: '03 — HASIL PANEN',
      title: 'Buah Kacang Siap Diolah',
      subtitle: 'Superfood dari alam',
      desc: 'Hasil panen berupa biji-biji bintang Sacha Inchi yang telah kering. Biji ini mengandung hingga 27% protein, 45% lemak sehat (Omega 3, 6, 9), dan antioksidan tinggi — menjadikannya salah satu superfood yang bergizi di dunia.',
      tag: 'Hasil Panen',
      color: '#facc15',
      portrait: false,
    },
  ];

  let current = 0;
  let timer;
  let visible = false;
  let paused = false;
  const INTERVAL = 7000;

  function next() { current = (current + 1) % slides.length; }
  function prev() { current = (current - 1 + slides.length) % slides.length; }

  function goTo(i) { current = i; resetTimer(); }

  function resetTimer() {
    clearInterval(timer);
    if (!paused) startTimer();
  }

  function startTimer() {
    timer = setInterval(() => { current = (current + 1) % slides.length; }, INTERVAL);
  }

  function togglePause() {
    paused = !paused;
    paused ? clearInterval(timer) : startTimer();
  }

  onMount(() => {
    startTimer();
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) visible = true; }),
      { threshold: 0.1 }
    );
    const el = document.querySelector('#gallery-section');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  });

  onDestroy(() => clearInterval(timer));

  $: slide = slides[current];
</script>

<section
  id="gallery-section"
  class="relative py-10 sm:py-16 md:py-24 px-3 sm:px-4 overflow-hidden"
  style="background: linear-gradient(to bottom, #14b8a6, #16a34a, #14b8a6);"
>
  <!-- Decorative blobs -->
  <div class="absolute inset-0 pointer-events-none opacity-10">
    <div class="absolute top-10 left-1/4 w-80 h-80 bg-yellow-300 rounded-full blur-3xl"></div>
    <div class="absolute bottom-10 right-10 w-64 h-64 bg-green-300 rounded-full blur-3xl"></div>
  </div>

  <!-- Section title -->
  <div class="relative z-10 text-center mb-7 sm:mb-12">
    <p class="text-yellow-300 font-semibold tracking-widest text-xs sm:text-sm uppercase mb-1.5 sm:mb-2">
      Perjalanan Sacha Inchi
    </p>
    <h2 class="text-2xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-lg">
      Dari <span class="text-yellow-200">Lahan</span> ke <span class="text-yellow-200">Tangan</span>
    </h2>
    <div class="w-16 sm:w-24 h-1 sm:h-1.5 bg-yellow-400 mx-auto rounded-full mt-3 sm:mt-4"></div>
  </div>

  <!-- Main gallery card -->
  <div class="relative z-10 max-w-6xl mx-auto" class:fade-in={visible}>
    <div class="bg-teal-700/60 backdrop-blur-md border border-white/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">

      <!-- Main content row:
           < md  → stacked (col)
           ≥ md  → side by side (row)
      -->
      <div class="flex flex-col md:flex-row">

        <!-- ══ LEFT: Image ══ -->
        <div
          class="relative w-full md:w-[60%] flex-shrink-0 bg-teal-900/40 img-panel"
        >
          <!-- Tag badge -->
          <div class="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
            <span
              class="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase text-teal-900 shadow-md"
              style="background-color: {slide.color}"
            >
              {slide.tag}
            </span>
          </div>

          {#key current}
            {#if slide.portrait}
              <!-- Portrait: contain + blurred bg fill -->
              <div class="absolute inset-0 flex items-center justify-center img-reveal overflow-hidden">
                <div
                  class="absolute inset-0 scale-110"
                  style="
                    background-image: url('{slide.image}');
                    background-size: cover;
                    background-position: center;
                    filter: blur(18px);
                    opacity: 0.35;
                  "
                ></div>
                <div class="absolute inset-0 bg-teal-900/20"></div>
                <img
                  src={slide.image}
                  alt={slide.title}
                  class="relative z-10 max-h-full w-auto object-contain drop-shadow-2xl"
                  style="max-width: 100%;"
                />
              </div>
            {:else}
              <!-- Landscape: cover -->
              <img
                src={slide.image}
                alt={slide.title}
                class="absolute inset-0 w-full h-full object-cover img-reveal"
                style="object-position: center center;"
              />
            {/if}
          {/key}

          <!-- Edge blend -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-teal-800/40 pointer-events-none z-10 hidden md:block"></div>
          <!-- Bottom fade on mobile stack -->
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-teal-800/40 pointer-events-none z-10 md:hidden"></div>

          <!-- Dot indicators -->
          <div class="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex gap-1.5 sm:gap-2 z-20">
            {#each slides as _, i}
              <button
                on:click={() => goTo(i)}
                class="transition-all duration-300 rounded-full border-2 border-white/60 focus:outline-none"
                style="
                  width: {i === current ? '22px' : '8px'};
                  height: 8px;
                  background: {i === current ? slide.color : 'rgba(255,255,255,0.35)'};
                "
                aria-label="Slide {i + 1}"
              ></button>
            {/each}
          </div>
        </div>

        <!-- ══ RIGHT: Description ══ -->
        <div class="md:w-[40%] flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10">
          <div>
            <!-- Label — truncate on tiny screens -->
            <p
              class="text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-semibold mb-2 sm:mb-3 truncate"
              style="color: {slide.color}"
            >
              {slide.label}
            </p>

            <h3 class="text-lg sm:text-2xl md:text-3xl font-black text-white leading-tight mb-1">
              {slide.title}
            </h3>
            <p class="text-white/50 italic text-xs sm:text-sm mb-3 sm:mb-5">{slide.subtitle}</p>

            <div class="w-10 sm:w-12 h-0.5 sm:h-1 rounded-full mb-3 sm:mb-5" style="background-color: {slide.color}"></div>

            <p class="text-white/80 leading-relaxed text-xs sm:text-sm md:text-base">
              {slide.desc}
            </p>
          </div>

          <!-- Nav controls -->
          <div class="mt-5 sm:mt-8">
            <!-- Row: prev · next · pause pill -->
            <div class="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <button
                on:click={() => { prev(); resetTimer(); }}
                class="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/30 text-white hover:border-yellow-300 hover:text-yellow-300 transition-all duration-200 flex items-center justify-center text-base sm:text-xl flex-shrink-0"
                aria-label="Previous"
              >‹</button>

              <button
                on:click={() => { next(); resetTimer(); }}
                class="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/30 text-white hover:border-yellow-300 hover:text-yellow-300 transition-all duration-200 flex items-center justify-center text-base sm:text-xl flex-shrink-0"
                aria-label="Next"
              >›</button>

              <!-- Auto toggle — compact on fold -->
              <button
                on:click={togglePause}
                class="ml-auto flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold border-2 transition-all duration-200 focus:outline-none flex-shrink-0"
                style="
                  border-color: {paused ? 'rgba(255,255,255,0.25)' : slide.color + 'cc'};
                  color:        {paused ? 'rgba(255,255,255,0.45)' : slide.color};
                  background:   {paused ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.18)'};
                "
                aria-label="{paused ? 'Mulai' : 'Jeda'} slideshow"
              >
                {#if paused}
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="currentColor">
                    <polygon points="2,1 11,6 2,11"/>
                  </svg>
                  <span>Mulai</span>
                {:else}
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="currentColor">
                    <rect x="1" y="1" width="4" height="10" rx="1"/>
                    <rect x="7" y="1" width="4" height="10" rx="1"/>
                  </svg>
                  <span>Jeda</span>
                {/if}
              </button>
            </div>

            <!-- Progress bar -->
            <div class="w-full h-0.5 sm:h-1 bg-white/20 rounded-full overflow-hidden">
              {#if !paused}
                {#key current}
                  <div
                    class="h-full rounded-full progress-bar"
                    style="background-color: {slide.color}; animation-duration: {INTERVAL}ms;"
                  ></div>
                {/key}
              {/if}
            </div>
          </div>
        </div>
      </div>

      <!-- ══ Thumbnail strip ══ -->
      <div class="flex border-t border-white/20 overflow-hidden bg-teal-600/30">
        {#each slides as s, i}
          <button
            on:click={() => goTo(i)}
            class="flex-1 relative overflow-hidden transition-all duration-300 group focus:outline-none"
            style="height: 52px; /* smaller on mobile */"
          >
            <img
              src={s.image}
              alt={s.title}
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 transition-all duration-300"
              style="background: {i === current ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0.5)'};"
            ></div>
            {#if i === current}
              <div class="absolute bottom-0 left-0 right-0 h-[3px]" style="background-color: {s.color}"></div>
            {/if}
            <!-- Label hidden on tiniest screens, shown sm+ -->
            <span class="hidden min-[400px]:block absolute bottom-1 left-1.5 sm:left-2 text-[9px] sm:text-[10px] text-white font-bold tracking-wider uppercase drop-shadow leading-none">
              {s.label.split('—')[1]?.trim()}
            </span>
          </button>
        {/each}
      </div>

    </div>
  </div>
</section>

<style>
  /* ── Image panel height per breakpoint ──
     Z Fold folded (344px): 240px  — enough to see the image
     sm (640px):            300px
     md (768px):            420px  — side-by-side full height
  */
  .img-panel {
    min-height: 240px;
  }
  @media (min-width: 475px) {
    .img-panel { min-height: 280px; }
  }
  @media (min-width: 640px) {
    .img-panel { min-height: 320px; }
  }
  @media (min-width: 768px) {
    /* side-by-side — stretch to fill the row naturally */
    .img-panel { min-height: 420px; }
  }

  /* Thumbnail strip taller on larger screens */
  @media (min-width: 640px) {
    .flex button[style*="height: 52px"] {
      /* Can't easily override inline style from Svelte, so we use the class below */
    }
  }

  /* ── Animations ── */
  .fade-in {
    animation: fadeIn 0.9s ease-out both;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .img-reveal {
    animation: imgReveal 0.65s ease-out both;
  }
  @keyframes imgReveal {
    from { opacity: 0; transform: scale(1.04); }
    to   { opacity: 1; transform: scale(1); }
  }

  .progress-bar {
    width: 0%;
    animation: fillBar linear forwards;
  }
  @keyframes fillBar {
    from { width: 0%; }
    to   { width: 100%; }
  }
</style>