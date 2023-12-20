import galleryList from "@/data/gallery.json";

export default async function fetchGallery(url?: string) {
  return await new Promise<
    Array<{
      id: number;
      title: string;
      artist: string;
      size: string;
      isAvailable: boolean;
      thumbnail: string;
    }>
  >((resolve) => {
    setTimeout(() => {
      resolve(galleryList);
    }, 2000);
  });
}
