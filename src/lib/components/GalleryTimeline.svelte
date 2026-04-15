<script>
  import { onMount, onDestroy } from "svelte";
  import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-svelte";
  import { fly, fade } from "svelte/transition";

  const slides = [
    {
      image: "/images/pohon-muda.jpg",
      label: "01 — POHON Kacang Sacha Inchi",
      title: "Tanaman Merambat Muda",
      subtitle: "Plukenetia volubilis",
      desc: "Sacha Inchi tumbuh sebagai tanaman merambat yang kuat. Pada fase muda, buah berwarna hijau cerah berbentuk bintang melekat di setiap ruas batang. Tanaman ini dapat mencapai ketinggian hingga 2 meter dan mulai berbuah dalam 3–6 bulan setelah tanam.",
      tag: "01-Fase Pertumbuhan",
      color: "#2E7D32",
      activeLabel: "Tahap 01",
    },
    {
      image: "/images/buah-tua.jpg",
      label: "02 — BUAH Kacang Sacha Inchi",
      title: "Buah Yang Sudah Tua",
      subtitle: "Siap dipanen",
      desc: "Ketika buah mencapai kematangan, kulit luar mengering dan pecah membentuk mahkota bintang yang khas. Di dalamnya tersimpan biji-biji Sacha Inchi yang kaya omega-3, omega-6, dan protein tinggi siap dipanen oleh para petani.",
      tag: "02-Fase Pemanenan",
      color: "#2E7D32",
      activeLabel: "Tahap 02",
    },
    {
      image: "/images/hasil-panen.png",
      label: "03 — HASIL PANEN",
      title: "Buah Kacang Siap Diolah",
      subtitle: "Superfood dari alam",
      desc: "Hasil panen berupa biji-biji bintang Sacha Inchi yang telah kering. Biji ini mengandung hingga 27% protein, 45% lemak sehat (Omega 3, 6, 9), dan antioksidan tinggi — menjadikannya salah satu superfood yang bergizi di dunia.",
      tag: "03-Fase Pengolahan",
      color: "#2E7D32",
      activeLabel: "Tahap 03",
    },
  ];

  let current = 0;
  /** @type {ReturnType<typeof setInterval> | null} */
  let timer = null;
  let visible = false;
  let paused = false;
  const INTERVAL = 7000;

  let progress = 0;
  const STEP = 10;

  function next() {
    current = (current + 1) % slides.length;
    progress = 0;
  }
  function prev() {
    current = (current - 1 + slides.length) % slides.length;
    progress = 0;
  }

  /**
   * @param {number} i
   */
  function goTo(i) {
    current = i;
    progress = 0;
  }

  function startTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      if (!paused) {
        progress += (STEP / INTERVAL) * 100;
        if (progress >= 100) {
          next();
        }
      }
    }, STEP);
  }

  function togglePause() {
    paused = !paused;
  }

  onMount(() => {
    startTimer();
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) visible = true;
        }),
      { threshold: 0.1 },
    );
    const el = document.querySelector("#dari-lahan-ke-tangan");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  });

  onDestroy(() => {
    if (timer) clearInterval(timer);
    timer = null;
  });

  $: slide = slides[current];
</script>

<section
	id="dari-lahan-ke-tangan"
	class="section-standard relative bg-saccha-surface-container-low overflow-hidden"
>
  {#if visible}
    <div in:fly={{ y: 30, duration: 1000 }}>
      <!-- Section Header -->
      <div class="section-header-spacing text-center">
        <span class="section-eyebrow">The Journey</span>
        <h2 class="section-title">
          Dari Lahan <span class="text-saccha-gold">Ke Tangan</span>
        </h2>
        <div class="w-32 h-1.5 bg-saccha-primary/10 mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- Editorial Gallery Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        <!-- LEFT: Image Container (6/12) -->
        <div class="lg:col-span-6">
          <div class="relative group h-full">
            <div class="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white bg-white {current === 0 ? 'h-full min-h-[320px]' : 'aspect-video'}">
              {#key current}
                <img
                  src={slide.image}
                  alt={slide.title}
                  class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  in:fade={{ duration: 800 }}
                />
              {/key}
              
              <div class="absolute top-6 left-6 z-20">
                <span class="px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase bg-saccha-primary text-white shadow-xl">
                  {slide.tag}
                </span>
              </div>

              <!-- Dot Nav -->
              <div class="absolute bottom-6 left-6 flex items-center gap-2.5 z-20 bg-black/20 backdrop-blur-md p-2.5 rounded-full border border-white/20">
                {#each slides as _, i}
                  <button
                    on:click={() => goTo(i)}
                    class="transition-all duration-300 rounded-full"
                    style="
                      width: {i === current ? '32px' : '8px'};
                      height: 8px;
                      background: {i === current ? '#FDE047' : 'rgba(255, 255, 255, 0.4)'};
                    "
                    aria-label="Slide {i + 1}"
                  ></button>
                {/each}
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT: Content Area (6/12) -->
        <div class="lg:col-span-6 flex flex-col gap-6 p-5 md:p-8 rounded-[2.5rem] bg-white border border-saccha-primary/5 shadow-sm">
          <div class="space-y-3">
            <div class="flex items-center gap-4">
              <span class="text-saccha-primary font-black text-[10px] tracking-[0.3em] uppercase">{slide.tag}</span>
              <div class="h-px flex-grow bg-saccha-primary/10"></div>
            </div>
            <h3 class="text-3xl md:text-5xl font-headline font-black text-saccha-primary leading-tight tracking-tighter uppercase">
              {slide.title}
            </h3>
            <p class="text-saccha-gold italic text-xl font-medium tracking-tight">
              {slide.subtitle}
            </p>
          </div>

          <p class="text-saccha-on-surface-variant leading-relaxed text-sm md:text-base font-medium">
            {slide.desc}
          </p>

          <!-- Controls & Progress -->
          <div class="pt-4 space-y-8">
            <div class="flex items-center gap-4">
              <div class="flex gap-2">
                <button
                  on:click={prev}
                  class="w-12 h-12 rounded-full border border-saccha-primary/10 text-saccha-primary hover:bg-saccha-primary hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm active:scale-95"
                  aria-label="Previous"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  on:click={next}
                  class="w-12 h-12 rounded-full border border-saccha-primary/10 text-saccha-primary hover:bg-saccha-primary hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm active:scale-95"
                  aria-label="Next"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
                <button
                  on:click={togglePause}
                  class="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-saccha-surface-container border border-saccha-primary/10 text-saccha-primary text-[10px] font-black tracking-widest uppercase hover:bg-white transition-all active:scale-95 shadow-sm"
                >
                  {#if paused}
                    <Play size={18} class="fill-current" />
                    <span>Mulai</span>
                  {:else}
                    <Pause size={18} class="fill-current" />
                    <span>Jeda</span>
                  {/if}
                </button>
            </div>

            <!-- Progress Timeline -->
            <div class="space-y-2.5">
              <div class="flex justify-between text-[9px] font-black tracking-widest text-saccha-primary/30 uppercase">
                {#each slides as s, i}
                  <span class:text-saccha-primary={i === current}>
                    {s.label.split("—")[1]?.trim() || s.label}
                  </span>
                {/each}
              </div>
              <div class="w-full h-1.5 bg-saccha-surface-container rounded-full overflow-hidden">
                <div
                  class="h-full bg-saccha-primary rounded-full"
                  style="width: {progress}%"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Thumbnails Strip -->
      <div class="grid grid-cols-3 gap-4 md:gap-8 mt-12">
        {#each slides as s, i}
          <button
            on:click={() => goTo(i)}
            class="group text-left"
          >
            <div
              class="aspect-video overflow-hidden rounded-[1.5rem] mb-3 transition-all duration-500 shadow-md {i === current ? 'ring-4 ring-saccha-gold' : 'ring-1 ring-saccha-primary/5 grayscale opacity-50'}"
            >
              <img
                src={s.image}
                alt={s.activeLabel}
                class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <p class="text-[9px] font-black tracking-widest uppercase {i === current ? 'text-saccha-primary' : 'text-saccha-primary/40'}">
              {s.activeLabel}
            </p>
          </button>
        {/each}
      </div>
    </div>
  {/if}
</section>

<style>
  :global(.font-headline) { font-family: 'Epilogue', sans-serif; }
</style>
