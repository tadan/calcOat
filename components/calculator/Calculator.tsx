"use client";

import { useCalculator } from "@/hooks/useCalculator";
import ConsumptionInput from "./ConsumptionInput";
import ImpactDisplay from "./ImpactDisplay";
import ImpactChart from "./ImpactChart";
import Button from "@/components/ui/Button";

export default function Calculator() {
  const {
    input,
    result,
    setProductType,
    setAmount,
    setTimeFrame,
    calculate,
    reset,
  } = useCalculator();

  return (
    <div className="space-y-8">
      <ConsumptionInput
        productType={input.productType}
        amount={input.amount}
        timeFrame={input.timeFrame}
        onProductTypeChange={setProductType}
        onAmountChange={setAmount}
        onTimeFrameChange={setTimeFrame}
      />

      <div className="flex gap-4">
        <Button onClick={calculate} variant="inverse" className="flex-1">
          Calculate Impact
        </Button>
        {result && (
          <Button onClick={reset} variant="default">
            Reset
          </Button>
        )}
      </div>

      {result && (
        <div className="space-y-8">
          <ImpactDisplay result={result} />
          <ImpactChart result={result} />
        </div>
      )}
    </div>
  );
}
