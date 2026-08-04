import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { siteData } from "../../data";
import { theme } from "../../Design-token";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const sectionRef = useRef(null);

  const eyebrowRef = useRef(null);
  const lineRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  const cardsRef = useRef([]);

  const { about } = siteData;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(eyebrowRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          lineRef.current,
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          headingRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .from(
          descriptionRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.45"
        )
        .from(
          cardsRef.current,
          {
            opacity: 0,
            y: 40,
            stagger: 0.15,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`${theme.colors.heroGradient} ${theme.spacing.sectionCompact}`}
    >
      <div className={theme.spacing.container}>

        {/* Header */}
        <div className="mb-20">
          <p
            ref={eyebrowRef}
            className={`${theme.typography.eyebrow} ${theme.colors.mutedLight}`}
          >
            {about.eyebrow}
          </p>

          <div
            ref={lineRef}
            className={`mt-8 h-px w-full origin-left ${theme.colors.lineLight}`}
          />
        </div>

        {/* Intro */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">

          <h2
            ref={headingRef}
            className={`${theme.typography.heading} ${theme.colors.headingLight}`}
          >
            {about.title}
          </h2>

          <div
            ref={descriptionRef}
            className="max-w-xl md:ml-auto"
          >
            <p
              className={`${theme.typography.body} ${theme.colors.bodyLight}`}
            >
              {about.description}
            </p>
          </div>

        </div>

        {/* Pillars */}
        <div
          className={`mt-28 grid ${theme.colors.borderLight} border-t md:grid-cols-3`}
        >
          {about.pillars.map((pillar, index) => (
            <article
              key={pillar.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`
                group py-10
                ${
                  index !== about.pillars.length - 1
                    ? `border-b ${theme.colors.borderLight} md:border-b-0 md:border-r`
                    : ""
                }
                ${index === 0 ? "md:pr-10" : ""}
                ${index === 1 ? "md:px-10" : ""}
                ${index === 2 ? "md:pl-10" : ""}
              `}
            >
              <div className="flex items-center justify-between">

                <span className={theme.colors.mutedLight}>
                  {pillar.id}
                </span>

                <span
                  className={`${theme.colors.mutedLight} transition-transform duration-300 group-hover:translate-x-1`}
                >
                  →
                </span>

              </div>

              <h3
                className={`mt-8 ${theme.typography.cardTitle} ${theme.colors.headingLight}`}
              >
                {pillar.title}
              </h3>

              <p
                className={`mt-4 ${theme.typography.body} ${theme.colors.bodyLight}`}
              >
                {pillar.description}
              </p>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}