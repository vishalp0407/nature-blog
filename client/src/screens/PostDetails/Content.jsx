import React from "react";

const Content = ({ children }) => {
  return (
    <article className="prose prose-invert prose-headings:font-serif prose-img:rounded-lg max-w-none">
      {children}
    </article>
  );
};

export default Content;
