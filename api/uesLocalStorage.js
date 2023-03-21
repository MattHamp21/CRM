import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    const fetchStoredValue = () => {
      try {
        const item = window.localStorage.getItem(key);
        setStoredValue(item ? item : initialValue);
      } catch (error) {
        console.error(error);
        setStoredValue(initialValue);
      }
    };

    fetchStoredValue();
  }, [key, initialValue]);

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key) {
        setValue(e.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];
}
