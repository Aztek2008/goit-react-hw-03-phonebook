import React from "react";

export default function Filter({ value, onChangeFilter }) {
  return (
    <label>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={(e) => onChangeFilter(e.target)}
        placeholder="Search contact..."
      />
    </label>
  );
}
