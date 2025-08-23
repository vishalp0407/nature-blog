import React from "react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
const NavLinks = () => {
  return (
    <ul className="hidden md:flex items-center gap-6 text-muted-foreground">
      {LINKS.map((l) => (
        <li key={l.href}>
          <a href={l.href} className="hover:text-foreground transition">
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
