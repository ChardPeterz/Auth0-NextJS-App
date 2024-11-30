import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export const Card = ({ children, className = "" }: CardProps) => (
    <div className={`bg-white rounded-lg shadow-md ${className}`}>{children}</div>
  );
  
  export const CardHeader = ({ children }: { children: React.ReactNode }) => (
    <div className="p-4 border-b">{children}</div>
  );
  
  export const CardTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-xl font-semibold">{children}</h2>
  );
  
  export const CardContent = ({ children }: { children: React.ReactNode }) => (
    <div className="p-4">{children}</div>
  );