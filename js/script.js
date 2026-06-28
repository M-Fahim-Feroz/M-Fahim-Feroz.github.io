document.addEventListener('DOMContentLoaded', () => {

    // ── Mobile menu toggle ──────────────────────────────────────────────
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => mobileNav.classList.toggle('hidden'));
        mobileNav.querySelectorAll('a').forEach(link =>
            link.addEventListener('click', () => mobileNav.classList.add('hidden'))
        );
    }

    // ── Active nav link on scroll ───────────────────────────────────────
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav-link');

    const observerOptions = { rootMargin: '-40% 0px -55% 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('nav-link-active');
                    link.style.borderBottom = '';
                    link.style.paddingBottom = '';
                });
                const activeLink = document.querySelector(`.desktop-nav-link[href="#${entry.target.id}"]`);
                if (activeLink) activeLink.classList.add('nav-link-active');
            }
        });
    }, observerOptions);
    sections.forEach(s => observer.observe(s));

    // ── Scroll-to-top button ────────────────────────────────────────────
    const scrollBtn = document.getElementById('scroll-top-btn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) scrollBtn.classList.add('visible');
        else scrollBtn.classList.remove('visible');
    });
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

});
