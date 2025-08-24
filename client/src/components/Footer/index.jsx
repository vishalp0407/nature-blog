import React from "react";
import Brand from "./Brand";
import Links from "./Links";
import Social from "./Social";
import BottomBar from "./BottomBar";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          <Brand />
          <div>
            <h4 className="font-serif text-lg mb-3 text-foreground">Links</h4>
            <Links />
          </div>
          <div>
            <h4 className="font-serif text-lg mb-3 text-foreground">Follow</h4>
            <Social />
          </div>
        </div>
        <BottomBar />
      </div>
    </footer>
  );
};

export default Footer;
