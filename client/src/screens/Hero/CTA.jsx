import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  const base =
    "rounded-md px-4 py-2 font-medium transition outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  return (
    <div className="relative z-10 mt-6 flex items-center gap-3">
      <Link
        to="/explore"
        className={`${base} bg-accent text-accent-foreground hover:opacity-90`}
      >
        Explore Posts
      </Link>
      <Link
        to="/#latest"
        className={`${base} border border-border text-foreground hover:bg-card`}
      >
        Latest
      </Link>
    </div>
  );
};

export default CTA;
