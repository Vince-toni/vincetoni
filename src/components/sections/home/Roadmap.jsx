import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { siteData } from "../../data";

gsap.registerPlugin(ScrollTrigger);

const TIMELINE_X = 7; // center axis for line + dots (px)

export default function Roadmap() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const timelineRef = useRef(null);
  const progressRef = useRef(null);

  const itemsRef = useRef([]);
  const dotsRef = useRef([]);

  const { roadmap } = siteData;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /*
      ==========================================
      HEADER ANIMATION
      ==========================================
      */

      gsap.from(
        [
          eyebrowRef.current,
          titleRef.current,
          descriptionRef.current,
        ],
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );


      /*
      ==========================================
      ROADMAP ITEMS REVEAL
      ==========================================
      */

      gsap.from(itemsRef.current, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });


      gsap.fromTo(
        progressRef.current,
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",

          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 65%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );



      dotsRef.current.forEach((dot, index) => {

        ScrollTrigger.create({
          trigger: itemsRef.current[index],

          start: "top 60%",
          end: "bottom 60%",

          onEnter: () => {
            gsap.to(dot, {
              scale: 1.4,
              backgroundColor: "#ffffff",
              duration: 0.3,
              ease: "power2.out",
            });
          },

          onLeave: () => {
            gsap.to(dot, {
              scale: 1,
              backgroundColor: "rgba(255,255,255,0.3)",
              duration: 0.3,
            });
          },

          onEnterBack: () => {
            gsap.to(dot, {
              scale: 1.4,
              backgroundColor: "#ffffff",
              duration: 0.3,
            });
          },

          onLeaveBack: () => {
            gsap.to(dot, {
              scale: 1,
              backgroundColor: "rgba(255,255,255,0.3)",
              duration: 0.3,
            });
          },
        });

      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);


  return (
    <section
      ref={sectionRef}
      id="roadmap"
      className="relative overflow-hidden bg-black px-6 py-28 text-white md:py-40"
    >

      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-3xl" />


      <div className="relative mx-auto max-w-7xl">

        <div className="grid gap-20 md:grid-cols-2 md:gap-24">


          {/* ================================= */}
          {/* LEFT SIDE */}
          {/* ================================= */}

          <div className="md:sticky md:top-32 md:h-fit">

            <p
              ref={eyebrowRef}
              className="text-xs font-medium uppercase tracking-[0.3em] text-white/40"
            >
              {roadmap.eyebrow}
            </p>

            <h2
              ref={titleRef}
              className="mt-6 max-w-lg text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
            >
              {roadmap.title}
            </h2>

            <p
              ref={descriptionRef}
              className="mt-8 max-w-md text-base leading-relaxed text-white/50 sm:text-lg"
            >
              {roadmap.description}
            </p>


            {/* Small Direction Indicator */}

            <div className="mt-12 hidden items-center gap-3 md:flex">

              <span className="relative flex h-3 w-3">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/30" />

                <span className="relative inline-flex h-3 w-3 rounded-full bg-white/60" />

              </span>

              <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                Moving forward
              </span>

            </div>

          </div>


          {/* ================================= */}
          {/* RIGHT SIDE ROADMAP */}
          {/* ================================= */}

          <div
            ref={timelineRef}
            className="relative"
          >
            {/* Base timeline line */}
            <div
              className="absolute top-0 h-full w-px bg-white/10"
              style={{ left: `${TIMELINE_X}px` }}
            />

            {/* Animated progress line */}
            <div
              ref={progressRef}
              className="absolute top-0 h-full w-px origin-top bg-white/70"
              style={{ left: `${TIMELINE_X}px` }}
            />

            {/* Roadmap items */}
            <div className="space-y-0">
              {roadmap.items.map((item, index) => (
                <article
                  key={item.number}
                  ref={(el) => {
                    itemsRef.current[index] = el;
                  }}
                  className="group relative rounded-r-xl pb-20 pl-10 pr-4 transition-colors duration-500 last:pb-0 hover:bg-white/[0.02] md:pb-28"
                >
                  <span
                    ref={(el) => {
                      dotsRef.current[index] = el;
                    }}
                    className="absolute top-1.5 h-[15px] w-[15px] -translate-x-1/2 rounded-full border border-white/20 bg-white/30 transition-all duration-300 group-hover:border-white/50 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                    style={{ left: `${TIMELINE_X}px` }}
                  />


                  {/* Number */}

                  <span className="text-xs font-medium tracking-[0.25em] text-white/30">
                    {item.number}
                  </span>


                  {/* Title */}

                  <h3 className="mt-5 max-w-lg text-3xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">
                    {item.title}
                  </h3>


                  {/* Description */}

                  <p className="mt-5 max-w-lg text-base leading-relaxed text-white/45 sm:text-lg">
                    {item.description}
                  </p>


                  {/* Hover Arrow */}

                  <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/20 transition-all duration-500 group-hover:gap-5 group-hover:text-white/60">

                    <span>
                      Step {item.number}
                    </span>

                    <span>
                      →
                    </span>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}