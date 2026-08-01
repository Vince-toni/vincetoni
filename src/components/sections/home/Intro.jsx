import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const sectionRef = useRef(null);

  const eyebrowRef = useRef(null);
  const lineRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Section label
      tl.from(eyebrowRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      })

        // Divider line
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

        // Main heading
        .from(
          headingRef.current,
          {
            opacity: 0,
            y: 50,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.4"
        )

        // Description
        .from(
          descriptionRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.5"
        )

        // Pillars
        .from(
          cardRefs.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.7,
            stagger: 0.15,
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
      className="bg-white px-6 pb-32 pt-24 text-black md:pb-40 md:pt-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-16">
          <p
            ref={eyebrowRef}
            className="text-sm font-medium uppercase tracking-[0.3em] text-black/50"
          >
            01 — About VINCETONI
          </p>

          <div
            ref={lineRef}
            className="mt-6 h-px w-full origin-left bg-black/10"
          />
        </div>

        {/* Main Introduction */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">

          {/* Heading */}
          <h2
            ref={headingRef}
            className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            We turn ambitious ideas into meaningful technology.
          </h2>

          {/* Description */}
          <div
            ref={descriptionRef}
            className="max-w-xl md:ml-auto md:pt-2"
          >
            <p className="text-lg leading-relaxed text-black/60">
              VINCETONI is a growing technology organization focused on
              creating digital products, exploring emerging technologies,
              and transforming ambitious ideas into experiences that make
              a difference.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-24 grid border-t border-black/10 md:mt-28 md:grid-cols-3">

          {/* Build */}
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className="group border-b border-black/10 py-10 md:border-b-0 md:border-r md:pr-10"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-black/40">
                01
              </span>

              <span className="text-black/30 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>

            <h3 className="mt-8 text-2xl font-semibold">
              Build
            </h3>

            <p className="mt-4 leading-relaxed text-black/60">
              We turn ideas into real products that solve problems
              and create value.
            </p>
          </div>

          {/* Explore */}
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className="group border-b border-black/10 py-10 md:border-b-0 md:border-r md:px-10"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-black/40">
                02
              </span>

              <span className="text-black/30 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>

            <h3 className="mt-8 text-2xl font-semibold">
              Explore
            </h3>

            <p className="mt-4 leading-relaxed text-black/60">
              We experiment with new technologies and push the
              boundaries of what's possible.
            </p>
          </div>

          {/* Create */}
          <div
            ref={(el) => (cardRefs.current[2] = el)}
            className="group py-10 md:pl-10"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-black/40">
                03
              </span>

              <span className="text-black/30 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>

            <h3 className="mt-8 text-2xl font-semibold">
              Create
            </h3>

            <p className="mt-4 leading-relaxed text-black/60">
              We design digital experiences that are useful,
              engaging, and built to last.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}