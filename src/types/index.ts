export interface Artwork {
  id: number;
  name: string;
  artist_name: string;
  size: string;
  status: boolean;
  image: string;
}

export interface Collection {
  id: number;
  title: string;
  image: string;
  description: string;
  created_at: string;
  updated_at: string;
  related: Collection[];
}

export interface Artist {
  id: number;
  profile: string;
  name: string;
  description: string;
  total_artwork: number;
  sold_artwork: number;
}

export interface Blog {
  id: number;
  title: string;
  image: string;
  description: string;
  // author: string;
  // date: string;
}

export interface Event {
  id: number;
  title: string;
  image: string;
  status: string;
  location: string;
  description: string;
  opening_datetime: string;
  closing_datetime: string;
  related?: Event[];
}

export interface Home {
  events: Event[];
  collections: Collection[];
  galleries: Artwork[];
}
