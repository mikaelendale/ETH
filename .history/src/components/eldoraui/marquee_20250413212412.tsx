import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  blurIntensity?: number; // Optional: Blur intensity
  gradientWidth?: string; // Optional: Gradient width
  [key: string]: any;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  blurIntensity = 8, // Default blur intensity
  gradientWidth = "4rem", // Default gradient width
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "relative flex overflow-hidden",
        vertical ? "flex-col" : "flex-row",
        className
      )}
      style={{
        "--blur-intensity": `${blurIntensity}px`,
        "--gradient-width": gradientWidth,
      }}
    >
      {/* Gradient overlays */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "var(--gradient-width)",
          background: vertical
            ? "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))"
            : "linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
          filter: "blur(var(--blur-intensity))",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "var(--gradient-width)",
          background: vertical
            ? "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))"
            : "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
          filter: "blur(var(--blur-intensity))",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
