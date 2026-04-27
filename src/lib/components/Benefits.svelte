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
  import { fly, fade } from "svelte/transition";

  let visible = false;

  const WHATSAPP_NUMBER = "6283846435699";

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
  class="section-standard relative bg-white overflow-hidden"
>
  {#if visible}
    <div in:fly={{ y: 30, duration: 1000 }}>
      <!-- Section Header -->
      <div class="section-header-spacing">
        <span class="section-eyebrow">Pure Vitality</span>
        <h2 class="section-title">
          Manfaat Produk <span class="text-saccha-gold">Ki-Mas</span>
        </h2>
        <p class="text-saccha-on-surface-variant text-lg font-medium leading-relaxed max-w-2xl mt-4">
          Temukan kekuatan transformatif dari kacang Sacha Inchi, diproses secara teliti untuk menjaga senyawa bioaktif alami demi kesejahteraan holistik Anda.
        </p>
      </div>

      <!-- RIGHT: Bento Grid (2/3 Width) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {#each benefits as benefit, i}
          <div
            class="glass-card p-5 md:p-6 rounded-[2rem] border border-saccha-primary/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group flex flex-col items-start gap-4"
          >
            <div
              class="w-12 h-12 rounded-2xl bg-saccha-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
            >
              <svelte:component
                this={benefit.icon}
                class="text-saccha-primary"
                size={20}
              />
            </div>
            <div class="space-y-3">
              <h3
                class="font-headline font-black text-lg text-saccha-primary uppercase tracking-tight"
              >
                {benefit.title}
              </h3>
              <p class="text-saccha-on-surface-variant text-sm leading-relaxed font-medium">
                {benefit.desc}
              </p>
            </div>
          </div>
        {/each}
      </div>

      <!-- Aesthetic Call to Action -->
      <div
        class="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-saccha-primary text-white overflow-hidden relative group"
      >
        <div
          class="absolute top-0 right-0 w-80 h-80 bg-white/10 organic-blob -mr-20 -mt-20 blur-2xl group-hover:scale-110 transition-transform duration-700"
        ></div>
        
        <div
          class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div class="max-w-2xl space-y-4">
            <h2
              class="text-3xl md:text-5xl font-headline font-black uppercase leading-none tracking-tighter"
            >
              Siap untuk merasakan <br /> vitalitas nyata?
            </h2>
            <p class="text-white/80 text-lg font-medium">
              Bergabunglah dengan pelanggan yang telah mengintegrasikan Ki-Mas Sacha Inchi ke dalam ritual kesehatan harian mereka.
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 px-10 py-5 bg-white text-saccha-primary font-headline font-black rounded-full hover:bg-saccha-gold hover:text-white transition-all duration-300 shadow-2xl active:scale-95 whitespace-nowrap"
          >
            BELI SEKARANG
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  {/if}
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
