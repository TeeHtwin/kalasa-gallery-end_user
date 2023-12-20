import galleryList from "@/data/gallery.json";
import { Gallery } from "@/types";

export default async function fetchGallery(url?: string) {
  return await new Promise<Array<Gallery>>((resolve) => {
    setTimeout(() => {
      resolve(galleryList);
    }, 2000);
  });
}
