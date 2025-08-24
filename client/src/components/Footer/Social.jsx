const SOCIAL = [
  { label: "X", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Instagram", href: "#" },
];

const Social = () => {
  return (
    <div className="flex items-center gap-3">
      {SOCIAL.map((s) => (
        <a
          key={s.label}
          href={s.href}
          className="text-muted-foreground hover:text-foreground text-sm transition"
          aria-label={s.label}
        >
          {s.label}
        </a>
      ))}
    </div>
  );
};

export default Social;
