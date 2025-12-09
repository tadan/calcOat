import { SbBlokData } from "@storyblok/react/rsc";

export interface PageStoryblok extends SbBlokData {
  component: "page";
  body?: SbBlokData[];
}
