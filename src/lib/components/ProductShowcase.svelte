<script>
	let visible = false;

	import { onMount } from "svelte";

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

		const element = document.querySelector("#products");
		if (element) observer.observe(element);

		return () => observer.disconnect();
	});

	const products = [
		{
			name: "Kacang Panggang Sacha Inchi",
			tagline: "Original & Crispy",
			color: "saccha-primary",
			pirt: "2113507013848-30",
			image: "/images/kacang-panggang.jpeg",
			features: ["Tanpa penggorengan", "Renyah alami", "Rendah kalori"],
		},
		{
			name: "Kacang Telor Sacha Inchi",
			tagline: "Let's Sehat",
			color: "saccha-secondary",
			pirt: "2113507023848-30",
			image: "/images/kacang-telor.jpeg",
			features: [
				"Gurih telur asin",
				"Protein tinggi",
				"Favorit keluarga",
			],
		},
		{
			name: "Kacang Disco Sacha Inchi",
			tagline: "Colorful & Crunchy",
			color: "saccha-tertiary",
			pirt: "2113507033848-30",
			image: "/images/kacang-disco.jpeg",
			features: [
				"Warna-warni ceria",
				"Rasa manis gurih",
				"Disukai anak-anak",
			],
		},
	];

	const omegaData = [
		{ type: "OMEGA-3", value: "46%", color: "bg-saccha-primary" },
		{ type: "OMEGA-6", value: "37%", color: "bg-saccha-secondary" },
		{ type: "OMEGA-9", value: "9%", color: "bg-saccha-tertiary" },
	];

	const partners = [
		{
			name: "Emping Jagung Nusantara",
			image: "/images/partners/emping_jagung_nusantara.jpg",
		},
		{ name: "Cafe De Sapa", image: "/images/partners/desapa.jpg" },
		{
			name: "Toko Kue Hawa Cake",
			image: "/images/partners/hawa-cake.jpg",
		},
	];
	import { reveal } from "$lib/actions/reveal";
</script>

<section
	id="products"
	class="section-standard relative bg-white overflow-hidden"
>
	{#if visible}
		<div
			class="relative z-10"
			class:animate-slide-up={visible}
		>
			<!-- Editorial Header -->
			<div class="section-header-spacing text-center">
				<span class="section-eyebrow">Nature's Prime Selection</span>
				<h2 class="section-title">
					Produk <span class="text-saccha-gold">Ki-Mas</span>
				</h2>
				<div class="w-32 h-1.5 bg-saccha-primary/10 mx-auto mt-4 rounded-full"></div>
			</div>

			<!-- Product Showcase Grid -->
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch mb-24">
				{#each products as product}
					<div class="group h-full">
						<div
							class="bg-saccha-surface-container h-full rounded-[2.5rem] p-5 md:p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col relative overflow-hidden border border-saccha-primary/5"
						>
							<!-- Halal Badge -->
							<div class="absolute top-5 right-5 z-20">
								<span
									class="bg-[#008e44] text-white px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase shadow-md flex items-center gap-1"
								>
									Halal Certified
								</span>
							</div>

							<div class="relative mb-8 flex-grow flex items-center justify-center">
								<img
									src={product.image}
									alt={product.name}
									class="w-full h-auto max-h-[300px] object-contain relative z-10 rounded-2xl drop-shadow-xl transition-transform duration-700 group-hover:scale-105"
								/>
							</div>

							<div class="space-y-4">
								<div>
									<h3 class="font-headline text-2xl font-black uppercase tracking-tighter text-saccha-primary leading-tight">
										{product.name}
									</h3>
									<p class="font-body text-[10px] text-saccha-gold font-black uppercase tracking-widest mt-1">
										P-IRT: {product.pirt}
									</p>
								</div>
								
								<div class="flex flex-wrap gap-2">
									{#each product.features as feature}
										<span class="px-3 py-1 bg-white/50 text-saccha-on-surface-variant text-[9px] font-bold uppercase tracking-wider rounded-full border border-saccha-primary/5">
											{feature}
										</span>
									{/each}
								</div>

								<a
									href="https://wa.me/6283846435699"
									target="_blank"
									rel="noopener noreferrer"
									class="block w-full text-center bg-saccha-primary text-white py-4 rounded-full font-headline font-black uppercase tracking-widest text-xs hover:bg-saccha-gold transition-all shadow-lg shadow-saccha-primary/20"
								>
									Ambil Sekarang
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Nutrition Lab Visualization -->
			<div class="mb-24 max-w-4xl mx-auto text-center">
				<div class="section-header-spacing">
					<span class="section-eyebrow">The Nutrition Lab</span>
					<h2 class="section-title">Balanced Essential <br/><span class="text-saccha-gold">Fatty Acids</span></h2>
					<p class="text-saccha-on-surface-variant text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto mt-6">
						Diproses secara alami untuk menjaga kandungan Omega-3, 6, dan 9 yang tinggi guna mendukung kesehatan jantung dan otak.
					</p>
				</div>

				<div class="space-y-6 max-w-2xl mx-auto text-left">
					{#each omegaData as omega}
						<div class="group" use:reveal={{ delay: 200 }}>
							<div class="flex justify-between items-end mb-2">
								<span class="font-headline text-lg font-black uppercase tracking-tight text-saccha-primary">
									{omega.type}
								</span>
								<span class="font-body font-black text-saccha-gold text-xl">
									{omega.value}
								</span>
							</div>
							<div class="h-3 w-full bg-saccha-surface-container rounded-full overflow-hidden shadow-inner">
								<div
									class="h-full {omega.color} rounded-full transition-all duration-1000 group-hover:brightness-110"
									style="width: {omega.value}"
								></div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Partner Kami Section -->
			<div class="py-12 md:py-20 bg-saccha-surface-container-low rounded-[2.5rem] relative overflow-hidden text-center border border-saccha-primary/5">
				<div class="mb-12">
					<span class="section-eyebrow">Our Trusted Network</span>
					<h2 class="font-headline text-3xl md:text-5xl font-black uppercase tracking-tighter mt-2 text-saccha-primary">
						Partner Kami
					</h2>
				</div>

				<div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">
					{#each partners as partner}
						<div class="flex flex-col items-center gap-3 group">
							<div class="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-4 border-white grayscale hover:grayscale-0">
								<img
									src={partner.image}
									alt={partner.name}
									class="w-full h-full object-cover transition-all duration-500 hover:scale-110"
								/>
							</div>
							<span class="text-[9px] font-black tracking-widest uppercase text-saccha-primary/60 group-hover:text-saccha-primary transition-colors">
								{partner.name}
							</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</section>

<style>
	.organic-blob {
		position: absolute;
		background: radial-gradient(
			circle,
			rgba(157, 241, 151, 0.25) 0%,
			rgba(240, 249, 237, 0) 70%
		);
		border-radius: 50%;
		z-index: 0;
	}

	.floating {
		animation: float 6s ease-in-out infinite;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px) rotate(0deg);
		}
		50% {
			transform: translateY(-20px) rotate(2deg);
		}
	}

	.animate-slide-up {
		animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}

	@keyframes slideUp {
		0% {
			opacity: 0;
			transform: translateY(60px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	:global(html) {
		scroll-behavior: smooth;
	}
</style>
