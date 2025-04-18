"use client";

import type React from "react";
import { GalleryVerticalEnd, CheckCircle, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function LoginSuccess({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Retrieve email from session storage
    if (typeof window !== "undefined") {
      const storedEmail = sessionStorage.getItem("userEmail");
      if (storedEmail) {
        setEmail(storedEmail);
      } else {
        router.push("/login");
      }
    }
  }, [router]);

  const handleContinue = () => {
    // In a real app, you would redirect to the dashboard or home page
    router.push("/");
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-6">
          <a href="#" className="flex flex-col items-center gap-2 font-medium">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
              <GalleryVerticalEnd className="size-6" />
            </div>
            <span className="sr-only">Acme Inc.</span>
          </a>

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
            <span className="font-medium text-foreground">{email}</span>. You
            have successfully logged in to your account.
          </p>
        </div>

        <div className="w-full">
          <Button
            onClick={handleContinue}
            className="w-full h-12 rounded-xl bg-black hover:bg-black/90 text-white font-medium"
          >
            Continue to Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
