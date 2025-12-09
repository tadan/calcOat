import { SbBlokData } from "@storyblok/react/rsc";
import { ImpactMetricStoryblok } from "./impact-metric";

export interface CalculatorSettingsStoryblok extends SbBlokData {
  component: "calculator_settings" | "calculator-settings";
  title: string;
  description?: string;
  conversion_factors?: ImpactMetricStoryblok[];
  featured_products?: string[];
}
