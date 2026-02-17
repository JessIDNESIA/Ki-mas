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
		
		const element = document.querySelector('#benefits');
		if (element) observer.observe(element);
		
		return () => observer.disconnect();
	});

	const benefits = [
		{ icon: '❤️', title: 'Menurunkan kolesterol', desc: 'Menjaga kadar kolesterol tetap sehat' },
		{ icon: '🩺', title: 'Mengontrol diabetes', desc: 'Membantu stabilkan gula darah' },
		{ icon: '💚', title: 'Menjaga kesehatan jantung', desc: 'Omega 3 untuk jantung kuat' },
		{ icon: '🦴', title: 'Menguatkan persendian', desc: 'Melindungi dan memperkuat sendi' },
		{ icon: '⚖️', title: 'Baik untuk diet', desc: 'Camilan sehat rendah kalori' },
		{ icon: '🧠', title: 'Perkembangan otak anak', desc: 'DHA untuk kecerdasan anak' },
		{ icon: '🚽', title: 'Melancarkan BAB', desc: 'Kaya serat alami' },
		{ icon: '🦴', title: 'Merawat kesehatan tulang', desc: 'Kalsium dan mineral penting' },
		{ icon: '✨', title: 'Dan masih banyak lagi!', desc: 'Manfaat luar biasa lainnya' }
	];
</script>

<section id="benefits" class="relative py-16 md:py-24 px-4 bg-gradient-to-b from-teal-500 to-emerald-600">
	<!-- Decorative elements -->
	<div class="absolute inset-0 opacity-10">
		<div class="absolute top-10 left-1/4 w-48 h-48 bg-yellow-200 rounded-full blur-3xl"></div>
		<div class="absolute bottom-20 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
	</div>

	<div class="relative z-10 max-w-6xl mx-auto" class:fade-in-up={visible}>
		<!-- Title -->
		<div class="text-center mb-12 md:mb-16">
			<h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
				Manfaat Produk <span class="text-yellow-200">Ki-Mas</span>
			</h2>
			<p class="text-xl sm:text-2xl text-white/90 font-semibold">
				Untuk Kesehatan Anda Sekeluarga
			</p>
			<div class="w-32 h-2 bg-yellow-400 mx-auto rounded-full mt-4"></div>
		</div>

		<!-- Benefits Grid -->
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
			{#each benefits as benefit, i}
				<div 
					class="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-4 border-teal-100"
					style="animation-delay: {i * 0.1}s"
					class:benefit-card={visible}
				>
					<div class="text-5xl mb-4 text-center">{benefit.icon}</div>
					<h3 class="text-xl font-black text-teal-700 mb-2 text-center">
						{benefit.title}
					</h3>
					<p class="text-gray-600 text-center text-sm">
						{benefit.desc}
					</p>
				</div>
			{/each}
		</div>

		<!-- Call to action -->
		<div class="mt-12 md:mt-16 text-center">
			<div class="bg-yellow-400 inline-block px-8 py-4 rounded-full shadow-2xl">
				<p class="text-2xl sm:text-3xl font-black text-teal-900">
					🌟 Satu Kacang, Banyak Manfaat!
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.fade-in-up {
		animation: fadeInUp 0.8s ease-out;
	}

	.benefit-card {
		animation: popIn 0.6s ease-out backwards;
	}
	
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes popIn {
		from {
			opacity: 0;
			transform: scale(0.8) translateY(20px);
		}
		to {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}
</style>