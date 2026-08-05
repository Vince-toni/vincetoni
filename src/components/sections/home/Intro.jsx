import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { siteData } from "../../data";
import { theme } from "../../Design-token";
import TeamSection, { TeamMemberCard, TeamProfilePanel } from "./TeamSection";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const lineRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const pillarsRef = useRef([]);
  const valuesRef = useRef([]);
  const storyRef = useRef([]);
  const teamCardsRef = useRef([]);

  const [selectedMember, setSelectedMember] = useState(null);

  const { about, team } = siteData;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(eyebrowRef.current, { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" })
        .from(lineRef.current, { scaleX: 0, transformOrigin: "left center", duration: 0.8, ease: "power3.out" }, "-=0.3")
        .from(headingRef.current, { opacity: 0, y: 40, duration: 0.8, ease: "power3.out" }, "-=0.35")
        .from(descriptionRef.current, { opacity: 0, y: 30, duration: 0.7, ease: "power2.out" }, "-=0.45")
        .from(pillarsRef.current, { opacity: 0, y: 40, stagger: 0.15, duration: 0.7, ease: "power3.out" }, "-=0.2");

      gsap.from(storyRef.current, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current[0],
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(valuesRef.current, {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: valuesRef.current[0],
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const storyBlocks = [
    { key: "philosophy", data: about.philosophy },
    { key: "mission", data: about.mission },
    { key: "vision", data: about.vision },
  ];

  return (
    <>
      <section
        ref={sectionRef}
        id="about"
        className={`${theme.colors.sectionGradient} ${theme.spacing.sectionCompact} text-white`}
      >
        <div className={theme.spacing.container}>
          <div className="mb-20">
            <p ref={eyebrowRef} className={`${theme.typography.eyebrow} ${theme.colors.muted}`}>
              {about.eyebrow}
            </p>
            <div ref={lineRef} className={`mt-8 h-px w-full origin-left ${theme.colors.line}`} />
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <h2 ref={headingRef} className={`${theme.typography.heading} ${theme.colors.heading}`}>
              {about.title}
            </h2>
            <div ref={descriptionRef} className="max-w-xl md:ml-auto">
              <p className={`${theme.typography.body} ${theme.colors.body}`}>{about.description}</p>
            </div>
          </div>

          <div className={`mt-28 grid ${theme.colors.border} border-t md:grid-cols-3`}>
            {about.pillars.map((pillar, index) => (
              <article
                key={pillar.id}
                ref={(el) => (pillarsRef.current[index] = el)}
                className={`group py-10 ${
                  index !== about.pillars.length - 1
                    ? `border-b ${theme.colors.border} md:border-b-0 md:border-r`
                    : ""
                } ${index === 0 ? "md:pr-10" : ""} ${index === 1 ? "md:px-10" : ""} ${index === 2 ? "md:pl-10" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className={theme.colors.muted}>{pillar.id}</span>
                  <span className={`${theme.colors.muted} transition-transform duration-300 group-hover:translate-x-1`}>→</span>
                </div>
                <h3 className={`mt-8 ${theme.typography.cardTitle} ${theme.colors.heading}`}>{pillar.title}</h3>
                <p className={`mt-4 ${theme.typography.body} ${theme.colors.body}`}>{pillar.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-32 grid gap-16 md:grid-cols-3">
            {storyBlocks.map((block, index) => (
              <article
                key={block.key}
                ref={(el) => (storyRef.current[index] = el)}
                className="group"
              >
                <div className="mb-6 h-px w-12 bg-white/20 transition-all duration-500 group-hover:w-full" />
                <h3 className="text-xl font-semibold tracking-tight text-white">{block.data.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-white/50">{block.data.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-32">
            <p className={`${theme.typography.eyebrow} ${theme.colors.muted}`}>Our Values</p>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
              {about.values.map((value, index) => (
                <article
                  key={value.id}
                  ref={(el) => (valuesRef.current[index] = el)}
                  className="group bg-black/40 p-8 transition-colors duration-300 hover:bg-white/[0.04]"
                >
                  <span className="text-xs tracking-[0.25em] text-white/25">{value.id}</span>
                  <h4 className="mt-4 text-lg font-semibold tracking-tight text-white">{value.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/45">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TeamSection
        team={team}
        teamCardsRef={teamCardsRef}
        onSelectMember={setSelectedMember}
        TeamMemberCard={TeamMemberCard}
      />

      {selectedMember && (
        <TeamProfilePanel member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </>
  );
}
