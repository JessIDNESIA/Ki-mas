<script lang="ts">
	import { onMount } from "svelte";
	import {
		Plus,
		Heart,
		Zap,
		ShieldCheck,
		Clock,
		Sprout,
		History,
	} from "lucide-svelte";

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
			icon: Plus,
			label: "Ω3",
		},
		{
			title: "Omega 6",
			subtitle: "(Asam Linoleat)",
			desc: "Membantu menjaga kesehatan kulit tetap lembap dan memperkuat sistem kekebalan tubuh dari dalam.",
			icon: Heart,
			label: "Ω6",
		},
		{
			title: "Omega 9",
			subtitle: "(Asam Oleat)",
			desc: "Mendukung kesehatan kardiovaskular secara menyeluruh dan menjaga tingkat energi tubuh agar tetap prima.",
			icon: Zap,
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
	id="apa-itu-sacha-inchi"
	bind:this={sectionRef}
	class="min-h-screen flex items-center justify-center py-20 px-4 premium-gradient relative overflow-hidden font-fredoka text-white selection:bg-sacha-green selection:text-charcoal-green"
>
	<!-- Subtle Floating Decorative Elements -->
	<div
		class="absolute top-20 left-10 text-8xl opacity-10 animate-float pointer-events-none"
	>
		🤔
	</div>
	<div
		class="absolute bottom-20 right-10 text-9xl opacity-10 animate-float-delayed pointer-events-none"
	>
		🤔
	</div>

	<!-- Nature Inspired Elements (Leaves) -->
	<div
		class="floating-leaf top-[10%] left-[15%] animate-float"
		style="animation-duration: 12s;"
	>
		<svg
			fill="none"
			height="60"
			stroke="#84cc16"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1"
			viewBox="0 0 24 24"
			width="60"
		>
			<path
				d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a7 7 0 0 1-10 10Z"
			></path>
			<path d="M19 21c-4.47 0-8-3.53-8-8"></path>
			<path d="M15 13a2 2 0 0 0-2-2"></path>
		</svg>
	</div>
	<div
		class="floating-leaf bottom-[15%] left-[5%] animate-float-delayed"
		style="animation-duration: 15s;"
	>
		<svg
			fill="none"
			height="80"
			stroke="#14b8a6"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1"
			viewBox="0 0 24 24"
			width="80"
		>
			<path
				d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a7 7 0 0 1-10 10Z"
			></path>
			<path d="M19 21c-4.47 0-8-3.53-8-8"></path>
		</svg>
	</div>
	<div
		class="floating-leaf top-[40%] right-[5%] animate-float"
		style="animation-duration: 18s;"
	>
		<svg
			fill="none"
			height="40"
			stroke="#fde047"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1"
			viewBox="0 0 24 24"
			width="40"
		>
			<path
				d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a7 7 0 0 1-10 10Z"
			></path>
		</svg>
	</div>

	<!-- Background Glows -->
	<div
		class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sacha-green rounded-full mix-blend-soft-light filter blur-[150px] opacity-10 animate-pulse"
	></div>
	<div
		class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sacha-teal rounded-full mix-blend-soft-light filter blur-[150px] opacity-10 animate-pulse"
		style="animation-delay: 1.5s;"
	></div>

	<div
		class="max-w-6xl w-full relative z-10"
		class:animate-slide-up={visible}
		class:opacity-0={!visible}
	>
		<!-- Section Title -->
		<div class="text-center mb-16">
			<span
				class="text-sacha-green font-bold tracking-[0.4em] uppercase text-xs mb-4 block animate-pulse"
				>SUPERFOOD DISCOVERY</span
			>
			<h2
				class="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
			>
				Apa itu <span class="text-sacha-yellow">Sacha Inchi?</span>
			</h2>
			<div
				class="w-32 h-1.5 bg-gradient-to-r from-transparent via-sacha-yellow to-transparent mx-auto mt-6 rounded-full shadow-[0_0_10px_#fde047]"
			></div>
		</div>

		<!-- Content Card -->
		<div
			class="glass-card rounded-[3.5rem] p-8 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden"
		>
			<!-- Decorative Inner Light -->
			<div
				class="absolute -top-20 -right-20 w-64 h-64 bg-sacha-yellow/5 rounded-full blur-3xl"
			></div>

			<div class="grid lg:grid-cols-12 gap-16 items-center">
				<!-- Left Column: Image & Intro -->
				<div class="lg:col-span-5 space-y-10">
					<div class="relative group">
						<div
							class="absolute -inset-1 bg-gradient-to-r from-sacha-green to-sacha-teal rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
						></div>
						<div
							class="relative overflow-hidden rounded-[2.5rem] border border-white/10 image-glow"
						>
							<img
								src="/images/sacha-inchi-discovery.png"
								alt="Sacha Inchi Plant and Seeds"
								class="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
							/>
						</div>
					</div>

					<div class="space-y-6">
						<h3 class="text-4xl font-bold leading-tight">
							Kacang Bintang dari <br />
							<span class="text-sacha-green italic tracking-wide"
								>Hutan Amazon</span
							>
						</h3>
						<p class="text-gray-300 text-lg leading-relaxed">
							Kacang Sacha Inchi adalah kacang bintang dari
							tanaman merambat yang berasal dari <span
								class="text-white font-semibold underline decoration-sacha-green decoration-2 underline-offset-4"
							>
								hutan Amazon Peru Amerika Selatan</span
							>. Dikenal juga sebagai
							<span class="text-sacha-yellow font-bold italic"
								>INCA PEANUT / ( Plukenetia Volubilis )</span
							>, yang memiliki banyak kandungan gizi SUPERFOOD dan
							merupakan sumber protein yang kaya asam amino
							esensial seperti:
						</p>
						<div
							class="inline-block px-10 py-5 bg-charcoal-green/80 border border-sacha-green/30 rounded-2xl shadow-[0_0_30px_rgba(132,204,22,0.2)] hover:shadow-[0_0_50px_rgba(132,204,22,0.4)] transition-all duration-500"
						>
							<span
								class="text-3xl font-black tracking-[0.2em] text-sacha-green"
								>SUPERFOOD</span
							>
						</div>
					</div>
				</div>

				<!-- Right Column: Omega Cards -->
				<div class="lg:col-span-7 space-y-6">
					{#each omegaData as item}
						<div class="benefit-card rounded-3xl p-8 group">
							<div
								class="flex flex-col md:flex-row gap-8 items-center"
							>
								<div
									class="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-sacha-yellow/20 to-transparent rounded-full flex flex-col items-center justify-center border-2 border-white/5 group-hover:border-sacha-yellow/50 transition-all duration-500 shadow-inner"
								>
									<svelte:component
										this={item.icon}
										class="w-12 h-12 text-sacha-yellow mb-0.5 group-hover:scale-110 transition-transform"
									/>
									<span
										class="text-2xl font-bold text-sacha-yellow tracking-tighter"
										>{item.label}</span
									>
								</div>
								<div class="text-center md:text-left">
									<h4 class="text-2xl font-bold mb-2">
										{item.title}
										<span
											class="text-sm font-normal text-sacha-yellow/60 ml-2"
											>{item.subtitle}</span
										>
									</h4>
									<p
										class="text-gray-400 leading-relaxed text-lg"
									>
										{item.desc}
									</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Bottom: Benefits Icons -->
			<div
				class="grid md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-white/10"
			>
				{#each benefits as benefit}
					<div
						class="benefit-card rounded-[2.5rem] p-10 text-center flex flex-col items-center group"
					>
						<div
							class="w-16 h-16 {benefit.bgColor} rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
						>
							<svelte:component
								this={benefit.icon}
								class="w-8 h-8 {benefit.color}"
							/>
						</div>
						<h5 class="text-xl font-bold mb-4">{benefit.label}</h5>
						<p class="text-gray-400 text-sm leading-relaxed">
							{benefit.sub}
						</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Legacy Pill Banner -->
		<div class="mt-28 text-center pb-12">
			<div class="relative inline-block group">
				<!-- Intense Outer Glow -->
				<div
					class="absolute -inset-2 bg-sacha-teal/40 rounded-full blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"
				></div>

				<div
					class="relative inline-flex items-center gap-8 px-12 py-7 bg-black/90 backdrop-blur-xl border-2 border-sacha-teal/40 rounded-full shadow-[0_0_60px_rgba(20,184,166,0.3)] group-hover:border-sacha-teal/70 transition-all duration-700"
				>
					<div>
						<span class="text-3xl">🏺</span>
					</div>
					<p
						class="text-sm md:text-xl font-bold tracking-[0.4em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-sacha-green via-sacha-yellow to-sacha-teal drop-shadow-[0_0_15px_rgba(132,204,22,0.4)]"
					>
						Warisan Kesehatan Suku Inca Sejak Ribuan Tahun Lalu
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.glass-card {
		background: rgba(255, 255, 255, 0.03);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.benefit-card {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(253, 224, 71, 0.1);
		transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.benefit-card:hover {
		transform: translateY(-8px) scale(1.02);
		background: rgba(253, 224, 71, 0.08);
		border-color: #fde047;
		box-shadow:
			0 20px 25px -5px rgba(0, 0, 0, 0.3),
			0 10px 10px -5px rgba(132, 204, 22, 0.1);
	}

	.premium-gradient {
		background: radial-gradient(circle at center, #0a2e24 0%, #051410 100%);
	}

	.image-glow {
		box-shadow: 0 0 30px rgba(132, 204, 22, 0.2);
	}

	.floating-leaf {
		position: absolute;
		pointer-events: none;
		opacity: 0.1;
		filter: blur(1px);
	}
</style>
