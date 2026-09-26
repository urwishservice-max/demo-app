import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CAC32C] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-[#CAC32C] text-[#202020] hover:bg-[#B5AE22] shadow-[0_4px_18px_rgba(202,195,44,0.3)]",
        secondary: "bg-[#DCDCDC] text-[#202020] hover:bg-[#cacaca]",
        outline: "border border-[#E7E7E3] bg-[#FFFFFF] hover:bg-[#FAFAF8] text-[#202020] hover:border-[#CAC32C]",
        dark: "bg-[#202020] text-white hover:bg-[#111111] hover:border-[#CAC32C]",
        ghost: "hover:bg-[#E7E7E3]/50 hover:text-[#202020] text-[#6B6B6B]",
        link: "text-[#202020] hover:text-[#CAC32C] underline-offset-4 hover:underline",
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
