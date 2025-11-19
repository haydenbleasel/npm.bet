"use client";

import { SettingsIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";

export function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="shadow-none" size="icon" variant="outline">
          <SettingsIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex items-center justify-between gap-4">
          <Label className="cursor-pointer" htmlFor="setting-switch">
            Enable feature
          </Label>
          <Switch
            checked={isEnabled}
            id="setting-switch"
            onCheckedChange={setIsEnabled}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
