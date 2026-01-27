"use server";
import { unstable_noStore as noStore } from "next/cache";
import { base_url } from "@/fetchers/api";
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";

export async function getHomeData() {
  noStore();
  try {
    const response = await fetchWithTimeout(
      `https://api.kalasa.gallery/api/enduser/home`,
      {
        cache: "no-store",
      },
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("API Error:", error);
    return { events: [], artworks: [], collections: [] };
  }
}

export async function fetchData(
  currentPage: number,
  query: string,
  page: string,
) {
  try {
    const response = await fetchWithTimeout(
      `${base_url}/api/enduser/${page}/list?page=${currentPage}&q=${query}`,
    );
    const data = await response.json();
    return data.data.data;
  } catch (error) {
    console.error(`API Error: Failed to fetch ${page}.`, error);
    return [];
  }
}

export async function searchData(query: string, page: string) {
  try {
    const response = await fetchWithTimeout(
      `${base_url}/api/enduser/${page}/search-by-name?q=${query}`,
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("API Error: Failed to search.", error);
    return [];
  }
}

export async function fetchTotalData(query: string, page: string) {
  noStore();
  try {
    const response = await fetchWithTimeout(
      `${base_url}/api/enduser/${page}/total?q=${query}`,
    );
    const data = await response.json();

    const totalPage = Math.ceil(
      Number(data?.data.total / data?.data.item_per_page),
    );
    return totalPage;
  } catch (error) {
    console.error("API Error: Failed to fetch total.", error);
    return 0;
  }
}
