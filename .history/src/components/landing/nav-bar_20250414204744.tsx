"use client";

import { useState, useEffect, type SetStateAction } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../mode-toggle";
import ApplicationLogo from "@/components/ApplicationLogo";
import ApplicationName from "../ApplicationName";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Handle theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full flex justify-center z-50 px-4 pt-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <nav
        className={cn(
          "transition-all duration-500",
          "rounded-full flex items-center justify-between",
          "backdrop-blur-xl border border-white/10", // Enhanced blur effect
          scrolled
            ? "bg-gradient-to-r from-background/60 via-background/70 to-background/60 py-1.5 px-3 scale-[0.92] shadow-lg"
            : "bg-gradient-to-r from-background/40 via-background/50 to-background/40 py-2.5 px-5 shadow-xl",
          isHovered && !scrolled && "scale-[1.03] shadow-2xl",
          isDark ? "shadow-primary/20" : "shadow-black/15"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          boxShadow:
            isHovered && !scrolled
              ? `0 10px 30px -10px ${
                  isDark ? "rgba(124, 58, 237, 0.3)" : "rgba(124, 58, 237, 0.3)"
                }`
              : undefined,
        }}
      >
        <div className="flex items-center justify-between w-auto max-w-full px-4">
          {/* Logo */}
          <a
            href="/"
            className={cn(
              "flex items-center space-x-2",
              scrolled ? "scale-95" : ""
            )}
          >
            <div
              className={cn(
                "flex items-center justify-center rounded-full transition-all duration-300",
                scrolled ? "h-7 w-7" : "h-8 w-8"
              )}
            >
              <ApplicationLogo />
            </div>
            <span className={cn("font-bold", scrolled ? "text-lg" : "text-xl")}>
              <ApplicationName />
            </span>
          </a>
          &nbsp; &nbsp; &nbsp;
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { name: "Home", href: "/", id: "home" },
              {
              name: "Features",
              href: "#features",
              id: "features",
              },
              {
              name: " How It Works ",
              href: "#how",
              id: "how",
              },
              { name: "FAQ ", href: "#FAQ ", id: "FAQ " },
              {
              name: " Pre-Register",
              href: "/Pre-Register",
              id: "Pre-Register",
              },
            ].map((link) => (
              <a
              key={link.id}
              href={link.href}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                "hover:bg-primary/10",
                window.location.pathname === link.href
                ? "text-foreground"
                : "text-foreground/70 hover:text-foreground"
              )}
              >
              {link.name}
              {window.location.pathname === link.href && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
              </a>
            ))}
          </div>
          &nbsp; &nbsp; &nbsp;
          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-1">
            <ModeToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden rounded-full transition-all duration-300",
                "hover:bg-primary/10 hover:scale-110",
                scrolled ? "h-8 w-8" : "h-9 w-9"
              )}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X
                  className={cn(
                    "transition-all",
                    scrolled ? "h-4 w-4" : "h-5 w-5"
                  )}
                />
              ) : (
                <Menu
                  className={cn(
                    "transition-all",
                    scrolled ? "h-4 w-4" : "h-5 w-5"
                  )}
                />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Floating Island Style */}
      {isMobile && (
        <div
          className={cn(
            "absolute top-20 left-1/2 -translate-x-1/2 w-[85%] max-w-md",
            "rounded-2xl bg-gradient-to-b from-background/95 to-background/90 backdrop-blur-lg",
            "transition-all duration-300 ease-out z-40",
            "border border-white/10",
            isOpen
              ? "opacity-100 translate-y-0 shadow-xl"
              : "opacity-0 -translate-y-4 pointer-events-none"
          )}
          style={{
            boxShadow: isOpen
              ? `0 10px 25px -5px ${
                  isDark ? "rgba(124, 58, 237, 0.2)" : "rgba(0, 0, 0, 0.15)"
                }`
              : "none",
          }}
        >
          <div className="flex flex-col p-2">
            {/* Notch design element */}
            <div className="w-full flex justify-center mb-2">
              <div className="w-10 h-1 bg-muted-foreground/20 rounded-full" />
            </div>

            {[
              { name: "Home", href: "/", id: "home" },
              {
                name: "Features",
                href: "#features",
                id: "features",
              },
              {
                name: " How It Works ",
                href: "#how",
                id: "how",
              },
              { name: "FAQ ", href: "#FAQ ", id: "FAQ " },
              {
                name: " Pre-Register",
                href: "#Pre-Register",
                id: "Pre-Register",
              },
            ].map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                className={cn(
                  "px-4 py-3 rounded-xl transition-all duration-300",
                  "hover:bg-primary/10",
                  activeLink === link.id
                    ? "bg-primary/5 text-foreground font-medium"
                    : "text-foreground/70"
                )}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Backdrop for mobile menu */}
      {isMobile && (
        <div
          className={cn(
            "fixed inset-0 bg-background/10 backdrop-blur-sm z-30 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsOpen(false)}
        />
      )}
    </motion.div>
  );
}
