export type ProjectCategory = "building" | "water" | "health" | "education";

export interface IProjects {
  id: number;
  header: string;
  description: string;
  location: string;
  community: string;
  category: ProjectCategory;
  image: string | null;
  inProgress: boolean;
  date: Date | string | undefined;
  amount: number;
}

export interface IMembers {
  id: number;
  img: string | null;
  name: string;
  alias?: string;
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

export enum TeamToggle {
  ALL = "All Members",
  MANAGEMENT = "Management Team",
  TRUSTEE = "Trustees",
  PROJECT = "Project Committee",
  FINANCE = "Finance Committee",
  WELFARE = "Welfare committee",
}
