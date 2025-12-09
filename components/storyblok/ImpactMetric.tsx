import { storyblokEditable } from "@storyblok/react/rsc";
import type { ImpactMetricStoryblok } from "@/types/storyblok";
import { formatNumber } from "@/lib/utils/format";
import Card from "@/components/ui/Card";

export interface ImpactMetricProps {
  blok: ImpactMetricStoryblok;
}

export default function ImpactMetric({ blok }: ImpactMetricProps) {
  return (
    <div {...storyblokEditable(blok)}>
      <Card className="text-center">
        {blok.icon && (
          <div className="mb-4 text-4xl" aria-hidden="true">
            {blok.icon}
          </div>
        )}

        <h3 className="mb-2 text-xl font-bold uppercase">{blok.name}</h3>

        <div className="mb-4 border-3 border-black bg-oatly-cream p-4">
          <span className="block text-3xl font-bold">
            {formatNumber(blok.value)}
          </span>
          <span className="font-mono text-sm uppercase">{blok.unit}</span>
        </div>

        {blok.description && (
          <p className="font-mono text-sm">{blok.description}</p>
        )}
      </Card>
    </div>
  );
}
