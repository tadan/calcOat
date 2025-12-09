import type { ConversionFactor, ProductType } from "@/types/calculator";

/**
 * Environmental impact conversion factors for different dairy products
 * Based on peer-reviewed research (Poore & Nemecek, 2018)
 *
 * Values represent the environmental impact of producing 1 liter/kg of dairy product
 */
export const CONVERSION_FACTORS: Record<ProductType, ConversionFactor> = {
  milk: {
    productType: "milk",
    carbonPerUnit: 2.5, // kg CO₂ per liter
    waterPerUnit: 600,  // liters per liter
    landPerUnit: 8.0,   // m² per liter
    unit: "L",
  },
  yogurt: {
    productType: "yogurt",
    carbonPerUnit: 3.2, // kg CO₂ per kg
    waterPerUnit: 800,  // liters per kg
    landPerUnit: 10.5,  // m² per kg
    unit: "kg",
  },
  cheese: {
    productType: "cheese",
    carbonPerUnit: 13.5, // kg CO₂ per kg
    waterPerUnit: 5000,  // liters per kg
    landPerUnit: 40.0,   // m² per kg
    unit: "kg",
  },
  cream: {
    productType: "cream",
    carbonPerUnit: 4.8, // kg CO₂ per liter
    waterPerUnit: 1200, // liters per liter
    landPerUnit: 15.0,  // m² per liter
    unit: "L",
  },
  butter: {
    productType: "butter",
    carbonPerUnit: 12.1, // kg CO₂ per kg
    waterPerUnit: 5500,  // liters per kg
    landPerUnit: 35.0,   // m² per kg
    unit: "kg",
  },
};

/**
 * Default consumption values for different time frames (in liters/kg)
 */
export const DEFAULT_CONSUMPTION = {
  daily: 0.5,
  weekly: 3.5,
  monthly: 15,
  yearly: 180,
};

/**
 * Time frame multipliers to convert to yearly consumption
 */
export const TIME_FRAME_MULTIPLIERS = {
  daily: 365,
  weekly: 52,
  monthly: 12,
  yearly: 1,
};
