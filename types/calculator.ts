export type ProductType = "milk" | "yogurt" | "cheese" | "butter";
export type TimeFrame = "daily" | "weekly" | "monthly" | "yearly";

export interface ConsumptionInput {
  productType: ProductType;
  amount: number;
  unit: string;
}

export interface ImpactResult {
  carbonSaved: number;
  waterSaved: number;
  landSaved: number;
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
}
