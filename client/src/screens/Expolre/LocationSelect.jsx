import React from "react";

const LOCATIONS = ["Any", "Amazon", "Arctic", "Sahara", "Himalaya", "Pacific"];
const LocationSelect = ({ value = "Any", onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm"
    >
      {LOCATIONS.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
};

export default LocationSelect;
