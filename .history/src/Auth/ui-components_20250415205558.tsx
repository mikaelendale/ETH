"use client";

import type React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export const ProgressBar = ({
  step,
  totalSteps,
}: {
  step: number;
  totalSteps: number;
}) => {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="w-full">
      <div className="mb-2 flex justify-between text-xs text-muted-foreground">
        <span>
          Step {step} of {totalSteps}
        </span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full bg-black transition-all duration-700 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export const inputStyles = cva(
  "flex h-12 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        filled: "bg-muted border-transparent focus-visible:bg-background",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputStyles> {}

export const ModernInput = ({ className, variant, ...props }: InputProps) => {
  return (
    <input className={cn(inputStyles({ variant, className }))} {...props} />
  );
};
