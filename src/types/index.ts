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

export interface Event {
  id: number;
  title: string;
  description: string;
  from_date: string;
  to_date: string;
  start_time: string;
  end_time: string;
  gallery: string;
  image: string;
  related: Event[];
}

export interface Home {
  events: Event[];
  collections: Collection[];
  galleries: Gallery[];
}
