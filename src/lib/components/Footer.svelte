<script>
	import { onMount } from "svelte";

	const contactInfo = {
		phones: ["0838 4643 5699", "0812 3361 6267"],
		email: "ghozydoang2009@gmail.com",
		instagram: "kimas.sachainchi",
		address: {
			street: "Bandara Erfina Residence Blok A - 15",
			kelurahan: "Kelurahan Asrikaton",
			kecamatan: "Kec. Pakis",
			kabupaten: "Kab. Malang",
		},
	};

	const certifications = [
		{
			label: "P-IRT",
			numbers: ["2113507013848-30"],
			icon: "verified_user",
			color: "text-saccha-primary",
			bg: "bg-saccha-primary/10",
		},
		{
			label: "NIB",
			numbers: ["2410250037506"],
			icon: "domain",
			color: "text-saccha-primary",
			bg: "bg-saccha-primary/10",
		},
		{
			label: "Halal",
			numbers: ["ID 35410033732041125"],
			icon: "workspace_premium",
			color: "text-[#EAB308]",
			bg: "bg-[#EAB308]/10",
			isHalal: true,
		},
		{
			label: "Uji Lab",
			text: "SIB (PT. Saraswati Indo Genetech) Bogor",
			icon: "biotech",
			isTested: true,
		},
	];

	const currentYear = new Date().getFullYear();

	// Form State
	let formName = "";
	let formEmail = "";
	let formPhone = "";
	let formFocus = "";
	let formMessage = "";

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
	class="py-24 bg-saccha-surface-container-lowest relative overflow-hidden"
>
	<div class="max-w-7xl mx-auto px-8 relative z-10">
		<div class="grid lg:grid-cols-12 gap-16 items-center">
			<!-- Information Side -->
			<div class="lg:col-span-5">
				<div
					class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saccha-primary/10 text-saccha-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8"
				>
					<span
						class="w-1.5 h-1.5 rounded-full bg-saccha-primary animate-pulse"
					></span>
					Our Production Hub
				</div>
				<h2
					class="font-headline text-5xl lg:text-6xl font-black text-saccha-primary leading-[1.1] mb-8 uppercase tracking-tighter"
				>
					Lokasi Produksi Kami
				</h2>
				<p
					class="font-body text-lg text-saccha-on-surface-variant leading-relaxed mb-10 max-w-md"
				>
					Kunjungi pusat pengolahan sacha inchi terbaik kami di
					Malang. Kami mengedepankan standar kualitas premium mulai
					dari lahan hingga ke tangan Anda.
				</p>

				<div class="flex items-start gap-6 group">
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
							class="font-body text-[11px] font-black uppercase tracking-widest text-saccha-primary mb-2"
						>
							Alamat Utama
						</p>
						<p
							class="text-lg font-bold text-saccha-on-background leading-snug font-headline"
						>
							Bandara Erfina Residence Blok A - 15, Kelurahan
							Asrikaton, Kecamatan. Pakis, Kabupaten. Malang, Jawa
							Timur 65154
						</p>
						<a
							class="font-body inline-flex items-center gap-2 mt-4 text-[11px] font-black uppercase tracking-widest text-saccha-primary hover:gap-4 transition-all group/link"
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

<!-- Form Permintaan Produk -->
<section class="py-24 relative overflow-hidden bg-saccha-surface-container-low">
	<div class="max-w-4xl mx-auto px-6 relative z-10">
		<div
			class="glass-card bg-white/70 rounded-[2rem] p-8 md:p-16 shadow-2xl shadow-saccha-primary/10 relative overflow-hidden"
		>
			<div
				class="absolute top-0 left-0 w-2 h-full bg-saccha-primary"
			></div>
			<h2
				class="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter text-saccha-primary mb-4 text-center"
			>
				FORM PERMINTAAN KAMI
			</h2>
			<p
				class="font-body text-center text-saccha-on-surface-variant mb-12 font-medium"
			>
				Lengkapi detail Anda dan kami akan segera menghubungi.
			</p>

			<form
				action="https://formspree.io/f/mjgpnkvr"
				method="POST"
				class="space-y-8"
			>
				<input
					type="hidden"
					name="_subject"
					value="Permintaan Produk Ki-Mas Baru!"
				/>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<!-- Name Field -->
					<div class="space-y-2">
						<label
							for="form-name"
							class="font-body font-bold text-xs uppercase tracking-widest text-saccha-primary block px-1"
							>Full Name</label
						>
						<div class="relative group">
							<span
								class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-saccha-outline group-focus-within:text-saccha-primary transition-colors"
								>person</span
							>
							<input
								name="name"
								id="form-name"
								bind:value={formName}
								required
								class="font-body w-full pl-12 pr-4 py-4 bg-white/50 border-none rounded-xl focus:ring-2 focus:ring-saccha-primary/20 focus:bg-white transition-all text-saccha-on-surface"
								placeholder="Masukkan nama lengkap"
								type="text"
							/>
						</div>
					</div>
					<!-- Email Field -->
					<div class="space-y-2">
						<label
							for="form-email"
							class="font-body font-bold text-xs uppercase tracking-widest text-saccha-primary block px-1"
							>Email Address</label
						>
						<div class="relative group">
							<span
								class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-saccha-outline group-focus-within:text-saccha-primary transition-colors"
								>mail</span
							>
							<input
								name="email"
								id="form-email"
								bind:value={formEmail}
								required
								class="font-body w-full pl-12 pr-4 py-4 bg-white/50 border-none rounded-xl focus:ring-2 focus:ring-saccha-primary/20 focus:bg-white transition-all text-saccha-on-surface"
								placeholder="example@gmail.com"
								type="email"
							/>
						</div>
					</div>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<!-- Phone Field -->
					<div class="space-y-2">
						<label
							for="form-phone"
							class="font-body font-bold text-xs uppercase tracking-widest text-saccha-primary block px-1"
							>Phone Number</label
						>
						<div class="relative group">
							<span
								class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-saccha-outline group-focus-within:text-saccha-primary transition-colors"
								>call</span
							>
							<input
								name="phone"
								id="form-phone"
								bind:value={formPhone}
								required
								class="font-body w-full pl-12 pr-4 py-4 bg-white/50 border-none rounded-xl focus:ring-2 focus:ring-saccha-primary/20 focus:bg-white transition-all text-saccha-on-surface"
								placeholder="0812 ..."
								type="tel"
								pattern="[0-9]*"
								on:input={(e) =>
									(formPhone = formPhone.replace(
										/[^0-9]/g,
										"",
									))}
							/>
						</div>
					</div>
					<!-- Variant Context (Select Dropdown) -->
					<div class="space-y-2">
						<label
							for="form-focus"
							class="font-body font-bold text-xs uppercase tracking-widest text-saccha-primary block px-1"
							>Selected Focus</label
						>
						<div class="relative group">
							<span
								class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-saccha-outline group-focus-within:text-saccha-primary transition-colors pointer-events-none"
								>inventory_2</span
							>
							<select
								name="focus"
								id="form-focus"
								bind:value={formFocus}
								required
								class="font-body w-full pl-12 pr-12 py-4 bg-white/50 border-none rounded-xl focus:ring-2 focus:ring-saccha-primary/20 focus:bg-white transition-all text-saccha-on-surface appearance-none cursor-pointer"
							>
								<option value="" disabled
									>Pilih variasi produk...</option
								>
								<option value="Kacang Panggang Sacha Inchi"
									>Kacang Panggang Sacha Inchi</option
								>
								<option value="Kacang Telor Sacha Inchi"
									>Kacang Telor Sacha Inchi</option
								>
								<option value="Kacang Disco Sacha Inchi"
									>Kacang Disco Sacha Inchi</option
								>
								<option value="Semua Varian (Kemitraan/Grosir)"
									>Semua Varian (Kemitraan/Grosir)</option
								>
							</select>
							<span
								class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-saccha-outline pointer-events-none group-focus-within:text-saccha-primary transition-colors"
								>expand_more</span
							>
						</div>
					</div>
				</div>
				<!-- Message Field -->
				<div class="space-y-2">
					<label
						for="form-message"
						class="font-body font-bold text-xs uppercase tracking-widest text-saccha-primary block px-1"
						>Message / Quantity Detail</label
					>
					<div class="relative group">
						<span
							class="material-symbols-outlined absolute left-4 top-4 text-saccha-outline group-focus-within:text-saccha-primary transition-colors"
							>chat_bubble</span
						>
						<textarea
							name="message"
							id="form-message"
							bind:value={formMessage}
							required
							class="font-body w-full pl-12 pr-4 py-4 bg-white/50 border-none rounded-xl focus:ring-2 focus:ring-saccha-primary/20 focus:bg-white transition-all text-saccha-on-surface"
							placeholder="Ceritakan kebutuhan Anda (misal: jumlah pesanan, lokasi pengiriman)..."
							rows="4"
						></textarea>
					</div>
				</div>
				<button
					class="font-body w-full py-4 bg-saccha-primary text-white rounded-full font-black text-xl tracking-tighter uppercase flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-saccha-primary/20"
					type="submit"
				>
					KIRIM SEKARANG
					<span class="material-symbols-outlined">arrow_forward</span>
				</button>
			</form>
		</div>
	</div>
</section>

<footer
	class="relative living-canvas bg-saccha-background pt-32 pb-12 overflow-hidden border-t border-saccha-primary/5 selection:bg-saccha-primary/10 selection:text-saccha-primary"
>
	<div class="max-w-7xl mx-auto px-8 relative z-10">
		<div
			class="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20 items-start mb-24"
		>
			<!-- Left 1/3: Brand Identity -->
			<div class="space-y-12">
				<div>
					<div
						class="text-6xl font-black text-saccha-primary tracking-tighter mb-2 font-headline leading-none"
					>
						KI-MAS<br />ORGANIC
					</div>
					<p
						class="text-[10px] font-black tracking-[0.5em] uppercase text-saccha-primary/60 mb-12"
					>
						Indo Marina Superfood
					</p>

					<div class="space-y-10">
						<p
							class="font-body text-lg font-medium text-saccha-on-surface-variant leading-relaxed"
						>
							Produsen Kacang Sacha Inchi berkualitas tinggi. <span
								class="text-saccha-primary font-extrabold"
								>Lezat dan Sehat.</span
							>
						</p>
						<div class="flex gap-3">
							<div
								class="px-5 py-2.5 rounded-full bg-white border border-saccha-primary/10 shadow-sm flex items-center gap-2"
							>
								<span
									class="material-symbols-outlined text-saccha-primary text-lg"
									style="font-variation-settings: 'FILL' 1;"
									>verified</span
								>
								<span
									class="font-body text-[10px] font-black uppercase tracking-wider text-saccha-primary"
									>BPOM</span
								>
							</div>
							<div
								class="px-5 py-2.5 rounded-full bg-white border border-saccha-primary/10 shadow-sm flex items-center gap-2"
							>
								<span
									class="material-symbols-outlined text-saccha-primary text-lg"
									style="font-variation-settings: 'FILL' 1;"
									>workspace_premium</span
								>
								<span
									class="font-body text-[10px] font-black uppercase tracking-wider text-saccha-primary"
									>HALAL</span
								>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Middle 1/3: Strategic Contacts -->
			<div
				class="space-y-12 lg:px-12 border-x-0 lg:border-x border-saccha-primary/10"
			>
				<div class="space-y-4">
					<h4
						class="font-headline text-xs font-black tracking-[0.2em] text-saccha-primary uppercase"
					>
						Hubungi Kami
					</h4>
					<div
						class="w-12 h-1 bg-saccha-primary/20 rounded-full"
					></div>
				</div>

				<div class="space-y-10">
					<!-- Phone -->
					<div class="flex items-start gap-6 group">
						<div
							class="w-14 h-14 rounded-full bg-saccha-primary flex items-center justify-center text-white shadow-xl shadow-saccha-primary/20 group-hover:scale-110 transition-all duration-500 flex-shrink-0"
						>
							<span class="material-symbols-outlined text-2xl"
								>call</span
							>
						</div>
						<div>
							<p
								class="font-body text-[10px] font-black uppercase tracking-widest text-saccha-primary/60 mb-1"
							>
								WhatsApp
							</p>
							{#each contactInfo.phones as phone}
								<!-- Format phone to start with 62 for WhatsApp link -->
								<a
									href="https://wa.me/62{phone
										.replace(/\s/g, '')
										.substring(1)}"
									target="_blank"
									rel="noopener noreferrer"
									class="block text-xl font-extrabold text-saccha-on-background hover:text-saccha-primary transition-colors font-headline mb-0.5"
								>
									{phone}
								</a>
							{/each}
						</div>
					</div>

					<!-- Email -->
					<a
						class="flex items-center gap-6 group"
						href="https://mail.google.com/mail/?view=cm&fs=1&to={contactInfo.email}&su=Permintaan%20Pembelian%20Produk%20Ki-Mas&body=Halo%20Tim%20Ki-Mas%20Organic%2C%0A%0ASaya%20tertarik%20untuk%20berdiskusi%20atau%20melakukan%20pembelian%20produk%20Sacha%20Inchi.%20Mohon%20informasi%20lebih%20lanjut%20terkait%20stok%20dan%20harga.%0A%0ATerima%20kasih."
						target="_blank"
						rel="noopener noreferrer"
					>
						<div
							class="w-14 h-14 rounded-full bg-saccha-primary flex items-center justify-center text-white shadow-xl shadow-saccha-primary/20 group-hover:scale-110 transition-all duration-500 flex-shrink-0"
						>
							<span class="material-symbols-outlined text-2xl"
								>mail</span
							>
						</div>
						<div class="min-w-0 break-all">
							<p
								class="font-body text-[10px] font-black uppercase tracking-widest text-saccha-primary/60 mb-1"
							>
								Email Resmi
							</p>
							<p
								class="text-xl font-extrabold text-saccha-on-background group-hover:text-saccha-primary transition-colors font-headline"
							>
								{contactInfo.email}
							</p>
						</div>
					</a>

					<!-- Original Social Icons retained from previous implementation -->
					<div class="pt-10">
						<p
							class="font-body text-[10px] font-black uppercase tracking-widest text-saccha-primary/60 mb-6"
						>
							Sosial Media
						</p>
						<div class="flex gap-4">
							<a
								href="https://wa.me/62{contactInfo.phones[0]
									.replace(/\s/g, '')
									.substring(1)}"
								target="_blank"
								rel="noopener noreferrer"
								class="w-12 h-12 rounded-2xl bg-white shadow-sm border border-saccha-primary/10 flex items-center justify-center text-[#25D366] hover:scale-110 hover:shadow-lg transition-all duration-300"
							>
								<!-- WA Original Logo -->
								<svg
									class="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
									/>
								</svg>
							</a>
							<a
								href="https://instagram.com/{contactInfo.instagram}"
								target="_blank"
								rel="noopener noreferrer"
								class="w-12 h-12 rounded-2xl bg-white shadow-sm border border-saccha-primary/10 flex items-center justify-center text-[#E1306C] hover:scale-110 hover:shadow-lg transition-all duration-300"
							>
								<!-- Instagram Original Logo -->
								<svg
									class="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
									/>
								</svg>
							</a>
							<a
								href="https://mail.google.com/mail/?view=cm&fs=1&to={contactInfo.email}&su=Permintaan%20Pembelian%20Produk%20Ki-Mas&body=Halo%20Tim%20Ki-Mas%20Organic%2C%0A%0ASaya%20tertarik%20untuk%20berdiskusi%20atau%20melakukan%20pembelian%20produk%20Sacha%20Inchi.%20Mohon%20informasi%20lebih%20lanjut%20terkait%20stok%20dan%20harga.%0A%0ATerima%20kasih."
								target="_blank"
								rel="noopener noreferrer"
								class="w-12 h-12 rounded-2xl bg-white shadow-sm border border-saccha-primary/10 flex items-center justify-center text-[#EA4335] hover:scale-110 hover:shadow-lg transition-all duration-300"
							>
								<!-- Email Original Logo -->
								<svg
									class="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Right 1/3: Certifications -->
			<div class="space-y-12">
				<div class="space-y-4">
					<h4
						class="font-headline text-xs font-black tracking-[0.2em] text-saccha-primary uppercase"
					>
						Sertifikasi
					</h4>
					<div
						class="w-12 h-1 bg-saccha-primary/20 rounded-full"
					></div>
				</div>
				<div class="grid grid-cols-2 gap-4">
					{#each certifications as cert}
						<!-- Lab Test has distinct look in the new design -->
						{#if cert.isTested}
							<div
								class="bg-saccha-primary p-5 rounded-2xl shadow-lg shadow-saccha-primary/20 hover:-translate-y-2 transition-all duration-500 text-white"
							>
								<div
									class="flex justify-between items-start mb-4"
								>
									<div
										class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white"
									>
										<span
											class="material-symbols-outlined text-xl"
											style="font-variation-settings: 'FILL' 1;"
											>{cert.icon}</span
										>
									</div>
									<span
										class="font-body text-[8px] font-black bg-white/20 text-white px-2 py-0.5 rounded-full uppercase"
										>TESTED</span
									>
								</div>
								<p
									class="font-body text-[11px] font-black text-white uppercase"
								>
									{cert.label}
								</p>
								<p
									class="font-body text-[9px] text-white/80 mt-1"
								>
									{cert.text}
								</p>
							</div>
						{:else}
							<div
								class="glass-card p-5 rounded-2xl shadow-sm hover:-translate-y-2 transition-all duration-500 border border-saccha-primary/10"
							>
								<div
									class="flex justify-between items-start mb-4"
								>
									<div
										class="w-8 h-8 rounded-lg {cert.bg} flex items-center justify-center {cert.color}"
									>
										<span
											class="material-symbols-outlined text-xl"
											style="font-variation-settings: 'FILL' 1;"
											>{cert.icon}</span
										>
									</div>
									<span
										class="font-body text-[8px] font-black {cert.bg} {cert.color} px-2 py-0.5 rounded-full uppercase"
										>{cert.label}</span
									>
								</div>
								{#each cert.numbers || [] as num}
									<p
										class="font-body text-[11px] font-black text-saccha-on-background break-words"
										title={num}
									>
										{num}
									</p>
								{/each}
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>

		<!-- Navigation Links Sub-Footer -->
		<div
			class="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-t border-saccha-primary/10"
		>
			<div>
				<h5
					class="font-body text-[10px] font-black uppercase tracking-widest text-saccha-primary/60 mb-8"
				>
					Navigasi
				</h5>
				<ul class="space-y-4">
					<li>
						<a
							class="font-body text-sm font-bold text-saccha-on-background hover:text-saccha-primary transition-colors flex items-center gap-3"
							href="#home"
							><span
								class="w-1 h-1 rounded-full bg-saccha-primary/40"
							></span> Beranda</a
						>
					</li>
					<li>
						<a
							class="font-body text-sm font-bold text-saccha-on-background hover:text-saccha-primary transition-colors flex items-center gap-3"
							href="#products"
							><span
								class="w-1 h-1 rounded-full bg-saccha-primary/40"
							></span> Katalog Produk</a
						>
					</li>
					<li>
						<a
							class="font-body text-sm font-bold text-saccha-on-background hover:text-saccha-primary transition-colors flex items-center gap-3"
							href="#benefits"
							><span
								class="w-1 h-1 rounded-full bg-saccha-primary/40"
							></span> Manfaat Sacha Inchi</a
						>
					</li>
				</ul>
			</div>
			<div>
				<h5
					class="font-body text-[10px] font-black uppercase tracking-widest text-saccha-primary/60 mb-8"
				>
					Legalitas
				</h5>
				<ul class="space-y-4">
					<li>
						<a
							class="font-body text-sm font-bold text-saccha-on-background hover:text-saccha-primary transition-colors flex items-center gap-3"
							href="/"
							><span
								class="w-1 h-1 rounded-full bg-saccha-primary/40"
							></span> Kebijakan Privasi</a
						>
					</li>
					<li>
						<a
							class="font-body text-sm font-bold text-saccha-on-background hover:text-saccha-primary transition-colors flex items-center gap-3"
							href="/"
							><span
								class="w-1 h-1 rounded-full bg-saccha-primary/40"
							></span> Syarat & Ketentuan</a
						>
					</li>
				</ul>
			</div>
			<div class="md:col-span-2 flex md:justify-end items-center">
				<div
					class="group relative px-10 py-6 rounded-[2rem] bg-saccha-primary text-white shadow-2xl shadow-saccha-primary/20 overflow-hidden"
				>
					<div
						class="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
					></div>
					<div class="relative flex items-center gap-4">
						<span
							class="material-symbols-outlined text-3xl"
							style="font-variation-settings: 'FILL' 1;">eco</span
						>
						<div class="text-left">
							<span
								class="font-body block text-[9px] font-black tracking-[0.2em] uppercase opacity-70 mb-1"
								>Our Commitment</span
							>
							<span
								class="block text-sm font-black tracking-tight font-headline"
								>Pertanian Berkelanjutan</span
							>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Copyright Bar -->
		<div
			class="border-t border-saccha-primary/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-10"
		>
			<p
				class="font-body text-[10px] font-black text-saccha-on-background/40 tracking-[0.1em] uppercase"
			>
				© {currentYear} KI-MAS ORGANIC. ALL RIGHTS RESERVED. MALANG, INDONESIA.
			</p>

			<div class="flex items-center gap-8">
				<p
					class="font-body text-[10px] font-black tracking-[0.2em] uppercase text-saccha-primary/60 hidden sm:block"
				>
					Pure & Sustainably Sourced
				</p>
				<button
					class="font-body group px-6 py-3 rounded-full border border-saccha-primary/20 bg-white text-saccha-primary hover:bg-saccha-primary hover:text-white transition-all duration-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-3 shadow-sm hover:shadow-xl hover:shadow-saccha-primary/20"
					on:click={() =>
						window.scrollTo({ top: 0, behavior: "smooth" })}
				>
					Back to Top
					<span
						class="material-symbols-outlined text-lg group-hover:-translate-y-1 transition-transform"
						>arrow_upward</span
					>
				</button>
			</div>
		</div>
	</div>

	<!-- Background Decorative Elements -->
	<div
		class="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-saccha-primary-container rounded-full blur-[120px] pointer-events-none opacity-50"
	></div>
	<div
		class="absolute -top-32 right-0 w-96 h-96 bg-saccha-primary-container rounded-full blur-[100px] pointer-events-none opacity-20"
	></div>
</footer>

<style>
	.material-symbols-outlined {
		font-variation-settings:
			"FILL" 0,
			"wght" 500,
			"GRAD" 0,
			"opsz" 24;
	}
	.glass-card {
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid rgba(26, 67, 28, 0.08);
	}
	.living-canvas {
		background-color: #f0f9ed; /* saccha-background */
		background-image: radial-gradient(
				circle at 10% 20%,
				rgba(157, 241, 151, 0.15) 0%,
				transparent 40%
			),
			radial-gradient(
				circle at 90% 80%,
				rgba(157, 241, 151, 0.2) 0%,
				transparent 40%
			);
	}
</style>
