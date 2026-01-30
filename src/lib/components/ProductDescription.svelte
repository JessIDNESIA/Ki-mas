<script>
	let visible = false;
	
	import { onMount } from 'svelte';
	
	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					visible = true;
				}
			});
		});
		
		const element = document.querySelector('#product-desc');
		if (element) observer.observe(element);
		
		return () => observer.disconnect();
	});
</script>

<section id="product-desc" class="relative py-16 md:py-24 px-4 bg-gradient-to-b from-green-500 to-teal-500">
	<!-- Decorative background -->
	<div class="absolute inset-0 opacity-10">
		<div class="absolute top-20 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
		<div class="absolute bottom-20 left-10 w-48 h-48 bg-yellow-200 rounded-full blur-3xl"></div>
	</div>

	<div class="relative z-10 max-w-5xl mx-auto" class:slide-up={visible}>
		<!-- Title -->
		<div class="text-center mb-10 md:mb-12">
			<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
				Apa itu <span class="text-yellow-200">Sacha Inchi</span>?
			</h2>
			<div class="w-32 h-2 bg-yellow-400 mx-auto rounded-full"></div>
		</div>

		<!-- Description card -->
		<div class="bg-teal-700/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border-4 border-white/40">
			<p class="text-base sm:text-lg md:text-xl text-white leading-relaxed text-center">
				<span class="font-bold text-yellow-200">Kacang Sacha Inchi</span> adalah kacang bintang dari tanaman merambat 
				yang berasal dari <span class="font-semibold">hutan Amazon Peru Amerika Selatan</span>, 
				dikenal juga kacang <span class="font-bold text-yellow-200">INCA (Plukenetia Volubilis)</span> yang memiliki 
				banyak kandungan gizi <span class="text-2xl font-black text-yellow-300">SUPERFOOD</span> dan merupakan 
				<span class="font-semibold">sumber protein</span> yang kaya asam amino esensial seperti:
			</p>
			
			<!-- Omega info -->
			<div class="grid sm:grid-cols-3 gap-4 mt-8">
				<div class="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center border-2 border-yellow-300/50">
					<p class="text-yellow-200 font-black text-2xl mb-1">Omega 3</p>
					<p class="text-white text-sm">(asam linolenat)</p>
				</div>
				<div class="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center border-2 border-yellow-300/50">
					<p class="text-yellow-200 font-black text-2xl mb-1">Omega 6</p>
					<p class="text-white text-sm">(asam linoleat)</p>
				</div>
				<div class="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center border-2 border-yellow-300/50">
					<p class="text-yellow-200 font-black text-2xl mb-1">Omega 9</p>
					<p class="text-white text-sm">(asam oleat)</p>
				</div>
			</div>

			<!-- Additional info -->
			<div class="mt-6 text-center">
				<p class="text-white text-lg font-semibold">
					+ <span class="text-yellow-200 font-bold">Antioksidan</span> tinggi
				</p>
			</div>
		</div>

		<!-- Fun fact -->
		<div class="mt-8 text-center">
			<div class="inline-block bg-yellow-400 px-6 py-3 rounded-full shadow-lg">
				<p class="text-teal-900 font-bold text-lg">
					🌟 Dipercaya suku Inca sejak ribuan tahun lalu!
				</p>
			</div>
		</div>
	</div>
</section>

<style>
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
</style>