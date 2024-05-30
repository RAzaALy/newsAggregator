import React, { useState, useEffect } from "react";
import { savePreferences, getPreferences } from "../utils/localStorage";
import { sources, categories } from "../config/config";
import { useNavigate } from "react-router-dom";
import { pushSuccessNotification } from "../utils/pushNotification";

const PersonalizedFeed = () => {
  const [preferences, setPreferences] = useState(getPreferences());
  const navigate = useNavigate();
  useEffect(() => {
    setPreferences(getPreferences());
  }, []);

  const handleSave = () => {
    savePreferences(preferences);
    pushSuccessNotification("Saved Preferences !");
    navigate("/");
  };

  const handleSourceChange = (value) => {
    setPreferences((prev) => ({
      ...prev,
      sources: [value],
    }));
  };

  const handleCategoryChange = (value) => {
    setPreferences((prev) => ({
      ...prev,
      categories: [value],
    }));
  };

  return (
    <div className="mx-auto max-w-lg p-4 border rounded-md shadow-lg bg-white">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <div>
        <h3 className="text-lg font-semibold mb-2">Sources</h3>
        {sources.map((source) => (
          <div key={source} className="flex items-center mb-2">
            <input
              type="radio"
              className="mr-2 cursor-pointer"
              checked={preferences.sources.includes(source)}
              onChange={() => handleSourceChange(source)}
            />
            <span>{source}</span>
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-2">
            <input
              type="radio"
              className="mr-2 cursor-pointer"
              checked={preferences.categories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <span>{category}</span>
          </div>
        ))}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        onClick={handleSave}
      >
        Save Preferences
      </button>
    </div>
  );
};

export default PersonalizedFeed;
