import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { siteData } from "../../data";

export default function Hero() {
  const { hero } = siteData;

  const heroRef = useRef(null);
  const backgroundRef = useRef(null);
  const overlayRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Background
      tl.fromTo(
        backgroundRef.current,
        {
          scale: 1.1,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.8,
          ease: "power2.out",
        }
      )

        // Dark overlay
        .fromTo(
          overlayRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1.2,
          },
          "-=1.4"
        )

        // Eyebrow
        .fromTo(
          eyebrowRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.5"
        )

        // Main title
        .fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.4"
        )

        // Description
        .fromTo(
          descriptionRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.5"
        )

        // Buttons
        .fromTo(
          buttonsRef.current.children,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
          },
          "-=0.3"
        )

        // Scroll indicator
        .fromTo(
          scrollRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.2"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 text-white"
    >
      {/* Background Image */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero1.png')",
        }}
      />

      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/70"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <p
            ref={eyebrowRef}
            className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-white/60"
          >
            {hero.eyebrow}
          </p>

          {/* Heading */}
          <h1
            ref={titleRef}
            className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {hero.title}
          </h1>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="mt-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            {hero.description}
          </p>

          {/* Buttons */}
          <div
            ref={buttonsRef}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href={hero.primaryCta.href}
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
            >
              {hero.primaryCta.label}
            </a>

            <a
              href={hero.secondaryCta.href}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-6 z-10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/40"
      >
        <span className="h-px w-8 bg-white/30" />
        Scroll to explore
      </div>
    </section>
  );
}