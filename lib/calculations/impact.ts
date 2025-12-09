import type {
  ConsumptionInput,
  ImpactResult,
  ProductType,
  TimeFrame,
} from "@/types/calculator";
import { CONVERSION_FACTORS, TIME_FRAME_MULTIPLIERS } from "./constants";

/**
 * Calculate environmental impact of switching from dairy to plant-based alternatives
 */
export function calculateImpact(input: ConsumptionInput): ImpactResult {
  const { productType, amount, timeFrame } = input;

  // Get conversion factors for the product
  const factors = CONVERSION_FACTORS[productType];

  // Calculate yearly consumption
  const multiplier = TIME_FRAME_MULTIPLIERS[timeFrame];
  const yearlyAmount = amount * multiplier;

  // Calculate total impact
  const carbonSaved = yearlyAmount * factors.carbonPerUnit;
  const waterSaved = yearlyAmount * factors.waterPerUnit;
  const landSaved = yearlyAmount * factors.landPerUnit;

  return {
    productType,
    timeFrame,
    amount,
    yearlyAmount,
    carbonSaved,
    waterSaved,
    landSaved,
    unit: factors.unit,
  };
}

/**
 * Calculate impact for multiple time frames
 */
export function calculateAllTimeFrames(
  productType: ProductType,
  amount: number
): Record<TimeFrame, ImpactResult> {
  const timeFrames: TimeFrame[] = ["daily", "weekly", "monthly", "yearly"];

  return timeFrames.reduce((acc, timeFrame) => {
    acc[timeFrame] = calculateImpact({ productType, amount, timeFrame });
    return acc;
  }, {} as Record<TimeFrame, ImpactResult>);
}

/**
 * Compare impact between two products
 */
export function compareProducts(
  product1: ConsumptionInput,
  product2: ConsumptionInput
): {
  product1: ImpactResult;
  product2: ImpactResult;
  difference: {
    carbon: number;
    water: number;
    land: number;
  };
} {
  const impact1 = calculateImpact(product1);
  const impact2 = calculateImpact(product2);

  return {
    product1: impact1,
    product2: impact2,
    difference: {
      carbon: impact1.carbonSaved - impact2.carbonSaved,
      water: impact1.waterSaved - impact2.waterSaved,
      land: impact1.landSaved - impact2.landSaved,
    },
  };
}
