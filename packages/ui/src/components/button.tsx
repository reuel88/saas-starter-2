"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <>
      <div className="bg-blue-500 p-4 py-2">Hello</div>
      <button
        className={className}
        onClick={() => alert(`Hello from your ${appName} app!`)}
      >
        {children}
      </button>
    </>
  );
};
