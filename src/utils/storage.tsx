const storage = {
  get: (key: string): string | null => {
    const result = localStorage.getItem(key);

    if (!result) return null;

    return result;
  },

  set: (key: string, value: string): void => {
    localStorage.setItem(key, value);
  },
};

export { storage };
