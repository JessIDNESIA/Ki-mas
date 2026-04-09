<script>
  import { onMount, onDestroy } from "svelte";
  import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-svelte";

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
  const STEP = 10; // update frequency in ms

  function next() {
    current = (current + 1) % slides.length;
    progress = 0;
  }
  function prev() {
    current = (current - 1 + slides.length) % slides.length;
    progress = 0;
  }

  /** @param {number} i */
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
    const el = document.querySelector("#gallery-section");
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
  id="gallery-section"
  class="relative py-20 md:py-32 px-6 bg-radial-light min-h-screen flex flex-col items-center overflow-hidden"
>
  <!-- Decorative Floating Elements -->
  <div
    class="absolute top-20 left-10 w-24 h-24 bg-brand-primary/10 rounded-full blur-3xl floating-element"
  ></div>
  <div
    class="absolute top-1/2 -right-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-[80px] floating-element-delay"
  ></div>
  <div
    class="absolute bottom-20 left-1/4 w-16 h-16 bg-brand-primary/20 rounded-full blur-2xl floating-element"
  ></div>

  <!-- Header Section -->
  <div
    class="relative z-10 max-w-7xl w-full mb-16 md:mb-24"
    class:fade-in-up={visible}
  >
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div class="max-w-2xl">
        <p
          class="text-[#FFB800] font-bold tracking-[0.3em] text-[10px] uppercase mb-4"
        >
          Perjalanan Sacha Inchi
        </p>
        <h2
          class="text-4xl md:text-7xl font-extrabold text-brand-dark tracking-tight leading-[1.1] uppercase"
        >
          Dari <span class="text-[#FFB800]">Lahan</span> ke
          <span class="text-[#FFB800]">Tangan</span>
        </h2>
      </div>
      <div
        class="hidden md:block w-32 h-1.5 bg-brand-gold rounded-full mb-4"
      ></div>
    </div>
  </div>

  <!-- Editorial Gallery Layout -->
  <div
    class="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
  >
    <!-- LEFT: Image Container (Rule of Thirds 2/3) -->
    <div
      class="lg:col-span-8"
      class:fade-in-up={visible}
      style="animation-delay: 0.2s"
    >
      <div class="relative group">
        <!-- Main Image -->
        <div
          class="relative aspect-square overflow-hidden rounded-[3rem] shadow-2xl ring-1 ring-black/5 bg-slate-50 flex items-center justify-center p-8"
        >
          <!-- Background Blur Effect for aesthetics -->
          {#key current}
            <div
              class="absolute inset-0 bg-cover bg-center blur-2xl opacity-10"
              style="background-image: url({slide.image})"
            ></div>
            <img
              src={slide.image}
              alt={slide.title}
              class="relative z-10 max-w-full max-h-full object-contain img-reveal rounded-2xl"
            />
          {/key}
          <!-- Status Overlay -->
          <div class="absolute top-8 left-8 z-20">
            <span
              class="px-6 py-3 rounded-full text-[10px] font-black tracking-widest uppercase bg-brand-dark text-white shadow-xl backdrop-blur-md"
            >
              {slide.tag}
            </span>
          </div>
          <!-- Slide Navigation (Dots) -->
          <div
            class="absolute bottom-8 left-8 flex items-center gap-3 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full"
          >
            {#each slides as _, i}
              <button
                on:click={() => goTo(i)}
                class="transition-all duration-300 rounded-full"
                style="
                  width: {i === current ? '32px' : '8px'};
                  height: 8px;
                  background: {i === current
                  ? '#2E7D32'
                  : 'rgba(27, 58, 30, 0.3)'};
                "
                aria-label="Slide {i + 1}"
              ></button>
            {/each}
          </div>
        </div>
        <!-- Decorative frame element behind -->
        <div
          class="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-primary/10 rounded-[3rem] -z-10"
        ></div>
      </div>
    </div>

    <!-- RIGHT: Content Area (Rule of Thirds 1/3) -->
    <div
      class="lg:col-span-4 flex flex-col space-y-8"
      class:fade-in-up={visible}
      style="animation-delay: 0.4s"
    >
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <span class="text-brand-primary font-bold text-sm tracking-tighter"
            >{slide.tag}</span
          >
          <div class="h-[1px] flex-grow bg-slate-200"></div>
        </div>
        <h3
          class="text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight uppercase"
        >
          {@html slide.title.replace(" ", "<br/>")}
        </h3>
        <p class="text-brand-dark italic text-2xl font-medium">
          {slide.subtitle}
        </p>
      </div>
      <div class="w-16 h-1.5 bg-brand-gold rounded-full"></div>
      <p class="text-slate-600 leading-relaxed text-lg font-normal max-w-lg">
        {slide.desc}
      </p>

      <!-- Controls & Progress -->
      <div class="pt-6 space-y-10">
        <div class="flex items-center gap-6">
          <div class="flex gap-2">
            <button
              on:click={prev}
              class="w-14 h-14 rounded-full border border-slate-200 text-brand-dark hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 flex items-center justify-center group shadow-sm bg-white"
              aria-label="Previous"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              on:click={next}
              class="w-14 h-14 rounded-full border border-slate-200 text-brand-dark hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 flex items-center justify-center group shadow-sm bg-white"
              aria-label="Next"
            >
              <ArrowRight size={20} />
            </button>
          </div>
          <button
            on:click={togglePause}
            class="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white border border-slate-100 text-brand-dark text-xs font-black tracking-widest uppercase hover:bg-slate-50 transition-all shadow-sm"
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
        <div class="relative space-y-3">
          <div
            class="flex justify-between text-[10px] font-black tracking-widest text-slate-400 uppercase"
          >
            {#each slides as s, i}
              <span class:text-brand-primary={i === current}
                >{s.label.split("—")[1]?.trim() || s.label}</span
              >
            {/each}
          </div>
          <div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              class="h-full bg-brand-primary rounded-full"
              style="width: {progress}%"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom Visual Strip (Thumbnails) -->
  <div
    class="max-w-7xl w-full mt-24 md:mt-32"
    class:fade-in-up={visible}
    style="animation-delay: 0.6s"
  >
    <div class="grid grid-cols-3 gap-6 md:gap-12">
      {#each slides as s, i}
        <button
          on:click={() => goTo(i)}
          class="group cursor-pointer text-left focus:outline-none"
        >
          <div
            class="aspect-video overflow-hidden rounded-2xl mb-4 transition-all duration-500 shadow-lg {i ===
            current
              ? 'ring-4 ring-brand-primary/20'
              : ''}"
            class:grayscale={i !== current}
            class:hover:grayscale-0={i !== current}
          >
            <img
              src={s.image}
              alt={s.activeLabel}
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <p
            class="text-[9px] font-black tracking-widest uppercase"
            class:text-slate-400={i !== current}
            class:text-brand-primary={i === current}
          >
            {s.activeLabel}
          </p>
        </button>
      {/each}
    </div>
  </div>
</section>

<style>
  :global(.bg-radial-light) {
    background: radial-gradient(circle at top right, #f0fff4 0%, #ffffff 100%);
  }

  @keyframes float {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(10deg);
    }
    100% {
      transform: translateY(0px) rotate(0deg);
    }
  }

  .floating-element {
    animation: float 6s ease-in-out infinite;
  }

  .floating-element-delay {
    animation: float 8s ease-in-out infinite;
    animation-delay: 1s;
  }

  .img-reveal {
    animation: imgReveal 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  }
  @keyframes imgReveal {
    from {
      opacity: 0;
      transform: scale(1.1);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
