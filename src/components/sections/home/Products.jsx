import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { siteData } from "../../data";
import ProductCard from "./ProductCard";

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  const { products } = siteData;

  useGSAP(
    () => {
      gsap.from(headerRef.current?.children || [], {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="products"
      aria-label="Products"
      className="bg-[#0a0a0a] px-6 pb-28 text-white md:pb-40"
    >
      <div className="mx-auto max-w-7xl">
        <div ref={headerRef} className="mb-16 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">{products.eyebrow}</p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{products.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/50">{products.description}</p>
        </div>

        <div className="space-y-6">
          {products.items.map((product, index) => (
            <div key={product.id} ref={(el) => (cardsRef.current[index] = el)}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
