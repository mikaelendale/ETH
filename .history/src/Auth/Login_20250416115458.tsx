"use client";

import type React from "react";

import { useState } from "react";
import { ProgressBar } from "@/components/ui/login/ui-components";
import {
  GalleryVerticalEnd,
  ArrowLeft,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ModernInput } from "@/components/ui/login/ui-components";
import ApplicationLogo from "@/components/ApplicationLogo";

export default function LoginFlow() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  // Handle form submissions
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsLoading(false);
    setStep(2);
  };

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsLoading(false);
    setStep(3);
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setStep(4);
  };

  const handleResendCode = () => {
    setTimeLeft(30);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value && !/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input if value is entered
    if (value && index < 5 && document.getElementById(`otp-${index + 1}`)) {
      (
        document.getElementById(`otp-${index + 1}`) as HTMLInputElement
      )?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      (
        document.getElementById(`otp-${index - 1}`) as HTMLInputElement
      )?.focus();
    }
  };

  // Effect for countdown timer
  useState(() => {
    if (step !== 3 || timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timerId);
  });

  return (
    <div className="relative">

      {/* Step 1: Email Login */}
      {step === 1 && (
        <div className="flex flex-col gap-6">
          <form onSubmit={handleEmailSubmit}>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground">
                  <ApplicationLogo  />
                </div>
                <h1 className="text-2xl font-bold">Welcome Back</h1>
                <div className="text-center text-sm text-muted-foreground">
                  Don&apos;t have an account?{" "}
                  <a
                    href="/login"
                    className="font-medium text-primary hover:underline"
                  >
                    Sign up
                  </a>
                </div>
              </div>
 
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Name
                  </Label>
                  <ModernInput
                    id="name"
                    type="text"
                    placeholder="your name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    variant="filled"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="h-5 w-5 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                  ) : (
                    "Next"
                  )}
                </Button>
              </div>

              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Button
                  variant="outline"
                  className="w-full h-12 rounded-xl border-2 font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 mr-2"
                  >
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                      fill="currentColor"
                    />
                  </svg>
                  Apple
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-12 rounded-xl border-2 font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 mr-2"
                  >
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Google
                </Button>
              </div>
            </div>
          </form>
          <div className="text-balance text-center text-xs text-muted-foreground [&_a]:font-medium [&_a]:text-primary">
            By continuing, you agree to our <a href="#">Terms of Service</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </div>
        </div>
      )}

      {/* Step 2: Phone Verification */}
      {step === 2 && (
        <div className="flex flex-col gap-6">
          <form onSubmit={handlePhoneSubmit}>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <GalleryVerticalEnd className="size-6" />
                </div>
                <h1 className="text-2xl font-bold">Phone Verification</h1>
                <div className="text-center text-sm text-muted-foreground">
                  We'll send a verification code to your phone
                </div>
              </div>

              <div>
                <ProgressBar step={2} totalSteps={3} />
              </div>

              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label
                    htmlFor="name-display"
                    className="text-sm font-medium"
                  >
                    Name
                  </Label>
                  <ModernInput
                    id="name-display"
                    type="text"
                    value={name}
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
                    placeholder="+1 (555) 123-4567"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    variant="filled"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-full h-12 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-medium"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="h-5 w-5 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                    ) : (
                      "Next"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </form>
          <div className="text-balance text-center text-xs text-muted-foreground">
            We'll only use your phone number for authentication purposes.
          </div>
        </div>
      )}

      {/* Step 3: OTP Verification */}
      {step === 3 && (
        <div className="flex flex-col gap-6">
          <form onSubmit={handleOtpSubmit}>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <GalleryVerticalEnd className="size-6" />
                </div>
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
                  <Label
                    htmlFor="name-display-2"
                    className="text-sm font-medium"
                  >
                    Name
                  </Label>
                  <ModernInput
                    id="name-display-2"
                    type="name"
                    value={email}
                    disabled
                    variant="filled"
                  />
                </div>

                <div className="grid gap-2">
                  <Label
                    htmlFor="phone-display"
                    className="text-sm font-medium"
                  >
                    Phone Number
                  </Label>
                  <ModernInput
                    id="phone-display"
                    type="tel"
                    value={phoneNumber}
                    disabled
                    variant="filled"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="otp-0" className="text-sm font-medium">
                    Verification Code
                  </Label>
                  <div className="flex justify-between gap-2">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
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
                    onClick={() => setStep(2)}
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
      )}

      {/* Step 4: Success */}
      {step === 4 && (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <GalleryVerticalEnd className="size-6" />
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="text-green-500">
                  <CheckCircle className="h-24 w-24" />
                </div>
                <h1 className="text-3xl font-bold text-center">
                  Login Successful!
                </h1>
              </div>

              <p className="text-center text-muted-foreground max-w-xs">
                Welcome back,{" "}
                <span className="font-medium text-foreground">{email}</span>.
                You have successfully logged in to your account.
              </p>
            </div>

            <div className="w-full">
              <Button
                onClick={() => setStep(1)}
                className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              >
                Continue to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
