export interface IPersonaje {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: 'Male' | 'Female' | 'unknown'| 'genderless';
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface IOrigin {
  name: string;
  url: string;
}

export interface ILocation {
  name: string;
  url: string;
}