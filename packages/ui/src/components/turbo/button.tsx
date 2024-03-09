"use client";

import { ReactNode } from "react";
import { Button as ShadcnButton } from "../button";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <ShadcnButton
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </ShadcnButton>
  );
};
