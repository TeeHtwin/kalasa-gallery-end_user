const base_url = process.env.NEXT_PUBLIC_BASE_URL ?? "";

export default async function fetchApi(url: string) {
  return await fetch(`${base_url}/api/${url}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => Promise.reject(error));
}
