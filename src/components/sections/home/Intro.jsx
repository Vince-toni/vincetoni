import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Intro() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // We'll add the scroll animation here
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-white px-6 py-32 text-black md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-20">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-black/50">
            01 — About VINCETONI
          </p>
        </div>

        {/* Main Introduction */}
        <div className="grid gap-12 md:grid-cols-2">

          {/* Heading */}
          <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            We turn ambitious ideas into meaningful technology.
          </h2>

          {/* Description */}
          <div className="max-w-xl md:ml-auto">
            <p className="text-lg leading-relaxed text-black/60">
              VINCETONI is a growing technology organization focused on
              creating digital products, exploring emerging technologies,
              and transforming ambitious ideas into experiences that make
              a difference.
            </p>
          </div>

        </div>

        {/* Pillars */}
        <div className="mt-32 grid border-t border-black/10 md:grid-cols-3">

          {/* Build */}
          <div className="border-b border-black/10 py-10 md:border-b-0 md:border-r md:pr-10">
            <span className="text-sm text-black/40">01</span>

            <h3 className="mt-8 text-2xl font-semibold">
              Build
            </h3>

            <p className="mt-4 leading-relaxed text-black/60">
              We turn ideas into real products that solve problems
              and create value.
            </p>
          </div>

          {/* Explore */}
          <div className="border-b border-black/10 py-10 md:border-b-0 md:px-10 md:border-r">
            <span className="text-sm text-black/40">02</span>

            <h3 className="mt-8 text-2xl font-semibold">
              Explore
            </h3>

            <p className="mt-4 leading-relaxed text-black/60">
              We experiment with new technologies and push the
              boundaries of what's possible.
            </p>
          </div>

          {/* Create */}
          <div className="py-10 md:pl-10">
            <span className="text-sm text-black/40">03</span>

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