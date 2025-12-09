"use client";

import { useState, useCallback } from "react";
import type {
  ConsumptionInput,
  ImpactResult,
  ProductType,
  TimeFrame,
} from "@/types/calculator";
import { calculateImpact } from "@/lib/calculations/impact";

export interface UseCalculatorReturn {
  input: ConsumptionInput;
  result: ImpactResult | null;
  setProductType: (productType: ProductType) => void;
  setAmount: (amount: number) => void;
  setTimeFrame: (timeFrame: TimeFrame) => void;
  calculate: () => void;
  reset: () => void;
}

export function useCalculator(): UseCalculatorReturn {
  const [input, setInput] = useState<ConsumptionInput>({
    productType: "milk",
    amount: 1,
    timeFrame: "daily",
  });

  const [result, setResult] = useState<ImpactResult | null>(null);

  const setProductType = useCallback((productType: ProductType) => {
    setInput((prev) => ({ ...prev, productType }));
  }, []);

  const setAmount = useCallback((amount: number) => {
    setInput((prev) => ({ ...prev, amount }));
  }, []);

  const setTimeFrame = useCallback((timeFrame: TimeFrame) => {
    setInput((prev) => ({ ...prev, timeFrame }));
  }, []);

  const calculate = useCallback(() => {
    const calculatedResult = calculateImpact(input);
    setResult(calculatedResult);
  }, [input]);

  const reset = useCallback(() => {
    setInput({
      productType: "milk",
      amount: 1,
      timeFrame: "daily",
    });
    setResult(null);
  }, []);

  return {
    input,
    result,
    setProductType,
    setAmount,
    setTimeFrame,
    calculate,
    reset,
  };
}
