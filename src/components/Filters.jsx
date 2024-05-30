import React from "react";
import { sources, categories } from "../config/config";

function Filters({ filters, setFilters, toggleFilter }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleDropdownChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <>
      {toggleFilter && (
        <div className="flex justify-center flex-wrap mt-4">
          {/* <h2 className="text-3xl m-2">Filters</h2> */}
          <input
            type="date"
            name="date"
            value={filters.date}
            onChange={handleInputChange}
            className="p-2 border rounded m-2"
          />
          <div className="relative inline-block text-left">
            <select
              name="category"
              value={filters.category}
              onChange={(e) => handleDropdownChange("category", e.target.value)}
              className="p-2 border rounded m-2"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="relative inline-block text-left">
            <select
              name="source"
              value={filters.source}
              onChange={(e) => handleDropdownChange("source", e.target.value)}
              className="p-2 border rounded m-2"
            >
              <option value="">Select Source</option>
              {sources.map((source) => (
                <option key={source} value={source}>
                  {source}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </>
  );
}

export default Filters;
