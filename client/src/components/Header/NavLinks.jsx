import React from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink
            to={l.href}
            className={({ isActive }) =>
              `rounded-md px-1.5 py-1 transition outline-none
               focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background
               ${
                 isActive
                   ? "text-foreground underline underline-offset-4"
                   : "hover:text-foreground"
               }`
            }
          >
            {l.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
