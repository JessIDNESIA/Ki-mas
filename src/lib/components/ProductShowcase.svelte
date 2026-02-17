<script>
	let visible = false;
	let selectedProduct = 0;
	
	import { onMount } from 'svelte';
	
	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					visible = true;
				}
			});
		});
		
		const element = document.querySelector('#products');
		if (element) observer.observe(element);
		
		return () => observer.disconnect();
	});

	const products = [
		{
			name: 'Kacang Panggang Sacha Inchi',
			tagline: 'Original & Crispy',
			color: 'from-amber-600 to-amber-800',
			pirt: '2113507013848-30',
			features: ['Tanpa penggorengan', 'Renyah alami', 'Rendah kalori'],
			image: '/images/kacang-panggang.jpeg'
		},
		{
			name: 'Kacang Telor Sacha Inchi',
			tagline: "Let's Sehat",
			color: 'from-blue-600 to-blue-800',
			pirt: '2113507023848-30',
			features: ['Gurih telur asin', 'Protein tinggi', 'Favorit keluarga'],
			image: '/images/kacang-telor.jpeg'
		},
		{
			name: 'Kacang Disco Sacha Inchi',
			tagline: 'Colorful & Fun',
			color: 'from-purple-600 to-pink-600',
			pirt: '2113507033848-30',
			features: ['Warna-warni ceria', 'Rasa manis gurih', 'Disukai anak-anak'],
			image: '/images/kacang-disco.jpeg'
		}
	];

	const omegaData = [
		{ type: 'OMEGA - 3', value: '46%', color: 'bg-blue-500' },
		{ type: 'OMEGA - 6', value: '37%', color: 'bg-green-500' },
		{ type: 'OMEGA - 9', value: '9%',  color: 'bg-yellow-500' }
	];

	const partners = [
		'Toko Oleh-oleh Nusantara',
		'Toko Oleh-oleh Firdaus',
		'Cafe De Sapa',
		'Toko Kueh Hawa Cake'
	];
</script>

<section id="products" class="relative py-12 sm:py-16 md:py-24 px-3 sm:px-4 bg-gradient-to-b from-emerald-600 to-teal-700">

	<!-- Decorative background -->
	<div class="absolute inset-0 opacity-10 pointer-events-none">
		<div class="absolute top-1/4 left-10 w-56 h-56 bg-yellow-200 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute bottom-1/4 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse delay-100"></div>
	</div>

	<div class="relative z-10 max-w-7xl mx-auto" class:slide-up={visible}>

		<!-- ── Title ── -->
		<div class="text-center mb-10 sm:mb-12 md:mb-16">
			<h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 drop-shadow-lg">
				Produk <span class="text-yellow-200">Ki-Mas</span>
			</h2>
			<p class="text-base sm:text-xl md:text-2xl text-white/90 font-semibold">
				Pilih Varian Favorit Anda!
			</p>
			<div class="w-24 sm:w-32 h-1.5 sm:h-2 bg-yellow-400 mx-auto rounded-full mt-3 sm:mt-4"></div>
		</div>

		<!-- ── Products Grid ──
			 Folded Z Fold 5 (344px) → 1 col
			 sm (640px) / unfolded Z Fold (904px) → 3 col
			 md (768px) → 3 col
		-->
		<div class="grid grid-cols-1 min-[500px]:grid-cols-3 gap-3 sm:gap-5 md:gap-8 mb-10 sm:mb-12 md:mb-16">
			{#each products as product, i}
				<button
					on:click={() => selectedProduct = i}
					class="group bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 text-left w-full
					{selectedProduct === i ? 'border-yellow-400 scale-[1.03]' : 'border-white/30'}"
				>
					<!-- Image -->
					<div class="relative mb-3 sm:mb-4 rounded-xl sm:rounded-2xl overflow-hidden bg-white">
						{#if product.image}
							<div class="image-container">
								<img
									src={product.image}
									alt={product.name}
									class="product-image"
									loading="lazy"
									decoding="async"
								/>
							</div>
							<!-- Tagline bar -->
							<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-r {product.color} py-2 px-2 rounded-b-xl sm:rounded-b-2xl">
								<p class="text-center text-white text-xs sm:text-sm font-black tracking-wide drop-shadow truncate">
									{product.tagline}
								</p>
							</div>
						{:else}
							<div class="w-full aspect-square flex flex-col items-center justify-center p-6 bg-gradient-to-br {product.color}">
								<p class="text-white text-xl font-black mb-1">Ki-Mas</p>
								<p class="text-white text-sm font-semibold text-center">{product.name}</p>
								<p class="text-white/80 text-xs italic mt-1">{product.tagline}</p>
								<div class="mt-3 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
									<span class="text-4xl">🥜</span>
								</div>
							</div>
						{/if}
					</div>

					<!-- Name -->
					<h3 class="text-sm sm:text-base md:text-xl font-black text-teal-700 mb-2 sm:mb-3 text-center leading-snug">
						{product.name}
					</h3>

					<!-- Features -->
					<div class="space-y-1.5 mb-3 sm:mb-4">
						{#each product.features as feature}
							<div class="flex items-center text-xs sm:text-sm text-gray-600 gap-1">
								<span class="text-green-500 flex-shrink-0">✓</span>
								<span class="leading-tight">{feature}</span>
							</div>
						{/each}
					</div>

					<!-- PIRT -->
					<div class="bg-teal-50 rounded-lg p-1.5 sm:p-2 text-center">
						<p class="text-[10px] sm:text-xs text-teal-600 font-semibold break-all">
							P IRT: {product.pirt}
						</p>
					</div>

					<!-- Halal badge -->
					<div class="mt-2 sm:mt-3 flex justify-center">
						<span class="bg-green-600 text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
							✓ HALAL
						</span>
					</div>
				</button>
			{/each}
		</div>

		<!-- ── Omega Stats ── -->
		<div class="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl border-4 border-yellow-300/50 mb-8 sm:mb-12">
			<h3 class="text-2xl sm:text-3xl md:text-4xl font-black text-teal-700 mb-5 sm:mb-6 text-center">
				Kandungan Omega dalam Ki-Mas
			</h3>
			<div class="space-y-3 sm:space-y-4">
				{#each omegaData as omega}
					<div class="flex items-center gap-2 sm:gap-4 bg-teal-50 rounded-xl p-3 sm:p-4">
						<!-- Label — shrink on tiny screens -->
						<span class="text-sm sm:text-xl md:text-2xl font-black text-teal-700 w-24 sm:w-36 flex-shrink-0">
							{omega.type}
						</span>
						<!-- Bar + value -->
						<div class="flex items-center flex-1 gap-2 sm:gap-4 min-w-0">
							<div class="flex-1 bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden min-w-0">
								<div
									class="{omega.color} h-full rounded-full transition-all duration-1000"
									style="width: {omega.value}"
								></div>
							</div>
							<span class="text-base sm:text-xl md:text-2xl font-black text-teal-600 flex-shrink-0 w-10 sm:w-14 text-right">
								{omega.value}
							</span>
						</div>
					</div>
				{/each}
			</div>
			<p class="text-center text-gray-500 mt-4 sm:mt-6 text-xs sm:text-sm">
				* Berdasarkan hasil uji laboratorium
			</p>
		</div>

		<!-- ── Partners ── -->
		<div class="bg-teal-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl border-2 border-white/40">
			<h3 class="text-2xl sm:text-3xl md:text-4xl font-black text-yellow-200 mb-4 sm:mb-6 text-center">
				🤝 Partner Kami
			</h3>
			<!--
				Folded (344px)  → 1 col
				min-[500px]+    → 2 col
			-->
			<div class="grid grid-cols-1 min-[500px]:grid-cols-2 gap-3 sm:gap-4">
				{#each partners as partner}
					<div class="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border-2 border-yellow-300/30">
						<p class="text-white font-bold text-sm sm:text-lg leading-snug">{partner}</p>
					</div>
				{/each}
			</div>
			<div class="mt-4 sm:mt-6 text-center">
				<p class="text-white/90 text-xs sm:text-sm">
					Dan masih banyak mitra lainnya yang terus bertambah! 🌟
				</p>
			</div>
		</div>

	</div>
</section>

<style>
	/* ── Image container ── */
	.image-container {
		position: relative;
		width: 100%;
		aspect-ratio: 1 / 1;
		padding: 0.75rem;
		background: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.product-image {
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
		image-rendering: -webkit-optimize-contrast;
		transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
		transform: translateZ(0);
		will-change: transform;
		animation: fadeInImage 0.6s ease-in;
	}

	.group:hover .product-image {
		transform: scale(1.08) translateZ(0);
	}

	@keyframes fadeInImage {
		from { opacity: 0; transform: scale(0.95) translateZ(0); }
		to   { opacity: 1; transform: scale(1) translateZ(0); }
	}

	/* ── Responsive image padding ── */

	/* iPhone SE / Z Fold folded (≤375px) */
	@media (max-width: 375px) {
		.image-container { padding: 0.5rem; }
	}

	/* Z Fold unfolded / sm+ (≥500px) */
	@media (min-width: 500px) {
		.image-container { padding: 1rem; }
	}
	@media (min-width: 768px) {
		.image-container { padding: 1.25rem; }
	}
	@media (min-width: 1024px) {
		.image-container { padding: 1.5rem; }
	}

	/* ── Slide-up animation ── */
	.slide-up {
		animation: slideUp 0.8s ease-out;
	}
	@keyframes slideUp {
		from { opacity: 0; transform: translateY(50px); }
		to   { opacity: 1; transform: translateY(0); }
	}

	.delay-100 { animation-delay: 0.1s; }

	/* ── High-DPI ── */
	@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
		.product-image { image-rendering: -webkit-optimize-contrast; }
	}
</style>