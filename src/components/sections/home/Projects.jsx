import { useRef, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { siteData } from "../../data";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

// ─── Utils ─────────────────────────────────────────────
const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// ─── Component ─────────────────────────────────────────
export default function Projects() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const featuredRef = useRef(null);
  
  // Map-based refs: handles add/remove/reorder without stale entries
  const cardsRef = useRef(new Map());

  const setCardRef = useCallback((el, id) => {
    if (el) {
      cardsRef.current.set(id, el);
    } else {
      cardsRef.current.delete(id);
    }
  }, []);

  const { projects } = siteData;
  const featuredProject = projects.items[0];
  const otherProjects = projects.items.slice(1);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
          fastScrollEnd: true,
          preventOverlaps: true,
        },
      });

      tl.from(eyebrowRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          titleRef.current,
          { opacity: 0, y: 40, duration: 0.8, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          featuredRef.current,
          { opacity: 0, y: 60, duration: 1, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          Array.from(cardsRef.current.values()),
          { opacity: 0, y: 50, duration: 0.8, stagger: 0.15, ease: "power3.out" },
          "-=0.4"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="work"
      aria-label="Projects showcase"
      className="bg-[#f7f7f5] px-6 pb-32 pt-20 text-black md:pb-40 md:pt-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <p
            ref={eyebrowRef}
            className="text-sm font-medium uppercase tracking-[0.3em] text-black/50"
          >
            {projects.eyebrow}
          </p>

          <h2
            ref={titleRef}
            className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            {projects.title}
          </h2>
        </div>

        {/* Featured Project */}
        <div ref={featuredRef}>
          <article className="group">
            {/* Featured Image */}
            <div className="relative mx-auto h-[240px] w-full max-w-5xl overflow-hidden rounded-xl border border-black/10 bg-black/5 sm:h-[320px] md:h-[380px]">
              <img
                src={featuredProject.image}
                alt={`${featuredProject.name} project preview`}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true" />

              <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                <span className="rounded-full bg-black/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  Featured
                </span>
              </div>

              <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-[10px] text-white backdrop-blur-md"
                  aria-label="Project number 1"
                >
                  01
                </span>
              </div>
            </div>

            {/* Featured Info */}
            <div className="mx-auto mt-8 grid max-w-5xl gap-8 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-black/40" aria-hidden="true" />
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-black/50">
                    {featuredProject.status}
                  </span>
                </div>

                <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {featuredProject.name}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2" role="list" aria-label="Project categories">
                  {featuredProject.category.map((item) => (
                    <span
                      key={item}
                      role="listitem"
                      className="rounded-full border border-black/10 px-3 py-1 text-[10px] uppercase tracking-widest text-black/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="max-w-lg md:ml-auto">
                <p className="text-base leading-relaxed text-black/60 sm:text-lg">
                  {featuredProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={featuredProject.projectPage.href}
                    className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  >
                    View Project
                    <span aria-hidden="true" className="ml-1">→</span>
                  </a>

                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="cursor-not-allowed rounded-full border border-black/10 bg-black/[0.02] px-5 py-2.5 text-sm font-medium text-black/30"
                  >
                    Try Project · Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-32 grid gap-16 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => setCardRef(el, project.id)}
              >
                <ProjectCard project={project} index={index + 1} />
              </div>
            ))}
          </div>
        )}

        {/* View All Projects */}
        <div className="mt-24 flex justify-center">
          <a
            href="/work"
            className="group inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] transition-colors hover:text-black/70 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Explore all projects
            <span className="transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}