<script>
	let formName = "";
	let formEmail = "";
	let formPhone = "";
	let formFocus = "";
	let formMessage = "";
</script>

<!-- Form Permintaan Produk -->
<section
	id="form-section"
	class="section-standard relative overflow-hidden bg-saccha-surface-container-low"
>
	<div class="relative z-10">
		<!-- Section Header -->
		<div class="section-header-spacing text-center">
			<span class="section-eyebrow">Connect With Us</span>
			<h2 class="section-title">Form <span class="text-saccha-gold">Permintaan</span></h2>
			<p class="text-saccha-on-surface-variant text-base font-medium max-w-md mx-auto mt-4">
				Lengkapi detail Anda dan kami akan segera menghubungi Anda kembali.
			</p>
		</div>

		<div class="max-w-3xl mx-auto">
			<div class="glass-card bg-white/70 rounded-[2.5rem] p-6 md:p-12 shadow-2xl shadow-saccha-primary/5 border border-saccha-primary/5">
				<form
					action="https://formspree.io/f/mjgpnkvr"
					method="POST"
					class="space-y-4"
				>
					<input
						type="hidden"
						name="_subject"
						value="Permintaan Produk Ki-Mas Baru!"
					/>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<!-- Name Field -->
						<div class="relative group">
							<input
								name="name"
								id="form-name"
								bind:value={formName}
								required
								class="peer font-body w-full px-4 py-3 bg-white border-2 border-saccha-primary/5 rounded-2xl focus:border-saccha-primary transition-all text-saccha-on-surface outline-none text-sm"
								placeholder=" "
								type="text"
							/>
							<label
								for="form-name"
								class="absolute left-4 top-3 text-saccha-primary/40 text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-saccha-primary peer-focus:bg-white peer-focus:px-2 not-placeholder-shown:-top-2 not-placeholder-shown:left-3 not-placeholder-shown:text-[10px] not-placeholder-shown:font-black not-placeholder-shown:uppercase not-placeholder-shown:tracking-widest not-placeholder-shown:text-saccha-primary not-placeholder-shown:bg-white not-placeholder-shown:px-2 pointer-events-none"
							>
								Full Name
							</label>
						</div>
						<!-- Email Field -->
						<div class="relative group">
							<input
								name="email"
								id="form-email"
								bind:value={formEmail}
								required
								class="peer font-body w-full px-4 py-3 bg-white border-2 border-saccha-primary/5 rounded-2xl focus:border-saccha-primary transition-all text-saccha-on-surface outline-none text-sm"
								placeholder=" "
								type="email"
							/>
							<label
								for="form-email"
								class="absolute left-4 top-3 text-saccha-primary/40 text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-saccha-primary peer-focus:bg-white peer-focus:px-2 not-placeholder-shown:-top-2 not-placeholder-shown:left-3 not-placeholder-shown:text-[10px] not-placeholder-shown:font-black not-placeholder-shown:uppercase not-placeholder-shown:tracking-widest not-placeholder-shown:text-saccha-primary not-placeholder-shown:bg-white not-placeholder-shown:px-2 pointer-events-none"
							>
								Email Address
							</label>
						</div>
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<!-- Phone Field -->
						<div class="relative group">
							<input
								name="phone"
								id="form-phone"
								bind:value={formPhone}
								required
								class="peer font-body w-full px-4 py-3 bg-white border-2 border-saccha-primary/5 rounded-2xl focus:border-saccha-primary transition-all text-saccha-on-surface outline-none text-sm"
								placeholder=" "
								type="tel"
								pattern="[0-9]*"
								on:input={(e) => (formPhone = formPhone.replace(/[^0-9]/g, ""))}
							/>
							<label
								for="form-phone"
								class="absolute left-4 top-3 text-saccha-primary/40 text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-saccha-primary peer-focus:bg-white peer-focus:px-2 not-placeholder-shown:-top-2 not-placeholder-shown:left-3 not-placeholder-shown:text-[10px] not-placeholder-shown:font-black not-placeholder-shown:uppercase not-placeholder-shown:tracking-widest not-placeholder-shown:text-saccha-primary not-placeholder-shown:bg-white not-placeholder-shown:px-2 pointer-events-none"
							>
								Phone Number
							</label>
						</div>
						<!-- Focus Field -->
						<div class="relative group">
							<select
								name="focus"
								id="form-focus"
								bind:value={formFocus}
								required
								class="peer font-body w-full px-4 py-3 bg-white border-2 border-saccha-primary/5 rounded-2xl focus:border-saccha-primary transition-all text-saccha-on-surface outline-none text-sm appearance-none cursor-pointer"
							>
								<option value="" disabled selected></option>
								<option value="Kacang Panggang">Kacang Panggang</option>
								<option value="Kacang Telor">Kacang Telor</option>
								<option value="Kacang Disco">Kacang Disco</option>
								<option value="Kemitraan/Grosir">Kemitraan/Grosir</option>
							</select>
							<label
								for="form-focus"
								class="absolute left-4 top-3 text-saccha-primary/40 text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-saccha-primary peer-focus:bg-white peer-focus:px-2 not-placeholder-shown:-top-2 not-placeholder-shown:left-3 not-placeholder-shown:text-[10px] not-placeholder-shown:font-black not-placeholder-shown:uppercase not-placeholder-shown:tracking-widest not-placeholder-shown:text-saccha-primary not-placeholder-shown:bg-white not-placeholder-shown:px-2 pointer-events-none"
							>
								Pilih Produk
							</label>
						</div>
					</div>
					<!-- Message Field -->
					<div class="relative group">
						<textarea
							name="message"
							id="form-message"
							bind:value={formMessage}
							required
							class="peer font-body w-full px-4 py-3 bg-white border-2 border-saccha-primary/5 rounded-2xl focus:border-saccha-primary transition-all text-saccha-on-surface outline-none text-sm min-h-[100px]"
							placeholder=" "
							rows="4"
						></textarea>
						<label
							for="form-message"
							class="absolute left-4 top-3 text-saccha-primary/40 text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-saccha-primary peer-focus:bg-white peer-focus:px-2 not-placeholder-shown:-top-2 not-placeholder-shown:left-3 not-placeholder-shown:text-[10px] not-placeholder-shown:font-black not-placeholder-shown:uppercase not-placeholder-shown:tracking-widest not-placeholder-shown:text-saccha-primary not-placeholder-shown:bg-white not-placeholder-shown:px-2 pointer-events-none"
						>
							Pesan / Detail Pesanan
						</label>
					</div>
					<button
						class="font-headline mt-2 w-full py-4 bg-saccha-primary text-white rounded-full font-black text-xs tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-saccha-gold transition-all shadow-xl shadow-saccha-primary/20 active:scale-95"
						type="submit"
					>
						KIRIM PESAN
						<span class="material-symbols-outlined text-sm">arrow_forward</span>
					</button>
				</form>
			</div>
		</div>
	</div>
</section>

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
</style>
