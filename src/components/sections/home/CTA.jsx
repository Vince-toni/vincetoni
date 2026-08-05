import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { siteData } from "../../data";
import { useMagnetic } from "../../hooks/useMagnetic";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef([]);
  const glowRef = useRef(null);
  const { ref: btnRef, onMouseMove, onMouseLeave } = useMagnetic(0.2);

  const { cta } = siteData;

  useGSAP(
    () => {
      gsap.from(contentRef.current?.children || [], {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(glowRef.current, {
        scale: 1.1,
        opacity: 0.6,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-label="Contact"
      className="relative overflow-hidden bg-black px-6 py-28 text-white md:py-40"
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
        style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div ref={contentRef} className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">{cta.eyebrow}</p>
          <h2 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            {cta.title}
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/50">{cta.description}</p>

          <div className="mt-12 flex flex-col items-center gap-4">
            <a
              ref={btnRef}
              href={cta.primaryCta.href}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-colors duration-300 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              style={{ transition: "transform 0.2s ease-out, background-color 0.3s" }}
            >
              {cta.primaryCta.label}
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={`mailto:${cta.email}`}
              className="text-sm text-white/40 transition-colors duration-300 hover:text-white/70"
            >
              {cta.email}
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3">
          {cta.cards.map((card, index) => (
            <a
              key={card.title}
              ref={(el) => (cardsRef.current[index] = el)}
              href={card.href}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
            >
              <h3 className="text-lg font-semibold tracking-tight text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{card.description}</p>
              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/25 transition-all duration-300 group-hover:gap-3 group-hover:text-white/60">
                <span>Get in touch</span>
                <span aria-hidden="true">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
