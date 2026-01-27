import { fetchWithTimeout } from "@/utils/fetchWithTimeout";
export const base_url = process.env.NEXT_PUBLIC_BASE_URL ?? "";

export async function fetchApi(url: string) {
  try {
    const response = await fetchWithTimeout(`${base_url}/api/${url}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function searchListApi(url: string, query: { key: string }) {
  try {
    const response = await fetchWithTimeout(`${base_url}/api/${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("searh apiiiiiii", query);
    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
}
