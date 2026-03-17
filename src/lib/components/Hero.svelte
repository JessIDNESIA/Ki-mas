<script>
	import { onMount } from "svelte";

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<!-- Hero Section -->
<section
	class="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden bg-radial-light"
>
	<!-- Decorative Elements -->
	<div
		class="absolute top-20 left-10 w-12 h-12 bg-brand-primary/20 rounded-full blur-2xl floating-element"
	></div>
	<div
		class="absolute bottom-40 right-1/2 w-24 h-24 bg-brand-primary/10 rounded-full blur-3xl floating-element-delay"
	></div>

	<div
		class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
	>
		<!-- Content Left -->
		<div class="flex flex-col space-y-8" class:fade-in={mounted}>
			<!-- Brand Identity -->
			<div>
				<div class="mb-4">
					<img
						src="/images/ki-mas-logo.png"
						alt="Ki-Mas"
						class="w-[200px] md:w-[300px] h-auto drop-shadow-xl"
					/>
				</div>
				<h2
					class="text-3xl md:text-5xl font-extrabold text-brand-dark leading-tight uppercase tracking-tight"
				>
					Sudah Saatnya Ganti Camilan Dengan Makan Sehat Kacang Sancha
					Inchi
				</h2>
			</div>

			<!-- Description -->
			<p class="text-lg text-slate-600 leading-relaxed max-w-xl">
				Camilan superfood premium kaya akan <span
					class="font-bold text-brand-dark border-b-2 border-brand-primary"
					>Omega 3, 6, dan 9</span
				>. Temukan kelezatan alami yang mendukung kesehatan jantung dan
				kecerdasan otak Anda dalam setiap butiran renyah.
			</p>

			<!-- CTA Buttons -->
			<div class="flex flex-wrap gap-4 pt-4">
				<a
					class="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-brand-dark font-bold rounded-xl shadow-lg shadow-brand-primary/30 hover:scale-105 transition-transform duration-300"
					href="#produk"
				>
					Pesan Sekarang
					<svg
						class="h-5 w-5 ml-2"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						></path>
					</svg>
				</a>
				<a
					class="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-100 text-brand-dark font-bold rounded-xl hover:bg-slate-50 transition-colors duration-300 shadow-sm"
					href="#menu"
				>
					Lihat Menu
				</a>
			</div>
		</div>

		<!-- Content Right -->
		<div
			class="relative flex justify-center lg:justify-end"
			class:fade-in={mounted}
		>
			<!-- Main Image Container -->
			<div
				class="relative z-10 w-full max-w-[600px] aspect-[14/15] overflow-hidden rounded-[40px] shadow-2xl ring-8 ring-white"
			>
				<img
					alt="Sancha Inchi Plant"
					class="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
					src="https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?q=80&w=1470&auto=format&fit=crop"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	/* Background gradient from top right to bottom left */
	.bg-radial-light {
		background: radial-gradient(
			circle at top right,
			#f0fff4 0%,
			#ffffff 100%
		);
	}

	/* Animation for floating leaves */
	@keyframes float {
		0% {
			transform: translateY(0px) rotate(0deg);
		}
		50% {
			transform: translateY(-20px) rotate(10deg);
		}
		100% {
			transform: translateY(0px) rotate(0deg);
		}
	}

	.floating-element {
		animation: float 6s ease-in-out infinite;
	}

	.floating-element-delay {
		animation: float 8s ease-in-out infinite;
		animation-delay: 1s;
	}

	.fade-in {
		animation: fadeIn 1s ease-out forwards;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
