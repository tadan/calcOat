import { SbBlokData } from "@storyblok/react/rsc";

export interface ImpactMetricStoryblok extends SbBlokData {
  component: "impact_metric" | "impact-metric";
  name: string;
  value: number;
  unit: string;
  description?: string;
  icon?: string;
  category: "carbon" | "water" | "land";
}
