<script>
	import { page } from '$app/stores';
	
	// Curi error parameter dari interceptor hooks.server.js / hooks.client.js
	$: status = $page.status;
	$: errorMsg = $page.error?.message || 'An unexpected error occurred.';
	$: stackTrace = $page.error?.stack || '';
	$: errorId = $page.error?.errorId || 'N/A';
	$: pathname = $page.error?.pathname || $page.url?.pathname || 'Unknown Render Path';
    
    // Urai Stack Trace Baris per Baris agar terlihat keren seperti Ignition
	$: stackLines = stackTrace ? stackTrace.split('\n') : [];
</script>

<svelte:head>
	<title>Error {status} | {errorMsg}</title>
</svelte:head>

<div class="min-h-screen bg-[#f3f4f6] text-[#374151] font-sans flex flex-col antialiased selection:bg-red-500/30">
	<!-- Top Red Banner (Laravel Style) -->
	<header class="bg-[#ef4444] text-white p-8 md:p-12 shadow-md shrink-0">
		<div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:items-center justify-between">
			<div class="space-y-3 flex-1 min-w-0 pr-8">
				<span class="inline-block px-3 py-1 bg-white/20 rounded text-[10px] font-black uppercase tracking-[0.2em] shadow-sm backdrop-blur-md border border-white/10">
					Ki-Mas Error Handler Mode
				</span>
				<h1 class="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mt-2 text-white break-words drop-shadow-sm font-headline">
					{errorMsg}
				</h1>
			</div>
			<div class="text-left md:text-right shrink-0">
				<p class="text-[10px] font-black uppercase tracking-[0.3em] opacity-70 mb-1">HTTP Status</p>
				<p class="text-6xl md:text-8xl font-black drop-shadow-md font-headline leading-none">{status}</p>
			</div>
		</div>
	</header>

	<!-- Main Details Container -->
	<main class="flex-grow max-w-7xl mx-auto w-full p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
		
		<!-- Left: Stack Trace Code Viewer -->
		<div class="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-gray-200/60 overflow-hidden flex flex-col h-[70vh] max-h-[800px]">
			<!-- Header Block -->
            <div class="bg-gray-50 border-b border-gray-200 px-6 py-5 flex items-center justify-between shrink-0">
				<h3 class="font-bold text-gray-900 flex items-center gap-3 text-sm tracking-wide">
					<span class="material-symbols-outlined text-gray-400 text-xl" style="font-variation-settings: 'FILL' 1;">code_blocks</span>
					Stack Trace
				</h3>
                <span class="text-[10px] bg-gray-200/80 text-gray-600 px-3 py-1.5 rounded-full font-black uppercase tracking-widest border border-gray-300">
                    ID: {errorId.split('-')[0]}
                </span>
			</div>
			
			<div class="overflow-x-auto overflow-y-auto p-6 flex-grow bg-[#1e1e1e] text-[#d4d4d4] font-mono leading-relaxed" style="font-size: 13px;">
				{#if stackLines.length > 0}
					<div class="text-red-400 font-bold mb-6 text-sm bg-red-400/10 p-4 rounded-xl border border-red-400/20">{stackLines[0]}</div>
					<ul class="space-y-1 pl-4 border-l-2 border-red-500/30">
						{#each stackLines.slice(1) as logLine}
							<li class="pl-4 break-words hover:bg-white/5 py-1.5 px-3 rounded-lg cursor-default border border-transparent hover:border-white/10 transition-colors">
								{logLine.trim()}
							</li>
						{/each}
					</ul>
				{:else}
					<div class="p-4 text-gray-400 italic">No stack trace logged by SvelteKit execution context.</div>
				{/if}
			</div>
		</div>

		<!-- Right: Environment / File Path Context -->
		<div class="lg:col-span-4 space-y-6">
			<!-- Context Block -->
			<div class="bg-white rounded-2xl shadow-sm border border-gray-200/60 overflow-hidden">
				<div class="bg-gray-50 border-b border-gray-200 px-6 py-4">
					<h3 class="font-bold text-gray-900 flex items-center gap-2 text-sm tracking-wide">
						<span class="material-symbols-outlined text-gray-400 text-lg" style="font-variation-settings: 'FILL' 1;">info</span>
						Request Context
					</h3>
				</div>
				<div class="p-6 space-y-6">
					<div>
						<p class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">Request Path (Crash Location)</p>
						<p class="text-sm font-medium text-gray-800 bg-gray-50 py-3 px-4 rounded-xl border border-gray-200 break-all font-mono shadow-inner">
							{pathname}
						</p>
					</div>
					<div>
						<p class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">Environment Source</p>
						<div class="flex items-center gap-3">
                            <span class="inline-block w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                            <span class="text-sm font-bold text-gray-800">Production / Deployment Active</span>
                        </div>
					</div>
				</div>
			</div>

            <!-- Resolution Block -->
			<div class="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6 overflow-hidden relative">
                <div class="absolute -right-4 -top-4 text-gray-100 rotate-12">
                    <span class="material-symbols-outlined" style="font-size: 150px; font-variation-settings: 'FILL' 1;">bug_report</span>
                </div>
                <div class="relative z-10">
                    <h4 class="font-bold font-headline text-lg mb-2 text-gray-900">Developer Notes</h4>
                    <p class="text-sm text-gray-600 mb-6 leading-relaxed">
                        Log detail ini di-*bypass* secara khusus agar Anda bisa mendeteksi error di server Vercel layaknya Ignition di Laravel.<br><br>Gunakan rute di dalam <b>Stack Trace</b> atau <b>Request Path</b> untuk menelurusi kode komponen letak asal errornya!
                    </p>
                    <a href="/" class="block w-full text-center bg-gray-900 text-white font-black uppercase tracking-[0.2em] py-4 px-6 rounded-xl hover:bg-black hover:-translate-y-0.5 active:translate-y-0 transition-all font-body text-xs shadow-lg">
                        &larr; KEMBALI KE BERANDA
                    </a>
                </div>
            </div>
		</div>
	</main>
</div>
