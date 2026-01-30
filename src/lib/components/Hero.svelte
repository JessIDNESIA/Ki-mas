<script>
	import { onMount } from 'svelte';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
</script>

<section class="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
	<!-- Background gradient dengan efek daun -->
	<div class="absolute inset-0 bg-gradient-to-br from-teal-400 via-emerald-400 to-green-500">
		<!-- Pattern daun blur -->
		<div class="absolute inset-0 opacity-30">
			<div class="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl animate-pulse"></div>
			<div class="absolute top-40 right-20 w-40 h-40 bg-white rounded-full blur-3xl opacity-40"></div>
			<div class="absolute bottom-32 left-1/4 w-36 h-36 bg-teal-200 rounded-full blur-3xl animate-pulse delay-100"></div>
			<div class="absolute bottom-20 right-1/3 w-28 h-28 bg-white rounded-full blur-3xl opacity-30"></div>
			<div class="absolute top-1/2 left-1/2 w-48 h-48 bg-emerald-300 rounded-full blur-3xl opacity-20 animate-pulse delay-200"></div>
		</div>
	</div>
	
	<!-- Content -->
	<div class="relative z-10 text-center max-w-4xl mx-auto" class:fade-in={mounted}>
		<!-- Logo Ki-Mas -->
		<h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4 md:mb-6 text-amber-100 drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]" 
			style="text-shadow: 3px 3px 0px #0d9488, -3px -3px 0px #0d9488, 3px -3px 0px #0d9488, -3px 3px 0px #0d9488, 0px 3px 0px #0d9488, 0px -3px 0px #0d9488, 3px 0px 0px #0d9488, -3px 0px 0px #0d9488; font-family: Impact, sans-serif;">
			Ki-Mas
		</h1>

		<!-- Brand tagline -->
		<p class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 drop-shadow-lg">
			Lezat dan Sehat
		</p>
		
		<!-- Slogan utama -->
		<div class="bg-white/15 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border-2 border-white/30 mb-6 md:mb-8">
			<p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed tracking-wide">
				SUDAH SAATNYA GANTI CAMILAN<br/>
				DENGAN MAKAN SEHAT<br/>
				<span class="text-yellow-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">KACANG SACHA INCHI</span>
			</p>
		</div>

		<!-- Omega highlight -->
		<div class="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 rounded-full shadow-2xl">
			<p class="text-2xl sm:text-3xl md:text-4xl font-black text-teal-900">
				Kaya Omega 3, 6, 9
			</p>
		</div>

		<!-- Scroll indicator -->
		<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
			<svg class="w-8 h-8 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
			</svg>
		</div>
	</div>
</section>

<style>
	.fade-in {
		animation: fadeIn 1.2s ease-in;
	}
	
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.delay-100 {
		animation-delay: 0.1s;
	}

	.delay-200 {
		animation-delay: 0.2s;
	}
</style>