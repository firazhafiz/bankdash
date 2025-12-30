import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-[15px] border border-[#E6EFF5] bg-white px-5 py-2 text-sm text-[#718EBF] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#718EBF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1814F3] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
