import data from "@/data/index";
import { Artist, Collection, Gallery } from "@/types";

export async function fetchGallery(url?: string) {
  return await new Promise<Array<Gallery>>((resolve) => {
    setTimeout(() => {
      resolve(data.gallerys);
    }, 2000);
  });
}

export async function fetchCollection(url?: string) {
  return await new Promise<Array<Collection>>((resolve, reject) => {
    setTimeout(() => {
      if (data.collections?.length > 0) {
        resolve(data.collections);
      }
      reject(new Error("Cannot fetch data."));
    }, 2000);
  });
}

export async function fetchArtist(id?: number) {
  return await new Promise<Array<Artist>>((resolve, reject) => {
    setTimeout(() => {
      if (data.artists?.length > 0) {
        resolve(data.artists);
      }
      reject(new Error("Cannot fetch data"));
    }, 2000);
  });
}
