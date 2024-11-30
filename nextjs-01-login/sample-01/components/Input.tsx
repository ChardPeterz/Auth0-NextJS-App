import React from "react";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
    prefix?: React.ReactNode;
    className?: string;
  }
  
  export const Input = ({ className = "", prefix, ...props }: InputProps) => (
    <div className="relative">
      {prefix && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {prefix}
        </div>
      )}
      <input
        className={`w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          prefix ? "pl-10" : ""
        } ${className}`}
        {...props}
      />
    </div>
  );