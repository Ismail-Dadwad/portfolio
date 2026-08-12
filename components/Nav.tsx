import { site } from "@/data/site";

/** Server Component — no state, no browser APIs, so it ships zero JS. */
export default function Nav() {
  return (
    <header className="fixed left-0 right-0 top-3.5 z-[60] px-5 sm:px-6">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between rounded-full border border-line bg-[rgba(10,12,17,0.65)] py-2.5 pl-5 pr-3 backdrop-blur-xl backdrop-saturate-150">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-base font-bold tracking-[-0.02em]"
        >
          <span className="flex h-[26px] w-[26px] items-center justify-center rounded-[7px] bg-brandGrad font-display text-[11px] font-bold tracking-[-0.03em] text-white">
            ID
          </span>
          {site.name}
        </a>

        <nav className="flex items-center gap-6">
          <a href="#work" className="label hidden text-muted transition-colors hover:text-ink sm:block">
            Work
          </a>
          <a href="#skills" className="label hidden text-muted transition-colors hover:text-ink sm:block">
            Stack
          </a>
          <a href="#about" className="label hidden text-muted transition-colors hover:text-ink sm:block">
            About
          </a>
          <a
            href={site.resume}
            download
            className="rounded-full bg-ink px-[18px] py-2.5 text-sm font-semibold text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(79,124,255,0.3)]"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}
