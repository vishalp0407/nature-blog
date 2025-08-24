import React from "react";
const LINKS = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Links = () => {
  return (
    <ul className="space-y-2">
      {LINKS.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
