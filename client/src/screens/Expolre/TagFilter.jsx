import React from "react";

const TAGS = [
  "Forests",
  "Oceans",
  "Wildlife",
  "Climate",
  "Rivers",
  "Mountains",
];

const TagFilter = ({ selected = [], onToggle }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {TAGS.map((t) => {
        const active = selected.includes(t);
        return (
          <button
            key={t}
            onClick={() => onToggle(t)}
            className={`px-3 py-1.5 rounded-full border text-sm transition
              ${
                active
                  ? "bg-accent text-accent-foreground border-transparent"
                  : "bg-card text-foreground border-border hover:bg-card/80"
              }`}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
};

export default TagFilter;
