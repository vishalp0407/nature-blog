import React from "react";

const Header = ({ title, author = "unkown", date, readTime = "-" }) => {
  return (
    <header className="mb-6">
      <h1 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight">
        {title}
      </h1>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <span>{author}</span>
        <span>.</span>
        <span>{readTime}</span>
        {date ? (
          <>
            <span>
              <time dateTime={date}>
                {" "}
                {new Date(date).toLocaleDateString()}
              </time>
            </span>
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
