import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { siteData } from "../../data";
import { useMagnetic } from "../../hooks/useMagnetic";

export default function Hero() {
  const { hero } = siteData;

  const heroRef = useRef(null);
  const backgroundRef = useRef(null);
  const overlayRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const titleWordsRef = useRef([]);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollRef = useRef(null);
  const lightRef = useRef(null);

  const { ref: primaryBtnRef, onMouseMove: onPrimaryMove, onMouseLeave: onPrimaryLeave } = useMagnetic(0.25);
  const { ref: secondaryBtnRef, onMouseMove: onSecondaryMove, onMouseLeave: onSecondaryLeave } = useMagnetic(0.2);

  const titleWords = hero.title.split(" ");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        backgroundRef.current,
        { scale: 1.12, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
      )
        .fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2 }, "-=1.5")
        .fromTo(eyebrowRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .fromTo(
          titleWordsRef.current,
          { opacity: 0, y: 50, rotateX: 40 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.06, ease: "power4.out" },
          "-=0.3"
        )
        .fromTo(descriptionRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
          "-=0.3"
        )
        .fromTo(scrollRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.2");

      gsap.to(lightRef.current, {
        x: 30,
        y: -20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(backgroundRef.current, {
        scale: 1.05,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 text-white"
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-position-[60%_center] bg-no-repeat will-change-transform md:bg-center"
        style={{ backgroundImage: "url('/hero1.png')" }}
      />

      <div ref={overlayRef} className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/20" />

      <div
        ref={lightRef}
        className="pointer-events-none absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-4xl" style={{ perspective: "800px" }}>
          <p
            ref={eyebrowRef}
            className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-white/60"
          >
            {hero.eyebrow}
          </p>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            {titleWords.map((word, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden">
                <span
                  ref={(el) => (titleWordsRef.current[i] = el)}
                  className="inline-block"
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p
            ref={descriptionRef}
            className="mt-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            {hero.description}
          </p>

          <div ref={buttonsRef} className="mt-10 flex flex-wrap gap-4">
            <a
              ref={primaryBtnRef}
              href={hero.primaryCta.href}
              onMouseMove={onPrimaryMove}
              onMouseLeave={onPrimaryLeave}
              className="group rounded-full bg-white px-6 py-3 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black active:scale-95"
              style={{ transition: "transform 0.2s ease-out" }}
            >
              <span className="flex items-center gap-2">
                {hero.primaryCta.label}
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </span>
            </a>

            <a
              ref={secondaryBtnRef}
              href={hero.secondaryCta.href}
              onMouseMove={onSecondaryMove}
              onMouseLeave={onSecondaryLeave}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-white/50 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30 active:scale-95"
              style={{ transition: "transform 0.2s ease-out, border-color 0.3s, background-color 0.3s" }}
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      <a
        ref={scrollRef}
        href="#about"
        className="group absolute bottom-8 left-6 z-10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/40 transition-colors duration-300 hover:text-white/70"
        aria-label="Scroll to explore"
      >
        <span className="h-8 w-px bg-white/20 transition-all duration-500 group-hover:h-12 group-hover:bg-white/50" />
        <span>Scroll to explore</span>
      </a>
    </section>
  );
}
