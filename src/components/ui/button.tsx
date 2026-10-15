import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#351779] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-[#351779] text-white hover:bg-[#2B1263] shadow-[0_4px_18px_rgba(53,23,121,0.25)]",
        secondary: "bg-[#E2E0DD] text-[#080808] hover:bg-[#d5d3d0]",
        outline: "border border-[#E2E0DD] bg-[#FFFFFF] hover:bg-[#F8F7F5] text-[#080808] hover:border-[#351779]",
        dark: "bg-[#080808] text-white hover:bg-[#1a1a1a] hover:border-[#FFC400]",
        ghost: "hover:bg-[#E2E0DD]/50 hover:text-[#080808] text-[#6B6B6B]",
        link: "text-[#080808] hover:text-[#351779] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-9 rounded-sm px-3",
        lg: "h-14 rounded-sm px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
