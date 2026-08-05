import StatusBadge, { ProgressBarLight } from "../../ui/StatusBadge";

export default function ProjectCard({ project, index }) {
  const {
    title,
    description,
    technologies,
    tags,
    status,
    progress,
    timeline,
    contribution,
    github,
    demo,
    image,
  } = project;

  const statusType = status === "Active" ? "active" : "in-progress";

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]">
      <div className="grid lg:grid-cols-5">
        <div className="relative h-48 overflow-hidden lg:col-span-2 lg:h-auto lg:min-h-[280px]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-80"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent lg:bg-gradient-to-r" />

          <div className="absolute left-4 top-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 text-[10px] font-medium text-white/70 backdrop-blur-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between p-8 lg:col-span-3 lg:p-10">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={status} statusType={statusType} />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">{timeline}</span>
            </div>

            <h3 className="mt-5 text-2xl font-bold tracking-tight text-white transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
              {title}
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/45 md:text-base">{description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-white/35"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span key={tech} className="text-xs text-white/30">
                  {tech}
                  {technologies.indexOf(tech) < technologies.length - 1 && (
                    <span className="ml-2 text-white/15" aria-hidden="true">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/25">
              <span>{contribution}</span>
              <span>{progress}%</span>
            </div>
            <ProgressBarLight progress={progress} />

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                GitHub →
              </a>
              {demo ? (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  Live Demo →
                </a>
              ) : (
                <span className="rounded-full border border-white/5 px-5 py-2.5 text-sm text-white/20">
                  Demo coming soon
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
