<script>
	import Hero from '$lib/components/Hero.svelte';
	import ProductDescription from '$lib/components/ProductDescription.svelte';
	import GalleryTimeline from '$lib/components/GalleryTimeline.svelte';
	import Benefits from '$lib/components/Benefits.svelte';
	import ProductShowcase from '$lib/components/ProductShowcase.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Ki-Mas - Kacang Sacha Inchi Sehat & Lezat | Indo Marina Superfood</title>
	<meta name="description" content="Ki-Mas Sacha Inchi - Camilan sehat kaya Omega 3, 6, 9 dari hutan Amazon Peru. Superfood untuk kesehatan jantung, otak, dan keluarga Indonesia. Tersedia 3 varian: Panggang, Telor, dan Disco." />
	<meta name="keywords" content="Ki-Mas, Sacha Inchi, kacang sehat, omega 3, superfood, camilan sehat, Indo Merina Superfood, PIRT, Halal" />
	<meta name="author" content="Indo Marina Superfood" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Ki-Mas - Kacang Sacha Inchi Sehat & Lezat" />
	<meta property="og:description" content="Camilan sehat kaya Omega 3, 6, 9 dari hutan Amazon Peru. Superfood untuk kesehatan keluarga Indonesia." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="Ki-Mas - Kacang Sacha Inchi Sehat & Lezat" />
	<meta property="twitter:description" content="Camilan sehat kaya Omega 3, 6, 9 dari hutan Amazon Peru." />
</svelte:head>

<div class="min-h-screen bg-white">
	<Hero />
	<ProductDescription />
	<GalleryTimeline />
	<Benefits />
	<ProductShowcase />
	<Footer />
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(html) {
		scroll-behavior: smooth;
	}
</style>