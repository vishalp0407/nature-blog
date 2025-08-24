import React from "react";

const Meta = ({ author = "Unkown", readTime = "-", date }) => {
  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <span>{author}</span>
      <span>•</span>
      <span>{readTime}</span>
      {date ? (
        <>
          <span>•</span>
          <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
        </>
      ) : null}
    </div>
  );
};

export default Meta;
