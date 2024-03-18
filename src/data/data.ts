'use server'

import { base_url } from "@/fetchers/api";

export async function getHomeData() {
  try {
    const response = await fetch(
      `${base_url}/api/enduser/home`
    )
    const data = await response.json()

    return data.data
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch User");
  }
}