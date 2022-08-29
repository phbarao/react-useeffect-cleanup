import { useEffect, useState } from 'react';

export const useFetch = <T>(
  url: string,
  initialState: T
): [T, boolean, string] => {
  const [data, setData] = useState<T>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const abortController = new AbortController();

    setLoading(true);

    (async () => {
      try {
        const response = await fetch(url, { signal: abortController.signal });

        if (!response.ok) {
          throw Error('Could not fetch the data for that resource.');
        }

        const data = await response.json();

        setData(data);
        console.log(data);
      } catch (err) {
        if ((err as Error).name === 'AbortError') {
          console.log('fetch aborted: ', err);
        } else {
          setError((err as Error).message);
        }
      } finally {
        setLoading(false);
      }
    })();

    return () => abortController.abort();
  }, [url]);

  return [data, loading, error];
};
