import { parseAsString, useQueryState } from "nuqs";

export const useTimeRange = () =>
  useQueryState("timeRange", parseAsString.withDefault("last-year"));

export const useGrouping = () =>
  useQueryState("grouping", parseAsString.withDefault("week"));
