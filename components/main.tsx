"use client";

import useSWR from "swr";
import { getPackageData, type PackageData } from "@/actions/package/get";
import { useTimeRange } from "@/providers/filters";
import { ChartAreaInteractive } from "./chart";
import { EmptyState } from "./empty-state";

type MainProps = {
  packageName?: string;
};

export const Main = ({ packageName }: MainProps) => {
  const [timeRange] = useTimeRange();

  const { data: packageData, error } = useSWR<PackageData>(
    packageName ? [packageName, timeRange] : null,
    ([pkg, range]) => getPackageData(pkg, range)
  );

  if (!packageName) {
    return (
      <main className="overflow-hidden">
        <EmptyState />
      </main>
    );
  }

  if (error) {
    return (
      <main className="overflow-hidden">
        <div>Error loading package data</div>
      </main>
    );
  }

  if (!packageData) {
    return (
      <main className="overflow-hidden">
        <div>Loading...</div>
      </main>
    );
  }

  return (
    <main className="overflow-hidden">
      <ChartAreaInteractive data={packageData} />
    </main>
  );
};
