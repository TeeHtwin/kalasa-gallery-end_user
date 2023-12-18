import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center relative">
      <Image width={192} height={130} src="/top_polygon.svg" alt="polygon" className="absolute top-0 right-0 hidden sm:block" />
      <Image width={720} height={480} src="/404_svg.svg" alt="error image" />
      <p className="text-primary font-serif text-3xl font-medium mb-16">Oops Page Not Found!</p>
      <Image width={192} height={130} src="/bot_polygon.svg" alt="polygon" className="absolute bottom-0 left-0 hidden sm:block"/>
    </main>
  );
} 
