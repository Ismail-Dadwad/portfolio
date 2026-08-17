"use client";

import { useEffect, useState } from "react";
import { Briefcase, Layers, User } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { href: "/#work", label: "Work", icon: Briefcase },
  { href: "/#skills", label: "Stack", icon: Layers },
  { href: "/#about", label: "About", icon: User },
];

/**
 * Client Component.
 * Transparent until the page scrolls, then fades in the blurred pill
 * background — needs a scroll listener, so it can't stay a Server Component.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-3.5 z-[60] px-5 sm:px-6">
      <div
        className={`mx-auto flex max-w-[1200px] items-center justify-between rounded-full py-2.5 pl-5 pr-3 transition-all duration-300 ${
          scrolled
            ? "border border-line bg-[rgba(10,12,17,0.65)] backdrop-blur-xl backdrop-saturate-150"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a
          href="/#top"
          className="flex items-center gap-2.5 font-display text-base font-bold tracking-[-0.02em]"
        >
          <span className="flex h-[26px] w-[26px] items-center justify-center rounded-[7px] bg-brandGrad font-display text-[11px] font-bold tracking-[-0.03em] text-white">
            ID
          </span>
          {site.name}
        </a>

        <nav className="flex items-center gap-6">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="label hidden items-center gap-1.5 text-muted transition-colors hover:text-ink sm:inline-flex"
            >
              <Icon size={13} strokeWidth={2} />
              {label}
            </a>
          ))}
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
