import galleryList from "@/data/gallery.json";

export default async function fetchGallery(url?: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(galleryList);
    }, 2000);
  });
}
