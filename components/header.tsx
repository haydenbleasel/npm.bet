import { CommandIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export const Header = () => (
  <header className="flex items-center justify-between">
    <Button asChild size="sm" variant="ghost">
      <Link className="flex items-center gap-2" href="/">
        <CommandIcon className="size-4" />
        <p>npm.bet</p>
      </Link>
    </Button>
    <Button asChild size="sm" variant="outline">
      <a href="https://x.com/haydenbleasel">Follow me on X</a>
    </Button>
  </header>
);
