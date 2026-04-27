<script>
	import { ChevronDown } from "lucide-svelte";

	let formName = "";
	let formEmail = "";
	let formPhone = "";
	let formFocus = "";
	let formMessage = "";
	let isSubmitting = false;
	let showToast = false;

	const WHATSAPP_NUMBER = "6283846435699";

	function handleSubmit(e) {
		e.preventDefault();

		if (!formName || !formEmail || !formPhone || !formFocus || !formMessage) return;

		isSubmitting = true;

		const message = [
			"*PERMINTAAN PRODUK KI-MAS*",
			"─────────────────",
			`*Nama:* ${formName}`,
			`*Email:* ${formEmail}`,
			`*Telepon:* ${formPhone}`,
			`*Produk:* ${formFocus}`,
			"─────────────────",
			`*Pesan:*`,
			formMessage,
		].join("\n");

		const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

		window.open(waUrl, "_blank");

		formName = "";
		formEmail = "";
		formPhone = "";
		formFocus = "";
		formMessage = "";

		showToast = true;
		setTimeout(() => (showToast = false), 4000);

		isSubmitting = false;
	}
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
					on:submit={handleSubmit}
					class="space-y-4"
				>
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
								class="absolute left-4 top-3 text-saccha-primary/40 text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-saccha-primary peer-focus:bg-white peer-focus:px-2 peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-3 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:font-black peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:tracking-widest peer-[&:not(:placeholder-shown)]:text-saccha-primary peer-[&:not(:placeholder-shown)]:bg-white peer-[&:not(:placeholder-shown)]:px-2 pointer-events-none"
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
								class="absolute left-4 top-3 text-saccha-primary/40 text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-saccha-primary peer-focus:bg-white peer-focus:px-2 peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-3 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:font-black peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:tracking-widest peer-[&:not(:placeholder-shown)]:text-saccha-primary peer-[&:not(:placeholder-shown)]:bg-white peer-[&:not(:placeholder-shown)]:px-2 pointer-events-none"
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
								class="absolute left-4 top-3 text-saccha-primary/40 text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-saccha-primary peer-focus:bg-white peer-focus:px-2 peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-3 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:font-black peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:tracking-widest peer-[&:not(:placeholder-shown)]:text-saccha-primary peer-[&:not(:placeholder-shown)]:bg-white peer-[&:not(:placeholder-shown)]:px-2 pointer-events-none"
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
								class="peer font-body w-full px-4 py-3 pr-12 bg-white border-2 border-saccha-primary/5 rounded-2xl focus:border-saccha-primary transition-all text-saccha-on-surface outline-none text-sm appearance-none cursor-pointer"
							>
								<option value="" disabled selected></option>
								<option value="Kacang Panggang">Kacang Panggang</option>
								<option value="Kacang Telor">Kacang Telor</option>
								<option value="Kacang Disco">Kacang Disco</option>
								<option value="Kemitraan/Grosir">Kemitraan/Grosir</option>
							</select>
							<div class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-saccha-primary/40">
								<ChevronDown size={18} aria-hidden="true" />
							</div>
							<label
								for="form-focus"
								class="absolute left-4 top-3 text-saccha-primary/40 text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-saccha-primary peer-focus:bg-white peer-focus:px-2 peer-valid:-top-2 peer-valid:left-3 peer-valid:text-[10px] peer-valid:font-black peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-saccha-primary peer-valid:bg-white peer-valid:px-2 pointer-events-none"
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
							class="absolute left-4 top-3 text-saccha-primary/40 text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-saccha-primary peer-focus:bg-white peer-focus:px-2 peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-3 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:font-black peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:tracking-widest peer-[&:not(:placeholder-shown)]:text-saccha-primary peer-[&:not(:placeholder-shown)]:bg-white peer-[&:not(:placeholder-shown)]:px-2 pointer-events-none"
						>
							Pesan / Detail Pesanan
						</label>
					</div>
					<button
						class="font-headline mt-2 w-full py-4 bg-saccha-primary text-white rounded-full font-black text-xs tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-saccha-gold transition-all shadow-xl shadow-saccha-primary/20 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
						type="submit"
						disabled={isSubmitting}
					>
						{#if isSubmitting}
							<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
								<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
							</svg>
							Mengirim...
						{:else}
							KIRIM PESAN
							<span class="material-symbols-outlined text-sm">arrow_forward</span>
						{/if}
					</button>
				</form>
			</div>
		</div>
	</div>

	<!-- Toast Notification -->
	{#if showToast}
		<div
			class="fixed bottom-6 right-6 z-50 bg-saccha-primary text-white px-6 py-4 rounded-2xl shadow-2xl shadow-saccha-primary/30 flex items-center gap-3 animate-slide-up"
		>
			<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1; font-size: 20px;">check_circle</span>
			<div>
				<p class="font-black text-sm">Pesan Terkirim!</p>
				<p class="text-xs opacity-80">Anda akan diarahkan ke WhatsApp.</p>
			</div>
		</div>
	{/if}
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
	@keyframes slide-up {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.animate-slide-up {
		animation: slide-up 0.4s cubic-bezier(0.22, 1, 0.36, 1);
	}
</style>
