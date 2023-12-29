"use client";
import React from "react";
import { useTheme } from "@/store/theme";

function Themeprovider({ children }: any) {
  const { theme }: any = useTheme();
  return (
    <html lang="en" data-theme={theme}>
      <body>{children}</body>
    </html>
  );
}

export default Themeprovider;
