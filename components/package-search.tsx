"use client";

import { useState } from "react";
import { Input } from "./ui/input";

export const PackageSearch = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <Input
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for a package"
        type="text"
        value={value}
      />
    </div>
  );
};
