export type ProductType = "milk" | "yogurt" | "cheese" | "cream" | "butter";
export type TimeFrame = "daily" | "weekly" | "monthly" | "yearly";

export interface ConsumptionInput {
  productType: ProductType;
  amount: number;
  timeFrame: TimeFrame;
}

export interface ImpactResult {
  productType: ProductType;
  timeFrame: TimeFrame;
  amount: number;
  yearlyAmount: number;
  carbonSaved: number;
  waterSaved: number;
  landSaved: number;
  unit: string;
}

export interface CalculatorState {
  timeFrame: TimeFrame;
  consumptions: ConsumptionInput[];
  totalImpact: ImpactResult;
}

export interface ConversionFactor {
  productType: ProductType;
  carbonPerUnit: number;
  waterPerUnit: number;
  landPerUnit: number;
  unit: string;
}
