import { useState, useCallback } from 'react';

export interface NotionData<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export const useNotionBase = <T>() => {
  const [data, setData] = useState<NotionData<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchData = useCallback(async (fetchFunction: () => Promise<T>) => {
    setData({ data: null, loading: true, error: null });
    try {
      const result = await fetchFunction();
      setData({ data: result, loading: false, error: null });
    } catch (error) {
      setData({ data: null, loading: false, error: error as Error });
    }
  }, []);

  return { data, fetchData };
};