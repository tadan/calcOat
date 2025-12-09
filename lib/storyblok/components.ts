/**
 * Storyblok component registration
 * This file registers all Storyblok components for use in the Visual Editor
 */

import ProductComparison from "@/components/storyblok/ProductComparison";
import ImpactMetric from "@/components/storyblok/ImpactMetric";
import Page from "@/components/storyblok/Page";

/**
 * Map of component names to their React components
 * Supports both hyphen and underscore naming conventions
 */
export const storyblokComponents = {
  "product-comparison": ProductComparison,
  product_comparison: ProductComparison,
  "impact-metric": ImpactMetric,
  impact_metric: ImpactMetric,
  page: Page,
};
