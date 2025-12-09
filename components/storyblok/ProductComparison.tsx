import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";
import type { ProductComparisonStoryblok } from "@/types/storyblok";
import { formatNumber } from "@/lib/utils/format";
import Card from "@/components/ui/Card";

export interface ProductComparisonProps {
  blok: ProductComparisonStoryblok;
}

export default function ProductComparison({ blok }: ProductComparisonProps) {
  return (
    <div {...storyblokEditable(blok)}>
      <Card className="overflow-hidden transition-all hover:translate-x-1 hover:translate-y-1">
        {blok.image?.filename && (
          <div className="relative aspect-square border-b-5 border-black bg-oatly-cream">
            <Image
              src={blok.image.filename}
              alt={blok.image.alt || blok.product_name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        <div className="p-6">
          <h3 className="mb-2 text-2xl font-bold uppercase">
            {blok.product_name}
          </h3>
          <p className="mb-6 font-mono text-sm">VS. {blok.dairy_equivalent}</p>

          <div className="space-y-3">
            <div className="flex items-center justify-between border-3 border-black bg-oatly-cream p-3">
              <span className="font-mono text-xs font-bold uppercase">
                CO₂ SAVED
              </span>
              <span className="font-mono text-lg font-bold">
                {formatNumber(blok.carbon_saved)} kg
              </span>
            </div>

            <div className="flex items-center justify-between border-3 border-black bg-oatly-cream p-3">
              <span className="font-mono text-xs font-bold uppercase">
                WATER SAVED
              </span>
              <span className="font-mono text-lg font-bold">
                {formatNumber(blok.water_saved)} L
              </span>
            </div>

            <div className="flex items-center justify-between border-3 border-black bg-oatly-cream p-3">
              <span className="font-mono text-xs font-bold uppercase">
                LAND SAVED
              </span>
              <span className="font-mono text-lg font-bold">
                {formatNumber(blok.land_saved)} m²
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
