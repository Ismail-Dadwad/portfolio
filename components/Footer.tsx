import { site } from "@/data/site";

/** Server Component. */
export default function Footer() {
  return (
    <div className="wrap">
      <footer className="flex flex-wrap justify-between gap-2.5 border-t border-line py-9 text-sm text-faint">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span className="label">{site.location} · Open to relocation</span>
      </footer>
    </div>
  );
}
