import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-[rgba(0,0,0,0.1)_0px_0.706592px_0.706592px_-0.541667px,rgba(0,0,0,0.09)_0px_1.80656px_1.80656px_-1.08333px,rgba(0,0,0,0.09)_0px_3.62176px_3.62176px_-1.625px,rgba(0,0,0,0.09)_0px_6.8656px_6.8656px_-2.16667px,rgba(0,0,0,0.08)_0px_13.6468px_13.6468px_-2.70833px,rgba(0,0,0,0.05)_0px_30px_30px_-3.25px,rgb(255,255,255)_0px_3px_1px_0px_inset] px-3 py-1.5 rounded-full flex gap-1.5 font-normal",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
