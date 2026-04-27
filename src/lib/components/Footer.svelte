<script>
	const contactInfo = {
		phones: ["0838 4643 5699", "0812 3361 6267"],
		email: "susiyantoeko45@gmail.com",
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
</script>

<footer
	id="footer"
	class="section-standard relative bg-saccha-surface-container-low border-t border-saccha-primary/5 overflow-hidden"
>
	<div class="relative z-10">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
			<!-- Left column: Brand -->
			<div class="lg:col-span-4 space-y-6">
				<div class="-ml-2">
					<img
						src="/images/ki-mas-logo.png"
						alt="Ki-Mas Organic"
						class="h-20 md:h-24 object-contain object-left scale-[1.1] origin-left"
					/>
				</div>
				<p class="text-saccha-on-surface-variant text-base font-medium leading-relaxed max-w-sm">
					Indo Marina Superfood — Produsen Kacang Sacha Inchi berkualitas tinggi dari Malang. Warisan alam untuk kesehatan modern.
				</p>
				<div class="flex flex-wrap gap-3">
					<span class="px-4 py-2 bg-white rounded-full text-[10px] font-black uppercase tracking-widest text-saccha-primary border border-saccha-primary/5 shadow-sm">BPOM</span>
					<span class="px-4 py-2 bg-white rounded-full text-[10px] font-black uppercase tracking-widest text-saccha-primary border border-saccha-primary/5 shadow-sm">HALAL</span>
					<span class="px-4 py-2 bg-white rounded-full text-[10px] font-black uppercase tracking-widest text-saccha-primary border border-saccha-primary/5 shadow-sm">P-IRT</span>
				</div>

				<!-- Strategic Social Media Section -->
				<div class="pt-4 space-y-4">
					<p class="text-[9px] font-black uppercase tracking-widest text-saccha-primary/40">Ikuti Perjalanan Kami</p>
					<div class="flex gap-4">
						<a 
							href="https://instagram.com/{contactInfo.instagram}" 
							target="_blank" 
							class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group"
							aria-label="Instagram"
						>
							<svg class="w-6 h-6 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
							</svg>
						</a>
						<a 
							href="https://wa.me/62{contactInfo.phones[0].replace(/\s/g, '').substring(1)}" 
							target="_blank" 
							class="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group"
							aria-label="WhatsApp"
						>
							<svg class="w-6 h-6 transition-transform group-hover:-rotate-12" fill="currentColor" viewBox="0 0 24 24">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
							</svg>
						</a>
					</div>
				</div>
			</div>

			<!-- Center column: Contacts -->
			<div class="lg:col-span-4 space-y-8">
				<h4 class="text-xs font-black uppercase tracking-[0.2em] text-saccha-primary">Hubungi Kami</h4>
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 rounded-xl bg-saccha-primary flex items-center justify-center text-white shrink-0">
							<span class="material-symbols-outlined text-xl">call</span>
						</div>
						<div>
							<p class="text-[9px] font-black uppercase tracking-widest text-saccha-primary/40 mb-1">WhatsApp</p>
							{#each contactInfo.phones as phone}
								<a href="https://wa.me/62{phone.replace(/\s/g, '').substring(1)}" class="block text-lg font-bold text-saccha-primary hover:text-saccha-gold transition-colors font-headline">{phone}</a>
							{/each}
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 rounded-xl bg-saccha-primary flex items-center justify-center text-white shrink-0">
							<span class="material-symbols-outlined text-xl">mail</span>
						</div>
						<div class="min-w-0">
							<p class="text-[9px] font-black uppercase tracking-widest text-saccha-primary/40 mb-1">Email Resmi</p>
							<a
								href={`https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=${contactInfo.email}`}
								target="_blank"
								rel="noopener noreferrer"
								class="block text-lg font-bold text-saccha-primary truncate font-headline hover:text-saccha-gold transition-colors"
							>
								{contactInfo.email}
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Right column: Certifications -->
			<div class="lg:col-span-4 space-y-8">
				<h4 class="text-xs font-black uppercase tracking-[0.2em] text-saccha-primary">Sertifikasi & Keamanan</h4>
				<div class="grid grid-cols-1 gap-4">
					{#each certifications as cert}
						<div class="glass-card p-4 rounded-2xl border border-saccha-primary/5 bg-white/50 hover:bg-white transition-all shadow-sm group">
							<div class="flex items-center gap-4">
								<div class="w-10 h-10 rounded-xl {cert.bg || 'bg-saccha-primary/10'} flex items-center justify-center {cert.color || 'text-saccha-primary'} shrink-0 group-hover:scale-110 transition-transform">
									<span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">{cert.icon}</span>
								</div>
								<div>
									<p class="text-[10px] font-black uppercase tracking-widest text-saccha-primary">{cert.label}</p>
									{#if cert.numbers}
										{#each cert.numbers as num}
											<p class="text-[11px] font-bold text-saccha-on-surface leading-tight mt-0.5">{num}</p>
										{/each}
									{:else if cert.text}
										<p class="text-[10px] font-medium text-saccha-on-surface-variant leading-tight mt-0.5">{cert.text}</p>
									{/if}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="border-t border-saccha-primary/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">

			<p class="text-[9px] font-black uppercase tracking-widest text-saccha-primary/40">
				© {currentYear} Ki-Mas Organic. All rights reserved.
			</p>
			<div class="flex gap-8">
				<a href="#home" class="text-[9px] font-black uppercase tracking-widest text-saccha-primary/40 hover:text-saccha-primary transition-colors">Privacy</a>
				<a href="#home" class="text-[9px] font-black uppercase tracking-widest text-saccha-primary/40 hover:text-saccha-primary transition-colors">Terms</a>
				<button on:click={() => window.scrollTo({ top: 0, behavior: "smooth" })} class="text-[9px] font-black uppercase tracking-widest text-saccha-primary hover:text-saccha-gold transition-colors flex items-center gap-2">
					Back to top <span class="material-symbols-outlined text-xs">arrow_upward</span>
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
</style>
