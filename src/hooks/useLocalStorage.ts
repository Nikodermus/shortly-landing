import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

type UseLocalStorage = <T>(
  initialValue: T,
  key: string
) => [T, Dispatch<SetStateAction<T>>];

const useLocalStorage: UseLocalStorage = <T>(initialValue: T, key: string) => {
  const [data, setData] = useState(initialValue);

  const checkUpdate = useCallback(
    (e): void => {
      if (e.key === key) {
        setData(JSON.parse(e.newValue));
      }
    },
    [setData, key]
  );

  useEffect(() => {
    if (!window) return;

    const item = window.localStorage.getItem(key);
    setData(item ? JSON.parse(item) : initialValue);
  }, [key, initialValue]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(data));
    window.addEventListener('storage', checkUpdate);

    return () => window.removeEventListener('storage', checkUpdate);
  }, [data, key, checkUpdate]);

  return [data, setData];
};

export default useLocalStorage;
