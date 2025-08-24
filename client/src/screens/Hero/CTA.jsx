import React from "react";

const CTA = () => {
  return (
    <div className="relative z-10 mt-6 flex items-center gap-3">
      <a
        href="/explore"
        className="px-4 py-2 rounded-md bg-accent text-accent-foreground font-medium hover:opacity-90 transition"
      >
        Explore Posts
      </a>
      <a
        href="#latest"
        className="px-4 py-2 rounded-md border border-border text-foreground hover:bg-card transition"
      >
        Latest
      </a>
    </div>
  );
};

export default CTA;
