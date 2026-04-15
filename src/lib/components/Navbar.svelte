<script lang="ts">
  import { onMount } from 'svelte';
  import { Menu, X, ShoppingBag, Leaf, HeartPulse } from 'lucide-svelte';
  import { fade } from 'svelte/transition';

  let scrolled = false;
  let mobileMenuOpen = false;

  const navLinks = [
    { name: 'Beranda', href: '#home', icon: Leaf },
    { name: 'Manfaat', href: '#apa-itu-sacha-inchi', icon: HeartPulse },
    { name: 'Produk', href: '#products', icon: ShoppingBag },
    { name: 'Kontak', href: '#footer', icon: undefined }
  ];

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<nav class="nav-glass {scrolled ? 'scrolled' : ''}">
  <div class="max-w-[1440px] w-full mx-auto flex items-center justify-between">
    <!-- Logo Area -->
    <a href="#home" class="relative group z-50">
      <img src="/images/ki-mas-logo.png" alt="Ki-Mas" class="h-10 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
    </a>

    <!-- Desktop Navigation -->
    <div class="hidden lg:flex items-center gap-6 md:gap-8">
      {#each navLinks as link}
        <a 
          href={link.href} 
          class="font-headline text-[10px] font-black uppercase tracking-[0.2em] text-saccha-primary hover:text-saccha-gold transition-all flex items-center gap-2"
        >
          {link.name}
        </a>
      {/each}

      <a 
        href="https://wa.me/6283846435699" 
        target="_blank"
        class="bg-saccha-primary text-white px-6 py-2.5 rounded-full font-headline text-[10px] font-black uppercase tracking-[0.2em] hover:bg-saccha-gold transition-all active:scale-95 shadow-lg shadow-saccha-primary/20"
      >
        Order Now
      </a>
    </div>

    <!-- Mobile Menu Toggle -->
    <button class="lg:hidden z-50 p-2 text-saccha-primary active:scale-95 transition-all" on:click={toggleMobileMenu} aria-label="Toggle Menu">
      {#if mobileMenuOpen}
        <X size={20} />
      {:else}
        <Menu size={20} />
      {/if}
    </button>
  </div>

  <!-- Mobile Menu Overlay -->
  {#if mobileMenuOpen}
    <div 
      class="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
      transition:fade
    >
      {#each navLinks as link}
        <a 
          href={link.href} 
          class="font-headline text-2xl font-black uppercase tracking-tighter text-saccha-primary hover:text-saccha-gold transition-colors"
          on:click={() => mobileMenuOpen = false}
        >
          {link.name}
        </a>
      {/each}
      <a 
        href="https://wa.me/6283846435699" 
        target="_blank"
        class="bg-saccha-primary text-white px-10 py-5 rounded-full font-headline font-black uppercase tracking-widest text-xs shadow-xl shadow-saccha-primary/20"
        on:click={() => mobileMenuOpen = false}
      >
        Pesan Sekarang
      </a>
    </div>
  {/if}
</nav>

<style>
  :global(.font-headline) {
    font-family: 'Epilogue', sans-serif;
  }
</style>
