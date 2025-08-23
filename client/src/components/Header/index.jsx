import { useState } from "react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <a
          href="/"
          className="text-xl"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          Nature Blog
        </a>

        {/* Center: Links (desktop) */}
        <ul className="hidden md:flex items-center gap-6 text-slate-300">
          {LINKS.map((l) => (
            <li key={l.href}>
              {/* anchor for now; routing later */}
              <a href={l.href} className="hover:text-slate-100 transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/login"
            className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-medium transition"
          >
            Login
          </a>
        </div>

        {/* Mobile: Hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-800 hover:bg-slate-900"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {/* simple icon */}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-slate-200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <div className="px-4 py-3 space-y-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block px-2 py-2 rounded-lg hover:bg-slate-900 text-slate-200"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/login"
              className="block mt-2 px-2 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-medium text-center"
              onClick={() => setOpen(false)}
            >
              Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
