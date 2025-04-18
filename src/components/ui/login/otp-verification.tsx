"use client";

import type React from "react";
import { GalleryVerticalEnd, ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ModernInput, ProgressBar } from "./ui-components";

interface OtpVerificationFormProps
  extends React.ComponentPropsWithoutRef<"div"> {
  email: string;
  phone: string;
  onSubmit: () => void;
  onBack: () => void;
}

export function OtpVerificationForm({
  className,
  email,
  phone,
  onSubmit,
  onBack,
  ...props
}: OtpVerificationFormProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus the first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    // Countdown timer for resend code
    if (timeLeft <= 0) return;

    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft]);

  const handleOtpChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d*$/.test(value)) return;

    // Update the OTP array
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input if value is entered
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Handle backspace to go to previous input
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // In a real app, you would verify the OTP here
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    onSubmit();
  };

  const handleResendCode = () => {
    // Reset the timer
    setTimeLeft(30);
    // In a real app, you would trigger the OTP resend here
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Acme Inc.</span>
            </a>
            <h1 className="text-2xl font-bold">Verification Code</h1>
            <div className="text-center text-sm text-muted-foreground">
              Enter the 6-digit code sent to your phone
            </div>
          </div>

          <div>
            <ProgressBar step={3} totalSteps={3} />
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <ModernInput
                id="email"
                type="email"
                value={email}
                disabled
                variant="filled"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </Label>
              <ModernInput
                id="phone"
                type="tel"
                value={phone}
                disabled
                variant="filled"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="otp" className="text-sm font-medium">
                Verification Code
              </Label>
              <div className="flex justify-between gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="h-14 w-12 rounded-xl border border-input bg-muted text-center text-lg font-semibold focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                onClick={onBack}
                className="w-full h-12 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-medium"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button
                type="submit"
                className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                disabled={isLoading || otp.some((digit) => !digit)}
              >
                {isLoading ? (
                  <div className="h-5 w-5 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                ) : (
                  "Verify"
                )}
              </Button>
            </div>
          </div>
        </div>
      </form>
      <div className="text-balance text-center text-sm">
        {timeLeft > 0 ? (
          <span className="text-muted-foreground">
            Didn't receive code? Resend in{" "}
            <span className="font-medium text-foreground">{timeLeft}s</span>
          </span>
        ) : (
          <button
            type="button"
            onClick={handleResendCode}
            className="text-primary hover:underline font-medium"
          >
            Resend verification code
          </button>
        )}
      </div>
    </div>
  );
}
