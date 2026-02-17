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

  function goTo(i) {
    current = i;
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    if (!paused) startTimer();
  }

  function startTimer() {
    timer = setInterval(() => {
      current = (current + 1) % slides.length;
    }, INTERVAL);
  }

  function togglePause() {
    paused = !paused;
    if (paused) clearInterval(timer);
    else startTimer();
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
  class="relative py-16 md:py-24 px-4 overflow-hidden"
  style="background: linear-gradient(to bottom, #14b8a6, #16a34a, #14b8a6);"
>
  <!-- Decorative blobs -->
  <div class="absolute inset-0 pointer-events-none opacity-10">
    <div class="absolute top-10 left-1/4 w-80 h-80 bg-yellow-300 rounded-full blur-3xl"></div>
    <div class="absolute bottom-10 right-10 w-64 h-64 bg-green-300 rounded-full blur-3xl"></div>
  </div>

  <!-- Section title -->
  <div class="relative z-10 text-center mb-12">
    <p class="text-yellow-300 font-semibold tracking-widest text-sm uppercase mb-2">Perjalanan Sacha Inchi</p>
    <h2 class="text-4xl sm:text-5xl font-black text-white drop-shadow-lg">
      Dari <span class="text-yellow-200">Lahan</span> ke <span class="text-yellow-200">Tangan</span>
    </h2>
    <div class="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mt-4"></div>
  </div>

  <!-- Main gallery card -->
  <div class="relative z-10 max-w-6xl mx-auto" class:fade-in={visible}>
    <div class="bg-teal-700/60 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden shadow-2xl">

      <!-- Main content row -->
      <div class="flex flex-col md:flex-row" style="min-height: 420px;">

        <!-- LEFT: Image area ~60% -->
        <div class="relative md:w-[60%] flex-shrink-0 bg-teal-900/40" style="min-height: 320px;">

          <!-- Badge -->
          <div class="absolute top-4 left-4 z-20">
            <span
              class="px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-teal-900 shadow-md"
              style="background-color: {slide.color}"
            >
              {slide.tag}
            </span>
          </div>

          {#key current}
            {#if slide.portrait}
              <!-- Portrait: contain + blurred background fill for side gaps -->
              <div class="absolute inset-0 flex items-center justify-center img-reveal overflow-hidden">
                <!-- Blurred duplicate as bg -->
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
                <!-- Subtle dark vignette over blur -->
                <div class="absolute inset-0 bg-teal-900/20"></div>
                <!-- Portrait image itself -->
                <img
                  src={slide.image}
                  alt={slide.title}
                  class="relative z-10 max-h-full w-auto object-contain drop-shadow-2xl"
                  style="max-height: 420px; max-width: 100%;"
                />
              </div>
            {:else}
              <!-- Landscape: standard cover -->
              <img
                src={slide.image}
                alt={slide.title}
                class="absolute inset-0 w-full h-full object-cover img-reveal"
                style="object-position: center center;"
              />
            {/if}
          {/key}

          <!-- Right-edge fade to blend with description panel -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-teal-800/40 pointer-events-none z-10"></div>

          <!-- Dot indicators -->
          <div class="absolute bottom-4 left-4 flex gap-2 z-20">
            {#each slides as _, i}
              <button
                on:click={() => goTo(i)}
                class="transition-all duration-300 rounded-full border-2 border-white/60 focus:outline-none"
                style="
                  width: {i === current ? '28px' : '10px'};
                  height: 10px;
                  background: {i === current ? slide.color : 'rgba(255,255,255,0.35)'};
                "
                aria-label="Slide {i + 1}"
              ></button>
            {/each}
          </div>
        </div>

        <!-- RIGHT: Description ~40% -->
        <div class="md:w-[40%] flex flex-col justify-between p-6 sm:p-8 md:p-10">
          <div>
            <p class="text-xs tracking-[0.2em] uppercase font-semibold mb-3" style="color: {slide.color}">
              {slide.label}
            </p>
            <h3 class="text-2xl sm:text-3xl font-black text-white leading-tight mb-1">
              {slide.title}
            </h3>
            <p class="text-white/50 italic text-sm mb-5">{slide.subtitle}</p>
            <div class="w-12 h-1 rounded-full mb-5" style="background-color: {slide.color}"></div>
            <p class="text-white/80 leading-relaxed text-sm sm:text-base">{slide.desc}</p>
          </div>

          <!-- Nav controls -->
          <div class="mt-8">
            <div class="flex items-center gap-3 mb-4">
              <!-- Prev -->
              <button
                on:click={() => { prev(); resetTimer(); }}
                class="w-10 h-10 rounded-full border-2 border-white/30 text-white text-xl hover:border-yellow-300 hover:text-yellow-300 transition-all duration-200 flex items-center justify-center"
                aria-label="Previous"
              >‹</button>
              <!-- Next -->
              <button
                on:click={() => { next(); resetTimer(); }}
                class="w-10 h-10 rounded-full border-2 border-white/30 text-white text-xl hover:border-yellow-300 hover:text-yellow-300 transition-all duration-200 flex items-center justify-center"
                aria-label="Next"
              >›</button>

              <!-- Auto toggle pill -->
              <button
                on:click={togglePause}
                class="ml-auto flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border-2 transition-all duration-200 focus:outline-none"
                style="
                  border-color: {paused ? 'rgba(255,255,255,0.25)' : slide.color + 'cc'};
                  color:        {paused ? 'rgba(255,255,255,0.45)' : slide.color};
                  background:   {paused ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.18)'};
                "
                aria-label="{paused ? 'Mulai' : 'Jeda'} slideshow"
              >
                {#if paused}
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor">
                    <polygon points="2,1 11,6 2,11"/>
                  </svg>
                  Mulai
                {:else}
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor">
                    <rect x="1" y="1" width="4" height="10" rx="1"/>
                    <rect x="7" y="1" width="4" height="10" rx="1"/>
                  </svg>
                  Jeda
                {/if}
              </button>
            </div>

            <!-- Progress bar -->
            <div class="w-full h-1 bg-white/20 rounded-full overflow-hidden">
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

      <!-- Bottom: thumbnail strip -->
      <div class="flex border-t border-white/20 overflow-hidden bg-teal-600/30">
        {#each slides as s, i}
          <button
            on:click={() => goTo(i)}
            class="flex-1 relative overflow-hidden transition-all duration-300 group focus:outline-none"
            style="height: 72px;"
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
            <span class="absolute bottom-1.5 left-2 text-[10px] text-white font-bold tracking-wider uppercase drop-shadow">
              {s.label.split('—')[1]?.trim()}
            </span>
          </button>
        {/each}
      </div>

    </div>
  </div>
</section>

<style>
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