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
		{ label: 'P IRT', numbers: ['2113507013848-30'] },
		{ label: 'NIB', numbers: ['2410250037506'] },
		{ label: 'Halal', numbers: ['ID 35410033732041125'] },
		{ label: 'Uji Lab', text: 'SIB (PT. Saraswati Indo Genetech) Bogor' }
	];

	const currentYear = new Date().getFullYear();
</script>

<footer class="relative bg-gradient-to-b from-teal-700 to-teal-900 text-white">
	<!-- Decorative top wave -->
	<div class="absolute top-0 left-0 right-0 overflow-hidden leading-none">
		<svg class="relative block w-full h-12 md:h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
			<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor" class="text-emerald-600"></path>
		</svg>
	</div>

	<div class="relative pt-20 pb-8 px-4">
		<div class="max-w-7xl mx-auto">
			<!-- Main Footer Content -->
			<div class="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
				<!-- Company Info -->
				<div>
					<h3 class="text-3xl font-black text-yellow-200 mb-4">Ki-Mas</h3>
					<p class="text-teal-100 mb-4 leading-relaxed">
						<span class="font-bold">Diproduksi Oleh: Indo Merina Superfood</span><br/>
						Produsen Kacang Sacha Inchi berkualitas tinggi.<br/>
						<span class="italic text-yellow-200">Lezat dan Sehat</span>
					</p>
					<div class="flex items-center space-x-3">
						<span class="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
							✓ HALAL
						</span>
						<span class="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
							✓ BPOM
						</span>
					</div>
				</div>

				<!-- Contact Info -->
				<div>
					<h4 class="text-2xl font-black text-yellow-200 mb-4">Kontak Kami</h4>
					<div class="space-y-3">
						<!-- Phone -->
						<div>
							<p class="text-teal-200 text-sm font-semibold mb-1">📞 Telepon / WhatsApp:</p>
							{#each contactInfo.phones as phone}
								<a href="tel:{phone.replace(/\s/g, '')}" class="block text-white hover:text-yellow-200 transition-colors font-semibold">
									{phone}
								</a>
							{/each}
						</div>
						
						<!-- Email -->
						<div>
							<p class="text-teal-200 text-sm font-semibold mb-1">📧 Email:</p>
							<a href="mailto:{contactInfo.email}" class="text-white hover:text-yellow-200 transition-colors font-semibold break-all">
								{contactInfo.email}
							</a>
						</div>

						<!-- Instagram -->
						<div>
							<p class="text-teal-200 text-sm font-semibold mb-1">📱 Instagram:</p>
							<a href="https://instagram.com/{contactInfo.instagram}" target="_blank" rel="noopener noreferrer" class="text-white hover:text-yellow-200 transition-colors font-semibold flex items-center">
								@{contactInfo.instagram}
								<svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
								</svg>
							</a>
						</div>
					</div>
				</div>

				<!-- Address -->
				<div>
					<h4 class="text-2xl font-black text-yellow-200 mb-4">Alamat Produksi</h4>
					<div class="text-teal-100 space-y-1">
						<p class="font-semibold">{contactInfo.address.street}</p>
						<p>{contactInfo.address.kelurahan}</p>
						<p>{contactInfo.address.kecamatan}</p>
						<p>{contactInfo.address.kabupaten}</p>
					</div>
					<div class="mt-4">
						<a href="https://maps.google.com/?q=Bandara+Erfina+Residence+Pakis+Malang" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-yellow-400 text-teal-900 px-4 py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition-colors">
							📍 Lihat di Maps
						</a>
					</div>
				</div>
			</div>

			<!-- Certifications -->
			<div class="border-t border-teal-600 pt-8 mb-8">
				<h4 class="text-2xl font-black text-yellow-200 mb-4 text-center">Sertifikasi & Legalitas</h4>
				<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{#each certifications as cert}
						<div class="bg-teal-800/50 backdrop-blur-sm rounded-xl p-4 border-2 border-teal-600">
							<p class="text-yellow-200 font-bold text-lg mb-2">{cert.label}</p>
							{#if cert.numbers}
								{#each cert.numbers as number}
									<p class="text-white text-sm font-mono break-all">{number}</p>
								{/each}
							{/if}
							{#if cert.text}
								<p class="text-white text-sm">{cert.text}</p>
							{/if}
						</div>
					{/each}
				</div>
			</div>

			<!-- Bottom Bar -->
			<div class="border-t border-teal-600 pt-6 text-center">
				<p class="text-teal-200 text-sm mb-2">
					© {currentYear} <span class="font-bold text-yellow-200">Ki-Mas - Indo Merina Superfood</span>. All rights reserved.
				</p>
				<p class="text-teal-300 text-xs">
					Made with 💚 for healthy Indonesia
				</p>
			</div>

			<!-- Social Media Links -->
			<div class="mt-6 flex justify-center space-x-4">
				<a href="https://wa.me/6283846435699" target="_blank" rel="noopener noreferrer" class="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors" title="WhatsApp">
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
					</svg>
				</a>
				<a href="https://instagram.com/{contactInfo.instagram}" target="_blank" rel="noopener noreferrer" class="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-colors" title="Instagram">
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
					</svg>
				</a>
				<a href="mailto:{contactInfo.email}" class="bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full transition-colors" title="Email">
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</footer>