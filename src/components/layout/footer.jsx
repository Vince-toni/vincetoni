import { siteData } from "../data";

function FooterLinkGroup({ title, links }) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">{title}</h3>
      <ul className="mt-6 space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white focus:outline-none focus:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const { footer, brand } = siteData;

  return (
    <footer className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-black text-white">
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Background (1).svg')" }}
        aria-hidden="true"
      />

      {/* VINCETONI wordmark — 80% viewport width */}
      <div
        className="pointer-events-none absolute inset-0 flex items-end justify-center overflow-hidden pb-[8vh]"
        aria-hidden="true"
      >
        <span
          className="w-[80vw] select-none text-center text-[clamp(3rem,14vw,12rem)] font-bold leading-[0.85] tracking-tighter text-white/[0.04]"
        >
          {brand.name}
        </span>
      </div>

      {/* Dark overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black/95"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-10 pt-32 md:pt-40">
        <div className="grid gap-16 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="/" className="text-lg font-bold tracking-widest text-white transition-opacity hover:opacity-80">
              {brand.name}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/40">{footer.tagline}</p>

            <div className="mt-8 space-y-2">
              <a
                href={`mailto:${footer.contact.email}`}
                className="block text-sm text-white/50 transition-colors hover:text-white"
              >
                {footer.contact.email}
              </a>
              <a
                href={`tel:${footer.contact.phone.replace(/\s/g, "")}`}
                className="block text-sm text-white/50 transition-colors hover:text-white"
              >
                {footer.contact.phone}
              </a>
            </div>
          </div>

          <FooterLinkGroup title="Company" links={footer.links.company} />
          <FooterLinkGroup title="Products" links={footer.links.products} />
          <FooterLinkGroup title="Projects" links={footer.links.projects} />
        </div>

        <div className="flex flex-col items-start justify-between gap-8 pt-10 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-6">
            {footer.social.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.2em] text-white/30 transition-all duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-white/25">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
