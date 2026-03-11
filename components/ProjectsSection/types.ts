import { StaticImageData } from "next/image";

export type Stat = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  tabLabel: string;
  number: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  stats: Stat[];
};
