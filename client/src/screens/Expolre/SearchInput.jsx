import React from "react";

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2">
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 text-muted-foreground"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="7"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
      <input
        className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground"
        placeholder="Search posts"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
