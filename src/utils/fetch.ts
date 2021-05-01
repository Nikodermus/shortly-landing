const customFetch = async <T>(
  input: string,
  init?: RequestInit
): Promise<T> => {
  const res = await fetch(input, init);

  if (!res || !res.ok) {
    Promise.reject(res);
  }

  const data = await res.json();
  return data;
};

export default customFetch;
