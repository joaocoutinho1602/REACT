import React from "react";

const Searchbox = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <input
        type="text"
        name="search"
        className="form-control"
        placeholder="Search..."
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default Searchbox;
