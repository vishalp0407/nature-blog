import React from "react";

const Excerpt = ({ text }) => {
  if (!text) return null;
  return <p className="text-sm text-muted-foreground line-clamp-3">{text}</p>;
};

export default Excerpt;
