import { useState, useEffect } from "react";

const useGetFromLocalStorage = (key: string, initialValue: object) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialValue;
  });
  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      setValue(JSON.parse(storedValue));
    }
  }, [key]);

  const setValueInLocalStorage = (newValue: object) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setValueInLocalStorage];
};

export default useGetFromLocalStorage;
