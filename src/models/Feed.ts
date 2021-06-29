export interface Feed {
  id: number;
  createdAt: Date;
  createdBefore: string;
  author: Author;
  sportGroup: Author;
  video: Video;
  description: string;
  athlete: Athlete;
  bookmarked: boolean;
  views: Views;
}

export interface Athlete {
  id: number;
  age: number;
  name: string;
  avatar: string;
  club: string;
  isCelebrity: boolean;
  country: Country;
  sport: Country;
}

export interface Country {
  id: number;
  name: string;
  slug: string;
  icon: string;
}

export interface Author {
  id: number;
  name: string;
}

interface Video {
  handler: Handler;
  url: string;
  poster: string;
  type: Type;
  length: number;
}

enum Handler {
  Aslkfjsad = "aslkfjsad",
}

enum Type {
  VideoMp3 = "video/mp3",
}

enum Views {
  IvanRakitićNeymarJr468KOthers = "Ivan Rakitić, Neymar Jr. + 46.8k others",
}
