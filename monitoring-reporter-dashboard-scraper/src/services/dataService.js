export const fetchData = async () => {
  const response = await fetch('/api/data');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return await response.json();
};