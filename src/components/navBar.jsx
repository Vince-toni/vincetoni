import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { siteData } from "./data";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { brand, nav } = siteData;

  
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const desktopLinksRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        // 1. INITIAL ANIMATION ON PAGE LOAD
      gsap.from(headerRef.current, {
        y: -100,        // start 100px above
        opacity: 0,     // start invisible
        duration: 1,    // 1 second long
        ease: "power3.out", // starts fast, slows at the end
      });

      gsap.from(logoRef.current, {
        opacity: 0,
        x: -30,         // start 30px to the left
        duration: 0.8,
        delay: .2,     // wait 0.2s after header starts
        ease: "power2.out",
      });

      // Desktop links stagger in (one after another)
      if (desktopLinksRef.current) {
        gsap.from(desktopLinksRef.current.children, {
          opacity: 0,
          y: -20,
          duration: 0.6,
          stagger: 0.1,  // 0.1 second delay between each link
          delay: 0.4,
          ease: "power2.out",
        });
      }
    });

    // Cleanup: if this component ever unmounts, kill the animations
    return () => ctx.revert();
  }, []); 

  // 2. MOBILE MENU ANIMATION — runs whenever menuOpen changes
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (menuOpen) {
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
      });

      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll("a"),
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.08,
          duration: 0.4,
          delay: 0.1,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [menuOpen]); // runs every time menuOpen changes

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          ref={logoRef}
          href="/"
          className="text-lg font-bold tracking-widest text-white"
        >
          {brand.name}
        </a>

        {/* Desktop Navigation */}
        <ul
          ref={desktopLinksRef}
          className="hidden items-center gap-8 md:flex"
        >
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-widest text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu — ALWAYS in DOM, GSAP controls visibility */}
      <div
        ref={mobileMenuRef}
        className="overflow-hidden border-t border-white/10 bg-black px-6 md:hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <ul className="flex flex-col gap-6 py-6">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block text-lg text-white/80 transition-colors hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}