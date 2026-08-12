import { site } from "@/data/site";
import Reveal from "./Reveal";

const links = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Phone", value: site.phone, href: site.phoneHref },
  { label: "LinkedIn", value: site.linkedinLabel, href: site.linkedin, external: true },
  { label: "Résumé", value: "Download CV (PDF)", href: site.resume, download: true },
];

/** Server Component. */
export default function Contact() {
  return (
    <section className="relative z-[2] py-24">
      <div className="wrap">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-line bg-gradient-to-b from-brand/10 to-violet/[0.05] p-8 sm:p-12 lg:p-16">
            <span className="label mb-4 inline-flex items-center gap-2.5 text-faint before:block before:h-px before:w-[26px] before:bg-brandGrad before:content-['']">
              Contact
            </span>
            <h2 className="font-display text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.04] tracking-[-0.04em]">
              Need someone who can design it —
              <br />
              then actually build it?
            </h2>
            <p className="mt-4 max-w-[58ch] text-muted">
              Available now for full-time or contract. Usually reply the same day.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  download={link.download}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between gap-3.5 rounded-2xl border border-line bg-bg/40 px-5 py-[18px] transition-all duration-300 hover:-translate-y-0.5 hover:border-lineHi hover:bg-bg/70"
                >
                  <b className="break-words font-display text-[16.5px] font-semibold tracking-[-0.01em]">
                    {link.value}
                  </b>
                  <span className="label text-faint">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="wrap">
        <footer className="flex flex-wrap justify-between gap-2.5 py-9 text-sm text-faint">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span className="label">{site.location} · Open to relocation</span>
        </footer>
      </div>
    </section>
  );
}
