import { useEffect, useState } from "react";

const PREFIX = "collab-drumpad-";

const useLocalStorage = (key: string, initialValue: () => void) => {
  const prefixedKey = PREFIX + key;

  const storageValue = localStorage.getItem(prefixedKey);
  const [value, setValue] = useState(() => {
    if (storageValue !== null) return JSON.parse(storageValue);
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
