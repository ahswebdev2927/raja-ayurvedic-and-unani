import React from "react";

interface ThemeWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function ThemeWrapper({
  children,
  className = "",
}: ThemeWrapperProps) {
  return (
    <div className={`min-h-screen bg-white text-primary flex flex-col ${className}`}>
      {children}
    </div>
  );
}
