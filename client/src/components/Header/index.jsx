import React, { useState } from "react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <Logo />

        {/* Center: Links (desktop) */}
        <NavLinks />

        {/* Right: Login button (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/login"
            className="px-3 py-1.5 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <MenuButton open={open} setOpen={setOpen} />
      </nav>

      {/* Mobile dropdown */}
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
