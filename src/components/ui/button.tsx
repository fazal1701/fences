import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[12px] text-[15px] font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:pointer-events-none disabled:opacity-50 min-h-[52px] px-6",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-[#2a2e2b] active:bg-black",
        forest:
          "bg-forest text-forest-foreground hover:bg-[#2b3c31] active:bg-[#243328]",
        secondary:
          "bg-surface text-foreground border border-border hover:bg-[#f1efe8] active:bg-[#ebe8df]",
        outline:
          "border border-foreground/20 bg-transparent text-foreground hover:bg-foreground/5",
        ghost: "bg-transparent text-foreground hover:bg-foreground/5",
        light:
          "bg-white text-foreground hover:bg-[#f7f5ef] border border-transparent",
        cedar:
          "bg-cedar text-cedar-foreground hover:bg-[#915734] active:bg-[#7f4a2d]",
      },
      size: {
        default: "min-h-[52px] px-6",
        sm: "min-h-[44px] px-4 text-sm",
        lg: "min-h-[56px] px-8 text-base",
        icon: "h-12 w-12 min-h-12 px-0",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, fullWidth, className }))}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { buttonVariants };
