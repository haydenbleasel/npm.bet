"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { useMetric } from "@/providers/filters";

interface MetricSelectorProps {
  className?: string;
}

export const MetricSelector = ({ className }: MetricSelectorProps) => {
  const [metric, setMetric] = useMetric();

  return (
    <ToggleGroup
      className={cn("bg-background", className)}
      onValueChange={(value) => {
        if (value) {
          setMetric(value);
        }
      }}
      size="sm"
      type="single"
      value={metric}
      variant="outline"
    >
      <ToggleGroupItem value="downloads">Downloads</ToggleGroupItem>
      <ToggleGroupItem value="share">Share %</ToggleGroupItem>
    </ToggleGroup>
  );
};
