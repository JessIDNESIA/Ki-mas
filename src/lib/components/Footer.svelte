<script>
	const contactInfo = {
		phones: ['0838 4643 5699', '0812 3361 6267'],
		email: 'susiyantoeko45@gmail.com',
		instagram: 'kimas.sachainchi',
		address: {
			street: 'Bandara Erfina Residence Blok A - 15',
			kelurahan: 'Kelurahan Asrikaton',
			kecamatan: 'Kec. Pakis',
			kabupaten: 'Kab. Malang'
		}
	};

	const certifications = [
		{ label: 'P IRT',  numbers: ['2113507013848-30'] },
		{ label: 'NIB',    numbers: ['2410250037506'] },
		{ label: 'Halal',  numbers: ['ID 35410033732041125'] },
		{ label: 'Uji Lab', text: 'SIB (PT. Saraswati Indo Genetech) Bogor' }
	];

	const currentYear = new Date().getFullYear();
</script>

<footer class="relative bg-gradient-to-b from-teal-700 to-teal-900 text-white">

	<!-- Decorative top wave -->
	<div class="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
		<svg
			class="relative block w-full h-10 sm:h-14 md:h-16"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
				fill="currentColor"
				class="text-emerald-600"
			></path>
		</svg>
	</div>

	<div class="relative pt-16 sm:pt-20 pb-6 sm:pb-8 px-4 sm:px-6">
		<div class="max-w-7xl mx-auto">

			<!-- ── Main grid: 1 col → 2 col → 3 col ── -->
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12">

				<!-- 1. Company Info -->
				<div class="sm:col-span-2 lg:col-span-1">
					<h3 class="text-2xl sm:text-3xl font-black text-yellow-200 mb-3 flex items-center gap-2">
						<svg class="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 2L1 12h3v10h16v-10h3L12 2zm-2 18h4v-6h-4v6zm6 0h4v-6h-4v6z"/>
						</svg>
						Ki-Mas
					</h3>
					<p class="text-teal-100 mb-4 leading-relaxed text-sm sm:text-base">
						<span class="font-bold">Diproduksi Oleh: Indo Marina Superfood</span><br/>
						Produsen Kacang Sacha Inchi berkualitas tinggi.<br/>
						<span class="italic text-yellow-200">Lezat dan Sehat</span>
					</p>
					<!-- Badge row — wrap on tiny screens -->
					<div class="flex flex-wrap gap-2">
						<span class="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
							<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
							</svg>
							HALAL
						</span>
						<span class="bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
							<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
							</svg>
							BPOM
						</span>
					</div>
				</div>

				<!-- 2. Contact Info -->
				<div>
					<h4 class="text-xl sm:text-2xl font-black text-yellow-200 mb-4 flex items-center gap-2">
						<svg class="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
						</svg>
						Kontak Kami
					</h4>

					<div class="space-y-4">
						<!-- Phone -->
						<div class="flex items-start gap-3">
							<svg class="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 text-yellow-200" fill="currentColor" viewBox="0 0 24 24">
								<path d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3Z"/>
							</svg>
							<div class="min-w-0">
								<p class="text-teal-200 text-xs font-semibold mb-1">Telepon / WhatsApp:</p>
								{#each contactInfo.phones as phone}
									<a
										href="tel:{phone.replace(/\s/g, '')}"
										class="block text-white hover:text-yellow-200 transition-colors font-semibold text-sm sm:text-base hover:underline break-all"
									>{phone}</a>
								{/each}
							</div>
						</div>

						<!-- Email -->
						<div class="flex items-start gap-3">
							<svg class="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 text-yellow-200" fill="currentColor" viewBox="0 0 24 24">
								<path d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037Z"/>
							</svg>
							<div class="min-w-0">
								<p class="text-teal-200 text-xs font-semibold mb-1">Email:</p>
								<a
									href="mailto:{contactInfo.email}"
									class="text-white hover:text-yellow-200 transition-colors font-semibold text-sm sm:text-base break-all hover:underline"
								>{contactInfo.email}</a>
							</div>
						</div>

						<!-- Instagram -->
						<div class="flex items-start gap-3">
							<svg class="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 text-yellow-200" fill="currentColor" viewBox="0 0 24 24">
								<path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/>
							</svg>
							<div class="min-w-0">
								<p class="text-teal-200 text-xs font-semibold mb-1">Instagram:</p>
								<a
									href="https://instagram.com/{contactInfo.instagram}"
									target="_blank" rel="noopener noreferrer"
									class="text-white hover:text-yellow-200 transition-colors font-semibold text-sm sm:text-base hover:underline break-all"
								>@{contactInfo.instagram}</a>
							</div>
						</div>
					</div>
				</div>

				<!-- 3. Address -->
				<div>
					<h4 class="text-xl sm:text-2xl font-black text-yellow-200 mb-4 flex items-center gap-2">
						<svg class="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
						</svg>
						Alamat Produksi
					</h4>
					<div class="flex items-start gap-2 text-teal-100 mb-4">
						<svg class="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"/>
						</svg>
						<div class="text-sm sm:text-base leading-relaxed">
							<p class="font-semibold">{contactInfo.address.street}</p>
							<p>{contactInfo.address.kelurahan}</p>
							<p>{contactInfo.address.kecamatan}</p>
							<p>{contactInfo.address.kabupaten}</p>
						</div>
					</div>
					<a
						href="https://maps.google.com/?q=Bandara+Erfina+Residence+Pakis+Malang"
						target="_blank" rel="noopener noreferrer"
						class="inline-flex items-center gap-2 bg-yellow-400 text-teal-900 px-4 py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition-colors shadow-md hover:shadow-lg active:scale-95"
					>
						<svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
						</svg>
						Lihat di Maps
					</a>
				</div>
			</div>

			<!-- ── Certifications ── -->
			<div class="border-t border-teal-600 pt-8 mb-8">
				<h4 class="text-xl sm:text-2xl font-black text-yellow-200 mb-5 text-center">
					Sertifikasi &amp; Legalitas
				</h4>
				<!-- 2 col on SE, 4 col on lg -->
				<div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
					{#each certifications as cert}
						<div class="bg-teal-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border-2 border-teal-600 hover:border-yellow-200 transition-colors duration-300 hover:shadow-lg">
							<p class="text-yellow-200 font-bold text-base sm:text-lg mb-1.5 flex items-center gap-1.5">
								<svg class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
									<path d="m9 20.42-6.21-6.21 2.83-2.83L9 14.77l9.88-9.89 2.83 2.83L9 20.42Z"/>
								</svg>
								{cert.label}
							</p>
							{#if cert.numbers}
								{#each cert.numbers as number}
									<p class="text-white text-xs sm:text-sm font-mono break-all pl-5 sm:pl-7">{number}</p>
								{/each}
							{/if}
							{#if cert.text}
								<p class="text-white text-xs sm:text-sm pl-5 sm:pl-7 leading-snug">{cert.text}</p>
							{/if}
						</div>
					{/each}
				</div>
			</div>

			<!-- ── Social Media Icons ── -->
			<div class="flex justify-center flex-wrap gap-3 sm:gap-4 mb-6">
				<a
					href="https://wa.me/6283846435699"
					target="_blank" rel="noopener noreferrer"
					class="bg-green-500 hover:bg-green-600 text-white p-2.5 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
					title="WhatsApp"
				>
					<svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
					</svg>
				</a>
				<a
					href="https://instagram.com/{contactInfo.instagram}"
					target="_blank" rel="noopener noreferrer"
					class="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white p-2.5 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
					title="Instagram"
				>
					<svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
					</svg>
				</a>
				<a
					href="mailto:{contactInfo.email}"
					class="bg-teal-500 hover:bg-teal-600 text-white p-2.5 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
					title="Email"
				>
					<svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
					</svg>
				</a>
				<a
					href="tel:083846435699"
					class="bg-blue-500 hover:bg-blue-600 text-white p-2.5 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
					title="Telepon"
				>
					<svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
					</svg>
				</a>
			</div>

			<!-- ── Bottom copyright bar ── -->
			<div class="border-t border-teal-600 pt-5 text-center space-y-1.5">
				<p class="text-teal-200 text-xs sm:text-sm flex flex-wrap items-center justify-center gap-1">
					© {currentYear}
					<span class="font-bold text-yellow-200">Ki-Mas - Indo Marina Superfood</span>.
					All rights reserved.
				</p>
				<p class="text-teal-300 text-xs flex items-center justify-center gap-1">
					Made with
					<svg class="w-3.5 h-3.5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
						<path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
					</svg>
					for healthy Indonesia
				</p>
			</div>

		</div>
	</div>
</footer>