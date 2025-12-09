import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

export default Container;
