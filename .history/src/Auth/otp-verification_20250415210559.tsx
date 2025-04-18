import React, { useState, useEffect, useRef } from "react";
import { GalleryVerticalEnd, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ModernInput, ProgressBar } from "./ui-components";

export function OtpVerificationForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Retrieve email and phone from session storage
    if (typeof window !== "undefined") {
      const storedEmail = sessionStorage.getItem("userEmail");
      const storedPhone = sessionStorage.getItem("userPhone");
      if (storedEmail) setEmail(storedEmail);
      if (storedPhone) setPhone(storedPhone);

      if (!storedEmail || !storedPhone) {
        // If data is missing, redirect back
        router.push("/login");
      }
    }
  }, [router]);

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

    router.push("/login-success");
  };

  const goBack = () => {
    router.push("/phone-verification");
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
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
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
                    className="h-14 w-12 rounded-xl border border-input bg-muted text-center text-lg font-semibold focus:border-black focus:ring-2 focus:ring-black/20 focus:outline-none"
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                onClick={goBack}
                className="w-full h-12 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-medium"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button
                type="submit"
                className="w-full h-12 rounded-xl bg-black hover:bg-black/90 text-white font-medium"
                disabled={isLoading || otp.some((digit) => !digit)}
              >
                {isLoading ? (
                  <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
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
            className="text-black hover:underline font-medium"
          >
            Resend verification code
          </button>
        )}
      </div>
    </div>
  );
}
