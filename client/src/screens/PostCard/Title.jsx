import React from "react";

const Title = ({ href = "#", children }) => {
  return (
    <a
      href={href}
      className="font-serif text-xl md:text-[1.35rem] leading-snug hover:underline underline-offset-4"
    >
      {children}
    </a>
  );
};

export default Title;
