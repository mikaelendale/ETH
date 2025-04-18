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
            {/* Gradient overlay */}
            <div
                className={cn(
                    "pointer-events-none absolute inset-0 z-10",
                    {
                        "bg-gradient-to-r from-transparent via-transparent to-black": !vertical,
                        "bg-gradient-to-b from-transparent via-transparent to-black": vertical,
                    }
                )}
                style={{
                    maskImage: vertical
                        ? "linear-gradient(to bottom, transparent, black, transparent)"
                        : "linear-gradient(to right, transparent, black, transparent)",
                    WebkitMaskImage: vertical
                        ? "linear-gradient(to bottom, transparent, black, transparent)"
                        : "linear-gradient(to right, transparent, black, transparent)",
                }}
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
