"use client";

import type { ProductType, TimeFrame } from "@/types/calculator";
import { CONVERSION_FACTORS } from "@/lib/calculations/constants";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Card from "@/components/ui/Card";

export interface ConsumptionInputProps {
  productType: ProductType;
  amount: number;
  timeFrame: TimeFrame;
  onProductTypeChange: (productType: ProductType) => void;
  onAmountChange: (amount: number) => void;
  onTimeFrameChange: (timeFrame: TimeFrame) => void;
}

export default function ConsumptionInput({
  productType,
  amount,
  timeFrame,
  onProductTypeChange,
  onAmountChange,
  onTimeFrameChange,
}: ConsumptionInputProps) {
  const unit = CONVERSION_FACTORS[productType].unit;
  return (
    <Card>
      <h2 className="mb-6 text-2xl font-bold uppercase">Your Consumption</h2>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="product-type"
            className="mb-2 block font-mono text-sm font-bold uppercase"
          >
            Product Type
          </label>
          <Select
            id="product-type"
            value={productType}
            onChange={(e) =>
              onProductTypeChange(e.target.value as ProductType)
            }
          >
            <option value="milk">Milk</option>
            <option value="yogurt">Yogurt</option>
            <option value="cheese">Cheese</option>
            <option value="cream">Cream</option>
            <option value="butter">Butter</option>
          </Select>
        </div>

        <div>
          <label
            htmlFor="amount"
            className="mb-2 block font-mono text-sm font-bold uppercase"
          >
            Amount ({unit})
          </label>
          <div className="relative">
            <Input
              id="amount"
              type="number"
              min="0"
              step="0.1"
              value={amount}
              onChange={(e) => onAmountChange(parseFloat(e.target.value) || 0)}
              className="pr-16"
            />
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-mono text-lg font-bold">
              {unit}
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="time-frame"
            className="mb-2 block font-mono text-sm font-bold uppercase"
          >
            Time Frame
          </label>
          <Select
            id="time-frame"
            value={timeFrame}
            onChange={(e) => onTimeFrameChange(e.target.value as TimeFrame)}
          >
            <option value="daily">Per Day</option>
            <option value="weekly">Per Week</option>
            <option value="monthly">Per Month</option>
            <option value="yearly">Per Year</option>
          </Select>
        </div>
      </div>
    </Card>
  );
}
