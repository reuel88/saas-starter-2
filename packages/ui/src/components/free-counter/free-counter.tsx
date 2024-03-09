"use client";

import { Zap } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { Button } from "../button";
import { Progress } from "../ui/progress";

type FreeCounterProps = {
  count: number;
  max: number;
  onClick: () => void;
};

export const FreeCounter: FC<FreeCounterProps> = ({
  count,
  max,
  onClick,
  ...rest
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-4" {...rest}>
      <div className="space-y-2 whitespace-nowrap text-sm text-secondary-foreground">
        <p id="progress-label">
          {count} / {max} Free Generations
        </p>
        <Progress
          aria-labelledby="progress-label"
          className="h-3"
          value={(count / max) * 100}
        />
      </div>
      <Button onClick={onClick} variant="premium" className="w-full">
        Upgrade
        <Zap className="ml-2 h-4 w-4 fill-white" />
      </Button>
    </div>
  );
};
