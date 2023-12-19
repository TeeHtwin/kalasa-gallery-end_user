const base_url = process.env.NEXT_BASE_API_URL ?? "";

export default function fetchApi(url: string) {
  return fetch(`${base_url}/api/${url}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
