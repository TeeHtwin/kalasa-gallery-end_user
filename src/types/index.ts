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

export interface Blog {
  id: number;
  image: string;
  title: string;
  content: string;
  author: string;
  date: string;
}
