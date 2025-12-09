import { SbBlokData } from "@storyblok/react/rsc";

export interface ProductComparisonStoryblok extends SbBlokData {
  component: "product_comparison" | "product-comparison";
  product_name: string;
  dairy_equivalent: string;
  carbon_saved: number;
  water_saved: number;
  land_saved: number;
  image?: {
    id: number;
    alt: string;
    name: string;
    filename: string;
  };
}
