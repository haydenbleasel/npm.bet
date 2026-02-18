"use client";

import { GroupIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useGrouping } from "@/providers/filters";

interface GroupingSelectorProps {
  className?: string;
}

export const GroupingSelector = ({ className }: GroupingSelectorProps) => {
  const [grouping, setGrouping] = useGrouping();

  return (
    <Select onValueChange={setGrouping} value={grouping}>
      <SelectTrigger
        className={cn(
          "w-36 bg-background shadow-none [&>span]:flex-1",
          className
        )}
      >
        <GroupIcon className="size-4" />
        <SelectValue placeholder="Select grouping" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="day">By day</SelectItem>
        <SelectItem value="week">By week</SelectItem>
        <SelectItem value="month">By month</SelectItem>
      </SelectContent>
    </Select>
  );
};
