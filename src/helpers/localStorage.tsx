import { useState, useEffect } from 'react';

export const useLocalStorage = (initialValue: unknown, key: string) => {
  const getValue = () => {
    const valueStorage = localStorage.getItem(key);

    if (valueStorage) {
      return JSON.parse(valueStorage);
    }

    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
