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
		{ type: 'OMEGA - 9', value: '9%', color: 'bg-yellow-500' }
	];

	const partners = [
		'Toko Oleh-oleh Nusantara',
		'Toko Oleh-oleh Firdaus',
		'Cafe De Sapa',
		'Toko Kueh Hawa Cake'
	];
</script>

<section id="products" class="relative py-16 md:py-24 px-4 bg-gradient-to-b from-emerald-600 to-teal-700">
	<!-- Decorative background -->
	<div class="absolute inset-0 opacity-10">
		<div class="absolute top-1/4 left-10 w-56 h-56 bg-yellow-200 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute bottom-1/4 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse delay-100"></div>
	</div>

	<div class="relative z-10 max-w-7xl mx-auto {visible ? 'slide-up' : ''}">
		<!-- Title -->
		<div class="text-center mb-12 md:mb-16">
			<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
				Produk <span class="text-yellow-200">Ki-Mas</span>
			</h2>
			<p class="text-xl sm:text-2xl text-white/90 font-semibold">
				Pilih Varian Favorit Anda!
			</p>
			<div class="w-32 h-2 bg-yellow-400 mx-auto rounded-full mt-4"></div>
		</div>

		<!-- Products Grid -->
		<div class="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
			{#each products as product, i}
				<button
					on:click={() => selectedProduct = i}
					class="group bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 text-left {selectedProduct === i ? 'border-yellow-400 scale-105' : 'border-white/30'}"
				>
					<!-- Product Image Container - dengan SPACE di sekitar -->
					<div class="relative mb-4 rounded-2xl overflow-hidden bg-white">
						{#if product.image}
							<!-- Container dengan padding untuk breathing space -->
							<div class="image-container">
								<!-- 🖼️ GAMBAR PRODUK - MAKSIMAL tanpa terhalang -->
								<img 
									src={product.image} 
									alt={product.name}
									class="product-image"
									loading="lazy"
									decoding="async"
									fetchpriority="high"
								/>
							</div>
							
							<!-- Label DILUAR gambar - di bawah dengan gradient accent -->
							<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-r {product.color} p-3 rounded-b-2xl">
								<p class="text-center text-white text-sm md:text-base font-black tracking-wide drop-shadow">
									{product.tagline}
								</p>
							</div>
						{:else}
							<!-- Fallback jika gambar belum ada -->
							<div class="w-full aspect-square flex flex-col items-center justify-center p-8 bg-gradient-to-br {product.color}">
								<div class="text-white text-center">
									<p class="text-2xl font-black mb-2">Ki-Mas</p>
									<p class="text-lg font-semibold mb-1">{product.name}</p>
									<p class="text-sm italic opacity-90">{product.tagline}</p>
								</div>
								<div class="mt-4 w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
									<span class="text-6xl">🥜</span>
								</div>
							</div>
						{/if}
					</div>

					<!-- Product Name -->
					<h3 class="text-xl font-black text-teal-700 mb-3 text-center">
						{product.name}
					</h3>

					<!-- Features -->
					<div class="space-y-2 mb-4">
						{#each product.features as feature}
							<div class="flex items-center text-sm text-gray-600">
								<span class="text-green-500 mr-2">✓</span>
								<span>{feature}</span>
							</div>
						{/each}
					</div>

					<!-- PIRT -->
					<div class="bg-teal-50 rounded-lg p-2 text-center">
						<p class="text-xs text-teal-600 font-semibold">P IRT: {product.pirt}</p>
					</div>

					<!-- Halal Badge -->
					<div class="mt-3 flex justify-center">
						<span class="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
							✓ HALAL
						</span>
					</div>
				</button>
			{/each}
		</div>

		<!-- Omega Stats -->
		<div class="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border-4 border-yellow-300/50 mb-12">
			<h3 class="text-3xl sm:text-4xl font-black text-teal-700 mb-6 text-center">
				Kandungan Omega dalam Ki-Mas
			</h3>
			<div class="space-y-4">
				{#each omegaData as omega}
					<div class="flex items-center justify-between bg-teal-50 rounded-xl p-4">
						<span class="text-xl sm:text-2xl font-black text-teal-700 flex-1">
							{omega.type}
						</span>
						<div class="flex items-center flex-1 justify-end">
							<div class="w-32 sm:w-48 bg-gray-200 rounded-full h-4 mr-4 overflow-hidden">
								<div class="{omega.color} h-full rounded-full transition-all duration-1000" style="width: {omega.value}"></div>
							</div>
							<span class="text-xl sm:text-2xl font-black text-teal-600 min-w-[4rem] text-right">
								{omega.value}
							</span>
						</div>
					</div>
				{/each}
			</div>
			<p class="text-center text-gray-600 mt-6 text-sm">
				* Berdasarkan hasil uji laboratorium
			</p>
		</div>

		<!-- Partners Section -->
		<div class="bg-teal-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-white/40">
			<h3 class="text-3xl sm:text-4xl font-black text-yellow-200 mb-6 text-center">
				🤝 Partner Kami
			</h3>
			<div class="grid sm:grid-cols-2 gap-4">
				{#each partners as partner}
					<div class="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center border-2 border-yellow-300/30">
						<p class="text-white font-bold text-lg">{partner}</p>
					</div>
				{/each}
			</div>
			<div class="mt-6 text-center">
				<p class="text-white/90 text-sm">
					Dan masih banyak mitra lainnya yang terus bertambah! 🌟
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	/* Container gambar dengan padding untuk breathing space */
	.image-container {
		position: relative;
		width: 100%;
		aspect-ratio: 1 / 1; /* Square container */
		padding: 1rem; /* Space di sekitar gambar */
		background: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Gambar produk - MAKSIMAL tanpa terhalang */
	.product-image {
		width: 100%;
		height: 100%;
		
		/* Object-fit: contain untuk show full image dengan space */
		object-fit: contain;
		object-position: center center;
		
		/* Image rendering untuk kualitas maksimal */
		image-rendering: -webkit-optimize-contrast;
		image-rendering: crisp-edges;
		
		/* Transition smooth */
		transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		
		/* GPU acceleration */
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
		transform: translateZ(0);
		will-change: transform;
	}

	/* Hover effect - zoom in smooth */
	.group:hover .product-image {
		transform: scale(1.1) translateZ(0);
	}

	/* Fade in saat gambar load */
	.product-image {
		animation: fadeInImage 0.6s ease-in;
	}

	@keyframes fadeInImage {
		from {
			opacity: 0;
			transform: scale(0.95) translateZ(0);
		}
		to {
			opacity: 1;
			transform: scale(1) translateZ(0);
		}
	}

	/* Slide up animation */
	.slide-up {
		animation: slideUp 0.8s ease-out;
	}
	
	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(50px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.delay-100 {
		animation-delay: 0.1s;
	}

	/* Responsive adjustments */
	@media (max-width: 640px) {
		.image-container {
			padding: 0.75rem; /* Padding lebih kecil di mobile */
		}
		
		.group:hover .product-image {
			transform: scale(1.08) translateZ(0); /* Zoom lebih subtle di mobile */
		}
	}

	@media (min-width: 768px) {
		.image-container {
			padding: 1.25rem; /* Padding lebih besar di tablet */
		}
	}

	@media (min-width: 1024px) {
		.image-container {
			padding: 1.5rem; /* Padding paling besar di desktop */
		}
	}

	/* High DPI screens optimization */
	@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
		.product-image {
			image-rendering: -webkit-optimize-contrast;
		}
	}

	/* Print optimization */
	@media print {
		.product-image {
			image-rendering: auto;
			-webkit-print-color-adjust: exact;
			print-color-adjust: exact;
		}
	}
</style>