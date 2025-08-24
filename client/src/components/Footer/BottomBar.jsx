import React from "react";

const BottomBar = () => {
  const year = new Date().getFullYear();
  return (
    <div className="border-t border-border mt-8 pt-4 flex flex-col md:flex-row items-center justify-between gap-3">
      <p className="text-xs text-muted-foreground">
        © {year} Nature Blog. All rights reserved.
      </p>
      <div className="flex items-center gap-4 text-xs">
        <a href="#" className="text-muted-foreground hover:text-foreground">
          Privacy
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground">
          Terms
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground">
          Sitemap
        </a>
      </div>
    </div>
  );
};

export default BottomBar;
