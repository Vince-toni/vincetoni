import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { siteData } from "../../data";
import StatusBadge, { ProgressBar } from "../../ui/StatusBadge";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProduct() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const mockupRef = useRef(null);
  const chipsRef = useRef([]);
  const floatRef = useRef([]);

  const { featuredProduct: product } = siteData;

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(contentRef.current?.children || [], {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        mockupRef.current,
        { opacity: 0, y: 80, scale: 0.95, duration: 1.2, ease: "power3.out" },
        "-=0.5"
      );

      floatRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.to(el, {
          y: i % 2 === 0 ? -12 : 12,
          duration: 2.5 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="featured"
      aria-label="Featured product"
      className="relative overflow-hidden bg-black px-6 py-28 text-white md:py-40"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div ref={contentRef} className="mb-16 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">{product.eyebrow}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <h2 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">{product.name}</h2>
            <StatusBadge status={product.status} statusType={product.statusType} />
          </div>
          <p className="mt-4 text-2xl font-medium tracking-tight text-white/70">{product.tagline}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/50">{product.description}</p>

          <div className="mt-8 max-w-sm">
            <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/40">
              <span>Launch progress</span>
              <span>{product.progress}%</span>
            </div>
            <ProgressBar progress={product.progress} />
            <p className="mt-2 text-xs text-white/30">Target: {product.launchTarget}</p>
          </div>
        </div>

        <div ref={mockupRef} className="relative mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-1 shadow-2xl shadow-black/50">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-black/40">
              <img
                src={product.image}
                alt={`${product.name} product preview`}
                className="h-full w-full object-cover opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div
                ref={(el) => (floatRef.current[0] = el)}
                className="absolute left-6 top-6 rounded-xl border border-white/20 bg-black/60 px-4 py-3 backdrop-blur-md"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Active learners</p>
                <p className="mt-1 text-2xl font-bold text-white">2.4k+</p>
              </div>

              <div
                ref={(el) => (floatRef.current[1] = el)}
                className="absolute bottom-6 right-6 rounded-xl border border-white/20 bg-black/60 px-4 py-3 backdrop-blur-md"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Study streak</p>
                <p className="mt-1 text-2xl font-bold text-white">14 days</p>
              </div>
            </div>
          </div>

          <div
            ref={(el) => (floatRef.current[2] = el)}
            className="absolute -right-4 top-1/4 hidden rounded-xl border border-white/10 bg-[#111] p-4 shadow-xl shadow-black/40 md:block lg:-right-8"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">AI Summary</p>
            <p className="mt-2 max-w-[180px] text-sm text-white/60">Key concepts extracted in seconds.</p>
          </div>

          <div
            ref={(el) => (floatRef.current[3] = el)}
            className="absolute -left-4 bottom-1/4 hidden rounded-xl border border-white/10 bg-[#111] p-4 shadow-xl shadow-black/40 md:block lg:-left-8"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Progress</p>
            <div className="mt-2 h-1.5 w-32 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[68%] rounded-full bg-white/70" />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">Features</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.features.map((feature, i) => (
                <span
                  key={feature}
                  ref={(el) => (chipsRef.current[i] = el)}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/60 transition-all duration-300 hover:border-white/25 hover:text-white"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">Technologies</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-medium text-white/80 transition-transform duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <a
            href={product.cta.href}
            className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            {product.cta.label}
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
