import React from "react";

const Cover = ({ src, alt = "Cover image" }) => {
  if (!src) return null;
  return (
    <figure className="mb-6 rounded-lg overflow-hidden border border-border bg-card">
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
    </figure>
  );
};

export default Cover;
