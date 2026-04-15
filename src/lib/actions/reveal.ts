/**
 * reveal.ts
 * A Svelte action to trigger entry animations when an element enters the viewport.
 */
export function reveal(node: HTMLElement, options: { threshold?: number; rootMargin?: string; delay?: number } = {}) {
    const { threshold = 0.1, rootMargin = '0px', delay = 0 } = options;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        node.classList.add('reveal-active');
                    }, delay);
                    // Disconnect after reveal to keep it revealed
                    observer.unobserve(node);
                }
            });
        },
        { threshold, rootMargin }
    );

    node.classList.add('reveal-init');
    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
