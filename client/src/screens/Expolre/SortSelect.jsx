import React from "react";

const SORTS = [
  { label: "Newest", value: "newest" },
  { label: "Popular", value: "popular" },
];
const SortSelect = ({ value = "newst", onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm"
    >
      {SORTS.map((s) => (
        <option key={s.value} value={s.value}>
          {s.label}
        </option>
      ))}
    </select>
  );
};

export default SortSelect;
