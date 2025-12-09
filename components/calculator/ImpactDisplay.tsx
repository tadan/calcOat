"use client";

import type { ImpactResult } from "@/types/calculator";
import { formatNumber } from "@/lib/utils/format";
import Card from "@/components/ui/Card";

export interface ImpactDisplayProps {
  result: ImpactResult;
}

export default function ImpactDisplay({ result }: ImpactDisplayProps) {
  return (
    <div className="space-y-6">
      <Card className="bg-black text-white">
        <h2 className="mb-4 text-3xl font-bold uppercase">
          WOW! Look at that impact!
        </h2>
        <p className="font-mono">
          By switching {formatNumber(result.yearlyAmount, 1)} {result.unit} of{" "}
          {result.productType} to plant-based alternatives per year, you save:
        </p>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-5 border-black">
          <div className="mb-4 text-4xl" aria-hidden="true">
            🌍
          </div>
          <h3 className="mb-2 text-xl font-bold uppercase">Carbon</h3>
          <div className="border-3 border-black bg-oatly-cream p-4">
            <span className="block text-3xl font-bold">
              {formatNumber(result.carbonSaved)}
            </span>
            <span className="font-mono text-sm uppercase">kg CO₂</span>
          </div>
          <p className="mt-4 font-mono text-xs">
            That&apos;s like driving{" "}
            {formatNumber(result.carbonSaved * 4.5, 0)} km in a car!
          </p>
        </Card>

        <Card className="border-5 border-black">
          <div className="mb-4 text-4xl" aria-hidden="true">
            💧
          </div>
          <h3 className="mb-2 text-xl font-bold uppercase">Water</h3>
          <div className="border-3 border-black bg-oatly-cream p-4">
            <span className="block text-3xl font-bold">
              {formatNumber(result.waterSaved)}
            </span>
            <span className="font-mono text-sm uppercase">liters</span>
          </div>
          <p className="mt-4 font-mono text-xs">
            That&apos;s {formatNumber(result.waterSaved / 200, 0)} bathtubs of
            water!
          </p>
        </Card>

        <Card className="border-5 border-black">
          <div className="mb-4 text-4xl" aria-hidden="true">
            🌱
          </div>
          <h3 className="mb-2 text-xl font-bold uppercase">Land</h3>
          <div className="border-3 border-black bg-oatly-cream p-4">
            <span className="block text-3xl font-bold">
              {formatNumber(result.landSaved)}
            </span>
            <span className="font-mono text-sm uppercase">m²</span>
          </div>
          <p className="mt-4 font-mono text-xs">
            That&apos;s {formatNumber(result.landSaved / 10, 1)} parking
            spaces!
          </p>
        </Card>
      </div>
    </div>
  );
}
