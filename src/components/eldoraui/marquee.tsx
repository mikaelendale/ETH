import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group relative flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {/* Gradient overlays */}
      <div
        className={cn(
          "absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none",
          { "h-8 inset-x-0 top-0 bg-gradient-to-b": vertical }
        )}
      />
      <div
        className={cn(
          "absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none",
          { "h-8 inset-x-0 bottom-0 bg-gradient-to-t": vertical }
        )}
      />
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
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
