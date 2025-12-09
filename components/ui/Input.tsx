import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn("input-brutal", className)}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export default Input;
