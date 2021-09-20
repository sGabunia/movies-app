import { useState } from "react";

// Hook
function useLocalStorage(key, initialValue) {
  const [savedBgValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setSavedBgValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(savedBgValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [savedBgValue, setSavedBgValue];
}

export default useLocalStorage;
