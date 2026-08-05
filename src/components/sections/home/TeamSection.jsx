import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMagnetic } from "../../hooks/useMagnetic";
import { useTilt } from "../../hooks/useTilt";

gsap.registerPlugin(ScrollTrigger);

export default function TeamSection({ team, teamCardsRef, onSelectMember, TeamMemberCard }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current?.children || [], {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="team" className="bg-black px-6 py-28 text-white md:py-40">
      <div className="mx-auto max-w-7xl">
        <div ref={headerRef} className="mb-20 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">{team.eyebrow}</p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{team.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/50">{team.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.members.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              onSelect={onSelectMember}
              cardRef={(el) => (teamCardsRef.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamProfilePanel({ member, onClose }) {
  const panelRef = useRef(null);
  const overlayRef = useRef(null);
  const { ref: magneticRef, onMouseMove, onMouseLeave } = useMagnetic(0.15);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(
        panelRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    });

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      ctx.revert();
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleClose = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 });
    gsap.to(panelRef.current, {
      x: "100%",
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
      onComplete: onClose,
    });
  };

  if (!member) return null;

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label={`${member.name} profile`}>
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      <aside
        ref={panelRef}
        className="absolute right-0 top-0 flex h-full w-full max-w-lg flex-col border-l border-white/10 bg-[#0a0a0a] text-white"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">Profile</span>
          <button
            type="button"
            onClick={handleClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-white/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Close profile"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-10">
          <div
            ref={magneticRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-white/20 to-white/5 text-2xl font-bold tracking-tight transition-transform duration-300"
          >
            {member.initials}
          </div>

          <h3 className="mt-8 text-center text-3xl font-bold tracking-tight">{member.name}</h3>
          <p className="mt-2 text-center text-sm uppercase tracking-[0.2em] text-white/50">{member.role}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {member.specialties.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-white/50"
              >
                {s}
              </span>
            ))}
          </div>

          <p className="mt-10 text-base leading-relaxed text-white/60">{member.bio}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            {member.portfolio && (
              <a
                href={member.portfolio.href}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                {member.portfolio.label}
              </a>
            )}
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              GitHub
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              LinkedIn
            </a>
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Email
              </a>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}

export function TeamMemberCard({ member, onSelect, cardRef }) {
  const { ref: tiltRef, onMouseMove, onMouseLeave } = useTilt(6);

  return (
    <article
      ref={cardRef}
      className="group relative cursor-pointer"
      onClick={() => onSelect(member)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(member);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View ${member.name}'s profile`}
    >
      <div
        ref={tiltRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 group-hover:border-white/25 group-hover:bg-white/[0.06] group-focus-visible:ring-2 group-focus-visible:ring-white/30"
        style={{ transition: "transform 0.15s ease-out, border-color 0.3s, background-color 0.3s" }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 40%)" }}
        />

        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-white/15 to-white/5 text-lg font-bold tracking-tight text-white">
          {member.initials}
        </div>

        <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">{member.name}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">{member.role}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {member.specialties.slice(0, 2).map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 px-2.5 py-0.5 text-[9px] uppercase tracking-widest text-white/40"
            >
              {s}
            </span>
          ))}
        </div>

        <p className="mt-5 line-clamp-2 text-sm leading-relaxed text-white/45">{member.bio}</p>

        <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/25 transition-all duration-300 group-hover:gap-3 group-hover:text-white/60">
          <span>View profile</span>
          <span aria-hidden="true">→</span>
        </div>
      </div>
    </article>
  );
}
