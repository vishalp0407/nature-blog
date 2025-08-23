import React from "react";

const MenuButton = ({ open, setOpen }) => {
  return (
    <button
      className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-card"
      aria-label="Toggle menu"
      onClick={() => setOpen((v) => !v)}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="w-5 h-5 text-foreground"
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
  );
};

export default MenuButton;
