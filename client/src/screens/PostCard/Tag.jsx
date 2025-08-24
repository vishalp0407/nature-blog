import React from "react";

const Tag = ({ label }) => {
  if (!label) return null;
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs border border-border bg-card/60">
      {label}
    </span>
  );
};

export default Tag;
