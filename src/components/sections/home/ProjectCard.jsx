export default function ProjectCard({ project, index }) {
  const {
    name,
    status,
    category,
    description,
    image,
    projectPage,
    tryProject,
  } = project;

  return (
    <article className="group">

      {/* Project Image */}
      <div className="relative h-[200px] w-full overflow-hidden rounded-xl border border-black/10 bg-black/5 sm:h-[240px] md:h-[280px]">

        <img
          src={image}
          alt={`${name} project`}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

        {/* Project Number */}
        <div className="absolute right-4 top-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-[10px] font-medium text-white backdrop-blur-md">
            {String(index).padStart(2, "0")}
          </span>
        </div>

        {/* Project Status */}
        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-black/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
            {status}
          </span>
        </div>

      </div>

      {/* Project Info */}
      <div className="mt-6">

        {/* Project Name */}
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {name}
        </h3>

        {/* Categories */}
        <div className="mt-3 flex flex-wrap gap-2">
          {category.map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/10 px-3 py-1 text-[10px] uppercase tracking-widest text-black/50"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="mt-4 max-w-md leading-relaxed text-black/60">
          {description}
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap gap-3">

          {/* View Project */}
          {projectPage.available ? (
            <a
              href={projectPage.href}
              className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-black/80"
            >
              {projectPage.label} →
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium text-black/30"
            >
              {projectPage.unavailableLabel || "Coming Soon"}
            </button>
          )}

          {/* Try Project */}
          {tryProject.available ? (
            <a
              href={tryProject.href}
              className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white"
            >
              {tryProject.label} →
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-full border border-black/10 bg-black/[0.02] px-5 py-2.5 text-sm font-medium text-black/30"
            >
              {tryProject.label} · {tryProject.unavailableLabel}
            </button>
          )}

        </div>

      </div>

    </article>
  );
}