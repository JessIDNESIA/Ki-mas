<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

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
</script>

<section
	id="apa-itu-sacha-inchi"
	bind:this={sectionRef}
	class="section-standard relative overflow-hidden bg-white"
>
	<!-- Subtle Floating Decorative Elements -->
	<div class="absolute top-20 left-10 text-8xl opacity-10 animate-float pointer-events-none">🤔</div>
	<div class="absolute bottom-20 right-10 text-9xl opacity-10 animate-float-delayed pointer-events-none">🤔</div>

	{#if visible}
		<div class="relative z-10" in:fly={{ y: 30, duration: 1000 }}>
			<!-- Section Header -->
			<div class="text-center section-header-spacing">
				<span class="section-eyebrow">Superfood Discovery</span>
				<h2 class="section-title">
					Apa itu <span class="text-saccha-gold">Sacha Inchi?</span>
				</h2>
				<div class="w-24 h-1.5 bg-saccha-primary/10 mx-auto mt-4 rounded-full"></div>
			</div>

			<!-- Main Content Grid -->
			<div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
				<!-- Left Area: Text (7/12) -->
				<div class="lg:col-span-7 space-y-8">
					<div class="space-y-6">
						<h3 class="text-3xl md:text-5xl font-headline font-black text-saccha-primary leading-tight tracking-tight uppercase">
							Kacang Bintang dari <span class="text-saccha-gold italic leading-none">Hutan Amazon</span>
						</h3>
						<p class="text-saccha-on-surface-variant text-lg leading-relaxed font-medium">
							Kacang Sacha Inchi adalah kacang bintang dari tanaman merambat yang berasal dari 
							<span class="text-saccha-primary font-black border-b-2 border-saccha-gold/30">Hutan Amazon Peru Amerika Selatan</span>. 
							Dikenal juga sebagai <span class="text-saccha-gold font-black italic">INCA PEANUT (Plukenetia Volubilis)</span>, 
							sebuah anugerah alam yang kaya akan nutrisi esensial.
						</p>
					</div>

					<div class="p-6 md:p-8 bg-saccha-surface-container rounded-[2rem] border border-saccha-primary/5 flex items-center gap-6">
						<div class="w-16 h-16 rounded-2xl bg-saccha-primary flex items-center justify-center text-white flex-shrink-0">
							<span class="material-symbols-outlined text-3xl">psychology</span>
						</div>
						<p class="text-saccha-on-surface font-bold text-lg md:text-xl leading-snug">
							Sumber protein lengkap dan asam amino esensial pilihan untuk vitalitas harian keluarga Anda.
						</p>
					</div>
				</div>

				<!-- Right Area: Image (5/12) -->
				<div class="lg:col-span-5 relative group">
					<div class="absolute -inset-4 bg-saccha-gold/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
					<div class="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
						<img
							src="/images/plant.jpg"
							alt="Tanaman Sacha Inchi"
							class="w-full h-auto transform transition-transform duration-[3000ms] group-hover:scale-110"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
						<div class="absolute bottom-6 left-6 flex items-center gap-3">
							<div class="w-2 h-2 rounded-full bg-saccha-gold animate-pulse"></div>
							<span class="text-white text-[10px] font-black uppercase tracking-[0.3em]">Amazon Heritage</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Closing Quote -->
			<div class="mt-20 text-center max-w-3xl mx-auto px-6">
				<p class="text-xl md:text-3xl font-light text-saccha-primary italic leading-relaxed">
					"Warisan dari masa lalu, dirancang oleh alam, untuk mendukung setiap langkah perjalanan hidup Anda yang berharga."
				</p>
				<div class="flex justify-center gap-3 mt-8 opacity-30">
					{#each Array(3) as _, i}
						<div class="w-1.5 h-1.5 rounded-full bg-saccha-primary animate-pulse" style="animation-delay: {i * 200}ms"></div>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</section>

<style>
	@keyframes float {
		0%, 100% { transform: translateY(0) rotate(0deg); }
		50% { transform: translateY(-30px) rotate(8deg); }
	}

	.animate-float { animation: float 10s ease-in-out infinite; }
	.animate-float-delayed { animation: float 12s ease-in-out infinite; animation-delay: 2s; }
</style>
