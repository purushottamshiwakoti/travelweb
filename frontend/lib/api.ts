const url = process.env.APIURL || "http://localhost:1337";
export const apiCall = async (path: string, params: string) => {
  try {
    const res = await fetch(`${url}/${path}?${params}&locale=${"en"}`, {
      next: { revalidate: 10 },
    });
    const data = await res.json();
    return data.data;
  } catch (error) {
    return error;
  }
};
export const apiCallPaginate = async (path: string, params: string) => {
  try {
    const res = await fetch(`${url}/${path}?${params}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};
