<script>
	import { onMount } from "svelte";

	let mapVisible = false;
	let mapSrc = "";

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						mapVisible = true;
						mapSrc =
							"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.5349726696045!2d112.68870177525388!3d-7.943536592080688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629b671d9e1a7%3A0xc30b207dd375bca6!2sBandara%20Erfina!5e0!3m2!1sen!2sid!4v1775803166990!5m2!1sen!2sid";
						observer.disconnect();
					}
				});
			},
			{ rootMargin: "0px 0px 200px 0px" },
		);

		const mapSection = document.getElementById("map-section");
		if (mapSection) observer.observe(mapSection);
	});
</script>

<!-- Lokasi Produksi Section -->
<section
	id="map-section"
	class="section-standard relative bg-white overflow-hidden"
>
	<div class="relative z-10">
		<div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
			<!-- Information Side -->
			<div class="lg:col-span-5">
				<div class="section-header-spacing">
					<span class="section-eyebrow">Our Production Hub</span>
					<h2 class="section-title">
						Lokasi Produksi <span class="text-saccha-gold">Kami</span>
					</h2>
					<p class="text-saccha-on-surface-variant text-base md:text-lg font-medium leading-relaxed max-w-md mt-6">
						Pusat pengolahan sacha inchi terbaik kami di Malang, mengedepankan standar kualitas premium mulai dari lahan hingga ke tangan Anda.
					</p>
				</div>

				<div class="flex items-start gap-6 group mt-8">
					<div
						class="w-14 h-14 rounded-2xl bg-saccha-primary flex items-center justify-center text-white shadow-xl shadow-saccha-primary/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-500"
					>
						<span
							class="material-symbols-outlined text-2xl"
							style="font-variation-settings: 'FILL' 1;"
							>location_on</span
						>
					</div>
					<div>
						<p
							class="text-[10px] font-black uppercase tracking-widest text-saccha-primary mb-2"
						>
							Alamat Utama
						</p>
						<p
							class="text-lg font-bold text-saccha-on-surface leading-snug font-headline"
						>
							Bandara Erfina Residence Blok A - 15, Kelurahan
							Asrikaton, Kecamatan. Pakis, Kabupaten. Malang, Jawa
							Timur 65154
						</p>
						<a
							class="font-body inline-flex items-center gap-2 mt-4 text-[11px] font-black uppercase tracking-widest text-saccha-primary hover:gap-4 transition-all group/link underline decoration-saccha-primary/20 underline-offset-4"
							href="https://www.google.com/maps/search/?api=1&query=Bandara+Erfina+Residence"
							target="_blank"
						>
							Lihat di Google Maps <span
								class="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform"
								>arrow_forward</span
							>
						</a>
					</div>
				</div>
			</div>

			<!-- Google Map Side -->
			<div class="lg:col-span-7">
				<div class="relative group">
					<div
						class="absolute -inset-4 bg-saccha-primary/10 rounded-[2.5rem] blur-2xl group-hover:bg-saccha-primary/20 transition-colors duration-500"
					></div>
					<div
						class="relative bg-white p-3 rounded-[2rem] shadow-2xl shadow-saccha-primary/10 border border-saccha-primary/5"
					>
						{#if mapVisible}
							<iframe
								allowfullscreen
								class="w-full h-[450px] rounded-[1.5rem]"
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
								src={mapSrc}
								style="border:0;"
								title="Lokasi Produksi Ki-Mas"
							>
							</iframe>
						{:else}
							<div
								class="w-full h-[450px] rounded-[1.5rem] bg-saccha-surface-container flex items-center justify-center"
							>
								<div
									class="text-saccha-primary flex flex-col items-center gap-3"
								>
									<span
										class="material-symbols-outlined text-4xl animate-pulse"
										>map</span
									>
									<span
										class="font-body text-sm font-bold uppercase tracking-widest"
										>Memuat Peta...</span
									>
								</div>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Decorative blobs -->
	<div
		class="absolute top-1/4 -right-24 w-96 h-96 bg-saccha-primary-container rounded-full blur-[100px] pointer-events-none opacity-40"
	></div>
</section>

<style>
	.material-symbols-outlined {
		font-variation-settings:
			"FILL" 0,
			"wght" 500,
			"GRAD" 0,
			"opsz" 24;
	}
</style>
