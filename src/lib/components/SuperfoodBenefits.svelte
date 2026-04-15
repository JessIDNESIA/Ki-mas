<script lang="ts">
  import { onMount } from "svelte";
  import { Plus, Heart, Zap, ShieldCheck, Clock, Sprout } from "lucide-svelte";
  import { fly, fade } from "svelte/transition";

  let visible = false;
  let sectionRef: HTMLElement;

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

    if (sectionRef) observer.observe(sectionRef);
    return () => observer.disconnect();
  });

  const omegaData = [
    {
      title: "Omega 3",
      subtitle: "(Asam Linolenat)",
      desc: "Sangat penting untuk menjaga kesehatan jantung dan mengoptimalkan fungsi otak secara berkelanjutan.",
      label: "Ω3",
    },
    {
      title: "Omega 6",
      subtitle: "(Asam Linoleat)",
      desc: "Membantu menjaga kesehatan kulit tetap lembap dan memperkuat sistem kekebalan tubuh dari dalam.",
      label: "Ω6",
    },
    {
      title: "Omega 9",
      subtitle: "(Asam Oleat)",
      desc: "Mendukung kesehatan kardiovaskular secara menyeluruh dan menjaga tingkat energi tubuh agar tetap prima.",
      label: "Ω9",
    },
  ];

  const benefits = [
    {
      icon: Sprout,
      label: "Kaya Protein",
      sub: "Sumber protein nabati lengkap untuk regenerasi sel tubuh yang maksimal.",
      color: "text-sacha-green",
      bgColor: "bg-sacha-green/20",
    },
    {
      icon: ShieldCheck,
      label: "Fungsi Kognitif",
      sub: "Meningkatkan fokus, memori, dan kejernihan berpikir di tengah aktivitas padat.",
      color: "text-sacha-teal",
      bgColor: "bg-sacha-teal/20",
    },
    {
      icon: Clock,
      label: "Antioksidan Alami",
      sub: "Tinggi Vitamin E murni untuk melawan radikal bebas dan memperlambat penuaan.",
      color: "text-sacha-yellow",
      bgColor: "bg-sacha-yellow/20",
    },
  ];
</script>

<section
  id="superfood-benefits"
  bind:this={sectionRef}
  class="section-standard bg-saccha-surface-container-lowest relative overflow-hidden"
>
  {#if visible}
    <div class="relative z-10" in:fly={{ y: 30, duration: 1000 }}>
      <!-- Section Header -->
      <div class="text-center section-header-spacing">
        <span class="section-eyebrow">Nutritional Excellence</span>
        <h2 class="section-title">
          Superfood <span class="text-saccha-gold">&</span> Benefits
        </h2>
        <div
          class="w-32 h-1.5 bg-saccha-yellow/30 mx-auto mt-4 rounded-full"
        ></div>
      </div>

      <!-- HEALTH BENEFITS GRID -->
      <div class="space-y-12">
        <div class="flex items-center gap-6">
          <div
            class="h-px flex-grow bg-gradient-to-r from-transparent via-saccha-primary/10 to-transparent"
          ></div>
          <h4
            class="text-[10px] font-black tracking-[0.6em] text-saccha-primary/40 uppercase"
          >
            Health Benefits
          </h4>
          <div
            class="h-px flex-grow bg-gradient-to-l from-transparent via-saccha-primary/10 to-transparent"
          ></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {#each benefits as benefit}
            <div
              class="glass-card rounded-[2.5rem] p-5 md:p-8 flex flex-col items-center text-center group hover:bg-white transition-all duration-700 border border-saccha-primary/5 shadow-sm hover:shadow-xl relative overflow-hidden"
            >
              <div
                class="w-20 h-20 {benefit.bgColor} rounded-[1.5rem] flex items-center justify-center mb-6 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12"
              >
                <svelte:component
                  this={benefit.icon}
                  size={32}
                  class={benefit.color}
                />
              </div>
              <h5
                class="text-2xl font-bold text-saccha-on-surface mb-3 tracking-tight"
              >
                {benefit.label}
              </h5>
              <p
                class="text-saccha-on-surface-variant text-sm leading-relaxed font-medium"
              >
                {benefit.sub}
              </p>
            </div>
          {/each}
        </div>
      </div>

      <!-- OMEGA DNA GRID -->
      <div class="mt-20 space-y-12">
        <div class="flex items-center gap-6">
          <div
            class="h-px flex-grow bg-gradient-to-r from-transparent via-saccha-secondary/10 to-transparent"
          ></div>
          <h4
            class="text-[10px] font-black tracking-[0.6em] text-saccha-secondary/40 uppercase"
          >
            Nutritional DNA
          </h4>
          <div
            class="h-px flex-grow bg-gradient-to-l from-transparent via-saccha-secondary/10 to-transparent"
          ></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {#each omegaData as item}
            <div
              class="glass-card rounded-[2.5rem] p-5 md:p-8 flex flex-col items-center text-center group hover:bg-white transition-all duration-700 border border-saccha-primary/5 shadow-sm hover:shadow-xl relative overflow-hidden"
            >
              <div
                class="w-20 h-20 bg-saccha-secondary/10 rounded-[1.5rem] flex items-center justify-center mb-6 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12"
              >
                <span
                  class="text-3xl font-black text-saccha-secondary transition-transform group-hover:scale-110"
                >
                  {item.label}
                </span>
              </div>
              <h5
                class="text-2xl font-bold text-saccha-on-surface mb-2 tracking-tight"
              >
                {item.title}
              </h5>
              <p
                class="text-saccha-secondary/60 text-[10px] font-black uppercase tracking-widest mb-3 italic"
              >
                {item.subtitle}
              </p>
              <p
                class="text-saccha-on-surface-variant text-sm leading-relaxed font-medium"
              >
                {item.desc}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</section>

<style>
  .glass-card {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
  }
</style>
