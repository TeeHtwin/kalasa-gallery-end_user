const base_url = process.env.NEXT_PUBLIC_BASE_URL ?? "";

export async function fetchApi(url: string) {
  
  return await fetch(`${base_url}/api/${url}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => Promise.reject(error));
}

export async function searchListApi(url: string, query: string) {
  const response = await fetch(`${base_url}/api/${url}`, {
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
  console.log('searh apiiiiiii', query);
  
  return response.json();
}
