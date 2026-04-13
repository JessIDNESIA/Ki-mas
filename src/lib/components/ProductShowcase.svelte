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
</script>

<section
	id="products"
	class="relative py-24 md:py-40 bg-saccha-background overflow-hidden selection:bg-saccha-primary-container selection:text-saccha-on-primary-container"
>
	<!-- Background Decorative Blobs -->
	<div
		class="organic-blob w-[600px] h-[600px] -top-64 -left-32 opacity-20 floating"
	></div>
	<div
		class="organic-blob w-[500px] h-[500px] bottom-0 -right-24 opacity-20"
		style="animation: float 8s ease-in-out infinite reverse;"
	></div>

	<div
		class="max-w-7xl mx-auto px-6 relative z-10"
		class:opacity-0={!visible}
		class:animate-slide-up={visible}
	>
		<!-- Editorial Header -->
		<header class="mb-24 text-center space-y-6">
			<span
				class="font-headline text-sm font-bold tracking-[0.4em] text-saccha-primary uppercase inline-block"
				>Nature's Prime Selection</span
			>
			<h2
				class="font-headline text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-saccha-on-surface"
			>
				Produk <br />
				<!-- WADAH LOGO: 'h-[1em]' mengunci jarak baris (line-height) secara natural terhadap teks di atasnya -->
				<span
					class="relative inline-block w-48 md:w-96 lg:w-[32rem] h-[2em]"
				>
					<!-- UKURAN & POSISI GAMBAR: 
						 - Ubah 'scale-[1.x]' untuk membesarkan/mengecilkan tampilan fisik logo.
						 - Ubah '-translate-y-[x%]' (misalnya -translate-y-[65%]) untuk menggeser logo semakin naik agar mendekat ke teks "Produk" jika dirasa terlalu renggang.
					-->
					<img
						src="/images/ki-mas-logo.png"
						alt="Ki-Mas"
						class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[69%] w-full h-24 md:h-48 lg:h-64 object-contain scale-[1.2] md:scale-[1.1] origin-center"
					/>
				</span>
			</h2>
		</header>

		<!-- Product Showcase Grid (All identical cards) -->
		<section
			class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch mb-40"
		>
			{#each products as product}
				<div class="group h-full">
					<div
						class="bg-saccha-surface-container-lowest h-full rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:shadow-[0px_30px_80px_rgba(23,106,33,0.15)] hover:-translate-y-4 flex flex-col relative overflow-hidden border border-saccha-surface-container-high/50"
					>
						<!-- Strategic Green Halal Badge -->
						<div class="absolute top-6 right-6 z-20">
							<span
								class="bg-[#008e44] text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-md flex items-center gap-1"
							>
								<svg
									class="w-2.5 h-2.5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
									/>
								</svg>
								Halal Certified
							</span>
						</div>

						<div
							class="relative mb-10 flex-grow flex items-center justify-center"
						>
							<div
								class="absolute inset-0 border-2 border-saccha-primary-container rounded-full scale-110 opacity-15 group-hover:scale-125 transition-transform duration-1000"
							></div>
							<img
								src={product.image}
								alt={product.name}
								class="w-full h-auto max-h-[400px] object-contain relative z-10 rounded-2xl drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-transform duration-700 group-hover:scale-110"
							/>
						</div>

						<div class="mt-auto">
							<h3
								class="font-headline text-3xl font-black uppercase tracking-tighter mb-2 text-saccha-on-surface leading-tight"
							>
								{product.name}
							</h3>
							<p
								class="font-body text-xs text-saccha-primary font-bold mb-8 uppercase tracking-widest"
							>
								P-IRT: {product.pirt}
							</p>
							<a
								href="https://wa.me/6283846435699"
								target="_blank"
								rel="noopener noreferrer"
								class="block w-full text-center bg-saccha-primary text-white py-5 rounded-full font-headline font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-lg shadow-saccha-primary/30"
							>
								Ambil Sekarang
							</a>
						</div>
					</div>
				</div>
			{/each}
		</section>

		<!-- Nutrition Lab Visualization (Stacked Bars) -->
		<section class="mb-40 max-w-4xl mx-auto">
			<div class="text-center space-y-10">
				<div class="space-y-4">
					<span
						class="font-headline text-sm font-bold tracking-[0.3em] text-saccha-primary uppercase"
						>The Nutrition Lab</span
					>
					<h2
						class="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-saccha-on-surface"
					>
						Balanced <br />Essential <br /><span
							class="text-saccha-primary">Fatty Acids</span
						>
					</h2>
				</div>

				<p
					class="font-body text-saccha-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto"
				>
					Kacang Sacha Inchi kami berasal dari perkebunan pilihan,
					diproses secara alami untuk menjaga kandungan Omega-3, 6,
					dan 9 yang tinggi guna mendukung kesehatan jantung,
					kecerdasan otak, dan vitalitas tubuh.
				</p>

				<!-- Stacked Layout: 1 col, 3 rows -->
				<div class="space-y-8 mt-16 max-w-2xl mx-auto text-left">
					{#each omegaData as omega}
						<div class="group">
							<div class="flex justify-between items-end mb-4">
								<span
									class="font-headline text-xl font-bold uppercase tracking-tight text-saccha-on-surface"
								>
									{omega.type}
								</span>
								<span
									class="font-body font-black text-saccha-primary text-2xl"
								>
									{omega.value}
								</span>
							</div>
							<div
								class="h-4 w-full bg-saccha-surface-container rounded-full overflow-hidden shadow-inner"
							>
								<div
									class="h-full {omega.color} rounded-full transition-all duration-1000 group-hover:brightness-110"
									style="width: {omega.value}"
								></div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- Partner Kami Section (Circular Profile Images) -->
		<section
			class="py-24 bg-saccha-surface-container-low rounded-[3rem] px-8 md:px-12 relative overflow-hidden text-center"
		>
			<div
				class="absolute inset-0 organic-blob opacity-20 scale-150 -z-10 bg-saccha-primary-container"
			></div>

			<div class="mb-16">
				<span
					class="font-headline text-xs font-bold tracking-[0.4em] text-saccha-on-surface-variant uppercase"
					>Our Trusted Network</span
				>
				<h2
					class="font-headline text-4xl md:text-5xl font-black uppercase tracking-tighter mt-4 text-saccha-on-surface"
				>
					Partner Kami
				</h2>
			</div>

			<div
				class="flex flex-wrap justify-center items-center gap-8 md:gap-14"
			>
				{#each partners as partner}
					<div class="flex flex-col items-center gap-4 group">
						<div
							class="w-32 h-32 md:w-44 md:h-44 bg-white rounded-full flex items-center justify-center shadow-xl hover:shadow-saccha-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden border-4 border-white"
						>
							{#if partner.image}
								<img
									src={partner.image}
									alt={partner.name}
									class="w-full h-full object-cover transition-all duration-500 hover:scale-110"
								/>
							{:else}
								<div
									class="font-headline font-black text-[10px] md:text-xs text-saccha-on-surface/40 uppercase tracking-tighter px-4"
								>
									{partner.name}
								</div>
							{/if}
						</div>
						<span
							class="text-[10px] font-black tracking-widest uppercase text-saccha-on-surface/80 group-hover:text-saccha-primary transition-colors text-center"
						>
							{partner.name}
						</span>
					</div>
				{/each}
			</div>
		</section>
	</div>
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
