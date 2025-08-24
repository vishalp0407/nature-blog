import React from "react";

const ActiveFilters = ({
  search,
  tags = [],
  category,
  location,
  onClearTag,
  onClearAll,
}) => {
  const hasAny = Boolean(
    search ||
      tags.length ||
      (category && category !== "All") ||
      (location && location !== "Any")
  );
  if (!hasAny) return null;
  return (
    <div className="flex flex-wrap items-center gap-2">
      {search ? (
        <span className="px-2.5 py-1 rounded-full border border-border bg-card text-xs">
          Search: <b>{search}</b>
        </span>
      ) : null}
      {tags.map((t) => (
        <button
          key={t}
          onClick={() => onClearTag(t)}
          className="px-2.5 py-1 rounded-full border border-border bg-card text-xs hover:bg-card/80"
          title="Remove"
        >
          {t} X
        </button>
      ))}
      {category && category !== "All" ? (
        <span className="px-2.5 py-1 rounded-full border border-border bg-card text-xs">
          Category: <b>{category}</b>
        </span>
      ) : null}
      {location && location !== "Any" ? (
        <span className="px-2.5 py-1 rounded-full border border-border bg-card text-xs">
          Location: <b>{location}</b>
        </span>
      ) : null}
      <button
        onClick={onClearAll}
        className="ml-2 px-3 py-1.5 rounded-md border border-border text-xs hover:bg-card"
      >
        Clear all
      </button>
    </div>
  );
};

export default ActiveFilters;
