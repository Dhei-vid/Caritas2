export interface IProjects {
  id: number;
  header: string;
  description: string;
  location: string;
  image: string;
  inProgress: boolean;
}

export interface IMembers {
  id: number;
  img: string | null;
  name: string;
  imgDescription: string;
  position?: string;
  profession?: string;
  phoneNumber?: string;
  email?: string;
  homeParish?: string;
  domParish?: string;
  Address?: string;
  yearJoined?: string;
}

export interface IImageData {
  id: number;
  imageLink: string;
  description: string;
}

export interface INav {
  id: number;
  label: string;
  link: string;
}

export interface ICaritasHistory {
  id: number;
  title: string;
  timeline: string;
  paragraph: string;
  display: boolean;
}
