import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "inverse";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          variant === "inverse" ? "btn-brutal-inverse" : "btn-brutal",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
