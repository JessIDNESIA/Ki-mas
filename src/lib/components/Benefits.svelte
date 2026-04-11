<script>
  import { onMount } from "svelte";
  import {
    Heart,
    Stethoscope,
    Leaf,
    Activity,
    Scale,
    Brain,
    Sprout,
    Bone,
    ShoppingBag,
    ArrowRight,
  } from "lucide-svelte";

  let visible = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible = true;
          }
        });
      },
      { threshold: 0.1 },
    );

    const element = document.querySelector("#benefits");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  });

  const benefits = [
    {
      icon: Heart,
      title: "Menurunkan Kolesterol",
      desc: "Kandungan Omega-3 yang tinggi secara efektif membantu menurunkan kadar LDL dan meningkatkan sirkulasi darah yang sehat.",
      color: "saccha-primary",
    },
    {
      icon: Stethoscope,
      title: "Mencegah Diabetes",
      desc: "Membantu mengatur kadar glukosa darah dan meningkatkan sensitivitas insulin melalui nutrisi alami berbasis tanaman.",
      color: "saccha-secondary",
    },
    {
      icon: Leaf,
      title: "Kesehatan Jantung",
      desc: "Mendukung ritme kardiovaskular dan memperkuat otot jantung dengan asam lemak esensial dan antioksidan.",
      color: "saccha-tertiary",
    },
    {
      icon: Activity,
      title: "Kesehatan Sendi",
      desc: "Sifat anti-inflamasi alami membantu mengurangi nyeri sendi dan meningkatkan mobilitas untuk gaya hidup aktif.",
      color: "saccha-primary",
    },
    {
      icon: Scale,
      title: "Program Diet Sehat",
      desc: "Kaya akan serat dan protein untuk memberi rasa kenyang lebih lama, mendukung tujuan manajemen berat badan yang berkelanjutan.",
      color: "saccha-secondary",
    },
    {
      icon: Brain,
      title: "Perkembangan Otak",
      desc: "Meningkatkan fungsi kognitif, daya ingat, dan kejernihan mental melalui konsentrasi tinggi prekursor DHA.",
      color: "saccha-tertiary",
    },
    {
      icon: Sprout,
      title: "Melancarkan Pencernaan",
      desc: "Mengoptimalkan kesehatan usus dan penyerapan nutrisi, memastikan sistem pencernaan Anda berjalan lancar setiap hari.",
      color: "saccha-primary",
    },
    {
      icon: Bone,
      title: "Kesehatan Tulang",
      desc: "Mendorong penyerapan kalsium dan kepadatan tulang, melindungi struktur kerangka Anda seiring bertambahnya usia.",
      color: "saccha-secondary",
    },
  ];
</script>

<section
  id="benefits"
  class="relative min-h-screen py-24 px-6 md:px-12 bg-saccha-background overflow-hidden font-sans text-saccha-on-surface"
>
  <!-- Floating Organic Background Shapes -->
  <div
    class="absolute top-40 -left-20 w-96 h-96 bg-saccha-primary-container/30 organic-blob blur-3xl -z-10 animate-float"
  ></div>
  <div
    class="absolute bottom-20 -right-20 w-[30rem] h-[30rem] bg-saccha-tertiary-container/30 organic-blob blur-3xl -z-10 animate-float-delayed"
  ></div>

  <div class="max-w-7xl mx-auto">
    <!-- Rule of Thirds Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
      <!-- LEFT: Title & Intro (1/3 Width) -->
      <div
        class="lg:col-span-4 lg:sticky lg:top-32 space-y-8"
        class:opacity-0={!visible}
        class:animate-slide-up={visible}
      >
        <div class="space-y-4">
          <span
            class="inline-block px-4 py-1 rounded-full bg-saccha-secondary-container text-saccha-on-secondary-container text-xs font-bold tracking-widest uppercase"
          >
            Pure Vitality
          </span>
          <h2
            class="text-5xl md:text-6xl font-headline font-black text-saccha-primary leading-[1.1] tracking-tighter uppercase"
          >
            Manfaat Produk <br />
            <span class="text-saccha-secondary">Ki-Mas ?</span>
          </h2>
        </div>

        <p
          class="text-saccha-on-surface-variant text-lg font-medium leading-relaxed"
        >
          Temukan kekuatan transformatif dari kacang Sacha Inchi, diproses
          secara teliti untuk menjaga senyawa bioaktif alami demi kesejahteraan
          holistik Anda.
        </p>

        <div class="pt-4">
          <div class="w-24 h-1.5 bg-saccha-primary rounded-full"></div>
        </div>
      </div>

      <!-- RIGHT: Bento Grid (2/3 Width) -->
      <div class="lg:col-span-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          {#each benefits as benefit, i}
            <div
              class="glass-card p-8 rounded-2xl border border-white/40 shadow-sm hover:shadow-xl hover:border-saccha-primary/30 transition-all duration-500 group"
              class:opacity-0={!visible}
              class:animate-slide-up={visible}
              style="animation-delay: {i * 0.1}s"
            >
              <div
                class="w-14 h-14 rounded-full bg-saccha-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
              >
                <svelte:component
                  this={benefit.icon}
                  class="text-saccha-primary"
                  size={28}
                />
              </div>
              <h3
                class="font-headline font-extrabold text-xl text-saccha-on-surface mb-3 uppercase tracking-tight"
              >
                {benefit.title}
              </h3>
              <p class="text-saccha-on-surface-variant text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- Aesthetic Call to Action -->
    <div
      class="mt-32 p-8 md:p-16 rounded-[2.5rem] bg-saccha-primary text-white overflow-hidden relative group"
      class:opacity-0={!visible}
      class:animate-slide-up={visible}
      style="animation-delay: 0.8s"
    >
      <div
        class="absolute top-0 right-0 w-80 h-80 bg-white/10 organic-blob -mr-20 -mt-20 blur-2xl group-hover:scale-110 transition-transform duration-700"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-saccha-secondary/20 organic-blob -ml-20 -mb-20 blur-xl"
      ></div>

      <div
        class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12"
      >
        <div class="max-w-2xl space-y-6">
          <h2
            class="text-4xl md:text-5xl font-headline font-black uppercase leading-none tracking-tighter"
          >
            Siap untuk merasakan <br /> vitalitas nyata?
          </h2>
          <p class="text-white/80 text-lg font-medium">
            Bergabunglah dengan pelanggan yang telah mengintegrasikan Ki-Mas
            Sacha Inchi ke dalam ritual kesehatan harian mereka.
          </p>
        </div>
        <button
          class="flex items-center gap-3 px-10 py-5 bg-white text-saccha-primary font-headline font-black rounded-full hover:bg-saccha-secondary-container hover:scale-105 transition-all duration-300 shadow-2xl active:scale-95 whitespace-nowrap"
        >
          BELI SEKARANG
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  </div>
</section>

<style>
  .glass-card {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  .organic-blob {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }

  :global(.animate-float) {
    animation: float 8s ease-in-out infinite;
  }

  :global(.animate-float-delayed) {
    animation: float 10s ease-in-out 2s infinite;
  }

  :global(.animate-slide-up) {
    animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }

  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
