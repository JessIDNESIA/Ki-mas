<script>
	import { onMount } from "svelte";
	import { fly, fade } from "svelte/transition";
	import { Leaf, HeartPulse, ChevronDown, ShoppingBag } from "lucide-svelte";

	let mounted = false;
	let isZoomActive = false;

	onMount(() => {
		mounted = true;
	});
</script>

<!-- Main Hero Section -->
<main
	id="home"
	class="relative min-h-[100svh] w-full flex items-center overflow-hidden bg-black group/hero pt-20"
>
	<!-- Full-bleed Background with Targeted Logic-based Zoom -->
	<div class="absolute inset-0 z-0 overflow-hidden">
		<img
			alt="Sacha Inchi Plant Backdrop"
			class="w-full h-full object-cover object-left transition-transform duration-[4000ms] {isZoomActive
				? 'scale-110'
				: 'scale-100'} origin-left"
			src="/images/hero.jpg"
		/>

		<!-- [CONFIG: SIDEBAR WIDTH] Atur lebar sidebar kaca di sini (default: 50%) -->
		<div class="absolute inset-0 z-10 glass-sidebar"></div>
    
    <!-- Cinematic Dark Scrim for Readability -->
    <div class="absolute inset-0 z-20 bg-black/40"></div>
	</div>

	<!-- [CONFIG: TRIGGER ZONE WIDTH] Area interaksi zoom (Harus sinkron dengan sisa lebar sidebar) 
	     Contoh: Jika sidebar 50% (w-1/2), maka trigger zone juga 50% (w-1/2). -->
	<div
		class="absolute inset-y-0 right-0 w-1/2 z-40 cursor-crosshair"
		role="presentation"
		on:mouseenter={() => (isZoomActive = true)}
		on:mouseleave={() => (isZoomActive = false)}
	></div>

	<!-- Atmospheric Light Accents -->
	<div
		class="absolute top-1/2 -left-20 w-80 h-80 bg-saccha-primary/10 rounded-full blur-[100px] z-20"
	></div>

	<!-- Content Layer (Meticulously Scaled for 100vh) -->
	<div
		class="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
	>
		<div class="grid grid-cols-1 md:grid-cols-12 items-center">
			<!-- Left-aligned Content Area -->
			{#if mounted}
				<div
					class="col-span-1 md:col-span-8 lg:col-span-7 flex flex-col items-start gap-4 md:gap-7"
					in:fly={{ x: -40, duration: 1000, delay: 200 }}
				>
					<!-- [CONFIG: LOGO POSITION & SIZE] Atur jarak (-mb) dan lebar (w-) logo di bawah ini -->
					<div
						class="relative mix-blend-screen -ml-4 -mb-10 pt-10 lg:pt-0"
					>
						<img
							src="/images/ki-mas-logo.png"
							alt="Ki-Mas"
							class="w-[200px] md:w-[280px] lg:w-[320px] h-auto logo-shadow-glow floating-logo-smooth object-contain"
						/>
					</div>
					<!-- [END CONFIG] -->

					<div class="flex flex-col items-start gap-4">
						<!-- Tactical Eyebrow -->
						<div
							class="flex items-center gap-3"
							in:fade={{ delay: 500 }}
						>
							<span class="w-10 h-[2px] bg-[#4ADE80]"></span>
							<span
								class="font-label text-[10px] font-black tracking-[0.4em] text-[#4ADE80] uppercase"
							>
								Nature's Gold Standard
							</span>
						</div>

						<!-- Headline: Balanced for Website Scale -->
						<h1
							class="font-headline font-black text-3xl md:text-5xl lg:text-[clamp(2.5rem,4.5vw,4.2rem)] text-white uppercase tracking-tighter leading-[0.9] drop-shadow-2xl"
							in:fly={{ y: 20, duration: 1000, delay: 700 }}
						>
							Sudah Saatnya <br />
							<span class="text-[#4ADE80]">Ganti Camilanmu</span>
							<br />
							<span
								class="text-[0.6em] md:text-[0.8em] block mt-1"
								>Dengan Makanan Sehat Kacang Sacha Inchi</span
							>
						</h1>

						<!-- Sub-headline: Concise & Impactful -->
						<p
							class="font-body text-white/90 text-sm md:text-base max-w-lg leading-relaxed mt-1"
							in:fade={{ delay: 900 }}
						>
							Superfood premium kaya akan
							<span
								class="font-black text-[#FBBF24] border-b-2 border-[#FBBF24]/40 drop-shadow-[0_0_10px_rgba(251,191,36,0.2)]"
								>Omega 3, 6, dan 9</span
							>. Mendukung vitalitas jantung dan kecerdasan otak
							Anda secara murni.
						</p>
					</div>

					<!-- Strategic CTA Buttons -->
					<div
						class="flex flex-wrap gap-5 mt-4"
						in:fly={{ y: 20, duration: 1000, delay: 1100 }}
					>
						<a
							href="#products"
							class="group/cta relative px-9 py-5 bg-[#166534] text-white font-headline font-black rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_15px_40px_rgba(22,101,52,0.3)] flex items-center gap-2 uppercase tracking-widest text-[10px]"
						>
							<span class="relative z-10">Pesan Sekarang</span>
							<ShoppingBag size={20} class="relative z-10" />
							<div
								class="absolute inset-0 bg-[#22C55E] translate-y-full group-hover/cta:translate-y-0 transition-transform duration-500"
							></div>
						</a>
						<a
							href="#benefits"
							class="px-9 py-5 border-2 border-white/20 text-white font-headline font-black rounded-full backdrop-blur-md hover:bg-white hover:text-saccha-on-surface transition-all duration-300 active:scale-95 uppercase tracking-widest text-[10px]"
						>
							Manfaat
						</a>
					</div>
				</div>
			{/if}

			<!-- Empty space on the right to let the bright image shine -->
			<div class="hidden md:block md:col-span-4 lg:col-span-5"></div>
		</div>
	</div>

	<!-- Scroll Indicator: Slim Responsive -->
	<div
		class="absolute bottom-8 right-12 z-40 hidden lg:flex flex-col items-center gap-3 transition-opacity duration-1000 opacity-30"
		class:opacity-0={!mounted}
	>
		<p
			class="text-[9px] font-black text-white tracking-[0.4em] uppercase [writing-mode:vertical-lr] mb-2"
		>
			Scroll
		</p>
		<div class="w-[1px] h-14 bg-white/20 relative overflow-hidden">
			<div
				class="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-vertical"
			></div>
		</div>
	</div>
</main>

<style>
	.glass-sidebar {
		/* [CONFIG: SIDEBAR WIDTH] Atur lebar sidebar di sini (Pastikan sinkron dengan TRIGGER ZONE di atas) */
		width: 70%;
		height: 100%;
		background: rgba(49, 62, 23, 0.7);
		backdrop-filter: blur(28px);
		-webkit-backdrop-filter: blur(28px);
		/* [CONFIG: SHADOW FADE] Atur kehalusan bayangan di sini.
		   Semakin kecil persentase pertama (misal 60%), semakin panjang/halus memudarnya. */
		mask-image: linear-gradient(
			to right,
			rgba(0, 0, 0, 1) 57%,
			rgba(0, 0, 0, 0) 100%
		);
		-webkit-mask-image: linear-gradient(
			to right,
			rgba(0, 0, 0, 1) 57%,
			rgba(0, 0, 0, 0) 100%
		);
	}

	@keyframes scroll-vertical {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(200%);
		}
	}

	.animate-scroll-vertical {
		animation: scroll-vertical 2s cubic-bezier(0.7, 0, 0.3, 1) infinite;
	}

	@keyframes bob-smooth {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.floating-logo-smooth {
		animation: bob-smooth 5s ease-in-out infinite;
	}

	.logo-shadow-glow {
		filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.1));
	}

	:global(.font-headline) {
		font-family: "Epilogue", sans-serif;
	}

	:global(.font-body),
	:global(.font-label) {
		font-family: "Manrope", sans-serif;
	}
</style>
