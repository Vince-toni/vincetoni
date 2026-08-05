import StatusBadge, { ProgressBar } from "../../ui/StatusBadge";

function FeaturedLayout({ product }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]">
      <div className="grid md:grid-cols-2">
        <div className="relative h-64 overflow-hidden md:h-auto md:min-h-[360px]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 md:bg-gradient-to-l md:from-transparent md:to-black/60" />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-12">
          <StatusBadge status={product.status} statusType={product.statusType} />
          <h3 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">{product.name}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.categories.map((cat) => (
              <span key={cat} className="text-[10px] uppercase tracking-widest text-white/40">{cat}</span>
            ))}
          </div>
          <p className="mt-5 text-base leading-relaxed text-white/50">{product.description}</p>
          <div className="mt-6">
            <div className="mb-2 flex justify-between text-[10px] uppercase tracking-[0.2em] text-white/30">
              <span>Progress</span>
              <span>{product.progress}%</span>
            </div>
            <ProgressBar progress={product.progress} />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {product.technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-white/45">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function HorizontalLayout({ product }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black transition-all duration-500 hover:border-white/20">
      <div className="p-8 md:p-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <StatusBadge status={product.status} statusType={product.statusType} />
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">{product.name}</h3>
          </div>
          <div className="hidden h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-white/10 sm:block">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" />
          </div>
        </div>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/50">{product.description}</p>
        <div className="mt-6">
          <ProgressBar progress={product.progress} />
          <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/30">{product.progress}% complete</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {product.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-white/40">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function MinimalLayout({ product }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-dashed border-white/15 bg-transparent p-8 transition-all duration-500 hover:border-white/30 md:p-10">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm text-white/30">?</span>
        <StatusBadge status={product.status} statusType={product.statusType} />
      </div>
      <h3 className="mt-6 text-2xl font-bold tracking-tight text-white/70">{product.name}</h3>
      <p className="mt-4 text-sm leading-relaxed text-white/40">{product.description}</p>
      <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/25 transition-all duration-300 group-hover:gap-3 group-hover:text-white/50">
        <span>Stay tuned</span>
        <span aria-hidden="true">→</span>
      </div>
    </article>
  );
}

export default function ProductCard({ product }) {
  switch (product.layout) {
    case "featured":
      return <FeaturedLayout product={product} />;
    case "horizontal":
      return <HorizontalLayout product={product} />;
    case "minimal":
      return <MinimalLayout product={product} />;
    default:
      return <FeaturedLayout product={product} />;
  }
}
