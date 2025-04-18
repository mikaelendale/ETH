"use client";

import type React from "react";
import { GalleryVerticalEnd, ArrowLeft } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ModernInput, ProgressBar } from "./ui-components";

interface PhoneVerificationFormProps
  extends React.ComponentPropsWithoutRef<"div"> {
  email: string;
  onSubmit: (phone: string) => void;
  onBack: () => void;
}

export function PhoneVerificationForm({
  className,
  email,
  onSubmit,
  onBack,
  ...props
}: PhoneVerificationFormProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsLoading(false);
    onSubmit(phoneNumber);
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
                onClick={onBack}
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
  );
}
