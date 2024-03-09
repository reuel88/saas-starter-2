"use client";

import { Toaster } from "../ui/toaster";
import { FC, ReactNode } from "react";

type ToasterWrapperProps = {
  children: ReactNode;
};

export const ToasterWrapper: FC<ToasterWrapperProps> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};
