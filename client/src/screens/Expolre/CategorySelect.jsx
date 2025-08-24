import React from "react";

const CATEGORIES = ["All", "Essay", "Photo Essay", "Research", "News"];
const CategorySelect = ({ value = "All", onChange }) => {
  console.log(value);
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm"
    >
      {CATEGORIES.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
