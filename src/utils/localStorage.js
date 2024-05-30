// src/utils/localStorage.js
export const savePreferences = (preferences) => {
  localStorage.setItem("userPreferences", JSON.stringify(preferences));
};

export const getPreferences = () => {
  const preferences = localStorage.getItem("userPreferences");
  return preferences
    ? JSON.parse(preferences)
    : { sources: [], categories: [] };
};
