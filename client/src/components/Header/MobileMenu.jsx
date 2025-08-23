const LINKS = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const MobileMenu = ({ open, setOpen }) => {
  if (!open) return null;

  return (
    <div className="md:hidden border-t border-border bg-background">
      <div className="px-4 py-3 space-y-2">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="block px-2 py-2 rounded-lg hover:bg-card text-foreground"
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a
          href="/login"
          className="block mt-2 px-2 py-2 rounded-lg bg-accent text-accent-foreground font-medium text-center hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
