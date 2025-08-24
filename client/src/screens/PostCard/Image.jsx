import React from "react";

const Image = ({ src, alt }) => {
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-md">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-[1.03]"
        loading="lazy"
      />
      {/* subtle gradient for title readability if needed later */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/0 via-background/0 to-background/0" />
    </div>
  );
};

export default Image;
