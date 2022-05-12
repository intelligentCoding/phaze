import fetch from "cross-fetch";

export const get = async (
    path: string,
    apiKey: string,
    apiBase: string,
  ): Promise<any> => {
    if (!apiKey) {
      throw new Error("Must have an api");
    }
    const url = `${apiBase}${path}?apiKey=${apiKey}`;
    const response = await fetch(url);
    if (response.status >= 400) {
      const message = await response.text();
      throw new Error(message);
    }
    return response.json();
  };