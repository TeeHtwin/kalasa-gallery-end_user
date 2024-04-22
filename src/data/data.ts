'use server'
import { unstable_noStore as noStore } from 'next/cache';

import { base_url } from "@/fetchers/api";

export async function getHomeData() {
  noStore()
  try {
    const response = await fetch(
      `https://api.kalasa.gallery/api/enduser/home`
    )
    const data = await response.json()

    return data.data
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch Home Page");
  }
}