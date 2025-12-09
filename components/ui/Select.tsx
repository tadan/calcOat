import { SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn("select-brutal", className)}
          {...props}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M1 1L6 6L11 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </div>
    );
  }
);
Select.displayName = "Select";

export default Select;
