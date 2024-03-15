interface Rel_Artist {
  name: string;
  id: number;
}
export interface Artwork {
  id: number;
  name: string;
  image: string;
  artist_id: number;
  year: number;
  category_id: number;
  size: string;
  description: string;
  price: number;
  status: boolean;
  artist: Rel_Artist;
  isAvailable: boolean;
  related: Artwork[];
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
  profile_image: string;
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
  created_at: string;
  updated_at: string;
  related: Blog[];
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
  artworks: Artwork[];
}
