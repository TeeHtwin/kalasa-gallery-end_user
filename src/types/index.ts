export interface Gallery {
  id: number;
  title: string;
  artist: string;
  size: string;
  isAvailable: boolean;
  thumbnail: string;
}

export interface Collection {
  id: number;
  title: string;
  image: string;
  href: string;
}

export interface Artist {
  id: number;
  image: string;
  name: string;
  career: string;
}
