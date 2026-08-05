import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { siteData } from "../data";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { brand, nav } = siteData;

  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const desktopLinksRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(logoRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });

      if (desktopLinksRef.current) {
        gsap.from(desktopLinksRef.current.children, {
          opacity: 0,
          y: -20,
          duration: 0.6,
          stagger: 0.08,
          delay: 0.4,
          ease: "power2.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = nav.links
        .map((l) => document.querySelector(l.href))
        .filter(Boolean);

      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom > 120;
      });

      if (current) {
        setActiveSection(`#${current.id}`);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [nav.links]);

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
          stagger: 0.06,
          duration: 0.35,
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
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/90 backdrop-blur-xl shadow-lg shadow-black/20"
          : "border-b border-white/5 bg-black/60 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6" aria-label="Main navigation">
        <a
          ref={logoRef}
          href="/"
          className="relative text-lg font-bold tracking-widest text-white transition-opacity duration-300 hover:opacity-80"
        >
          {brand.name}
        </a>

        <ul ref={desktopLinksRef} className="hidden items-center gap-1 md:flex">
          {nav.links.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 text-xs uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 h-px bg-white transition-all duration-300 -translate-x-1/2 ${
                      isActive ? "w-4 opacity-100" : "w-0 opacity-0 group-hover:w-4"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-white/80 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={`absolute block h-px w-5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute block h-px w-5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`absolute block h-px w-5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45" : "translate-y-1.5"}`} />
        </button>
      </nav>

      <div
        ref={mobileMenuRef}
        className="overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl px-6 md:hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <ul className="flex flex-col gap-1 py-6">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-lg px-3 py-3 text-base text-white/70 transition-all duration-300 hover:bg-white/5 hover:text-white active:bg-white/10"
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
