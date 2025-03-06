import { ImageProps } from "next/image";
import { ReactNode } from "react";

export type ProjectCardType = {
  title: string;
  image?: ImageProps;
  content: ReactNode;
};