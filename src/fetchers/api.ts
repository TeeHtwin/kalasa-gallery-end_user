const url = process.env.NEXT_BASE_API_URL ?? "";

export default function fetchApi(api: string) {
  return fetch(`${url}/api/${api}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
