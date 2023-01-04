import { useState, useEffect } from 'react';

const decode = (value: unknown) => {
  return JSON.stringify(value);
};

const encode = (value: string) => {
  return JSON.parse(value);
};

const useLocalStorage = (key: string, defaultState: string) => {
  const [value, setValue] = useState(
    encode(localStorage.getItem(key) || defaultState),
  );

  useEffect(() => {
    localStorage.setItem(key, decode(value));
  }, [value]);

  return [value, setValue];
};

export { useLocalStorage };
