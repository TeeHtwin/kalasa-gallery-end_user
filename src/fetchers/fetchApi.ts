const base_url = process.env.NEXT_BASE_API_URL;
export default async function fetchApi(url: string) {
  try {
    const response = await fetch(`${base_url}/api/enduser/${url}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
