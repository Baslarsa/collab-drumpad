import { useEffect, useState } from "react";

const PREFIX = "collab-drumpad-id";

const useLocalStorage = (initialValue?: () => void) => {
  const storageValue = localStorage.getItem(PREFIX);
  const [value, setValue] = useState(() => {
    if (storageValue !== null) return JSON.parse(storageValue);
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(PREFIX, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
