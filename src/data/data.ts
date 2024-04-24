"use server";
import { unstable_noStore as noStore } from "next/cache";

import { base_url } from "@/fetchers/api";

export async function getHomeData() {
  noStore();
  try {
    const response = await fetch(
      `https://staging.kalasa.gallery/api/enduser/home`
    );
    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch Home Page");
  }
}

export async function fetchArtworks(currentPage: number, query: string) {
  noStore();
  try {

    const response = await fetch(
      `https://staging.kalasa.gallery/api/enduser/artwork/list?page=${currentPage}&q=${query}`
    );
    const data = await response.json();
    return data.data.data;
  } catch (error) {
    throw new Error("Failed to fetch artworks.");
  }
}

export async function searchArtworks(query: string) {
  noStore();
  try {
    const response = await fetch(
      `https://staging.kalasa.gallery/api/enduser/artwork/search-by-name?q=${query}`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error("Failed to search artworks.");
  }
}

export async function fetchArtworksTotal(query:string) {
  noStore();
  try {
    const response = await fetch(
      `https://staging.kalasa.gallery/api/enduser/artwork/total?q=${query}`
    );
    const data = await response.json();

    const totalPage = Math.ceil(
      Number(data?.data.total / data?.data.item_per_page)
    );
    return totalPage;
  } catch (error) {
    throw new Error("Failed to fetch total.");
  }
}
