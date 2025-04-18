import React from "react";

const Marquee: React.FC = () => {
    const marqueeStyles = `
        @keyframes marquee {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(calc(-100% - var(--gap)));
            }
        }

        @keyframes marquee-vertical {
            from {
                transform: translateY(0);
            }
            to {
                transform: translateY(calc(-100% - var(--gap)));
            }
        }

        .marquee {
            animation: marquee var(--duration) linear infinite;
        }

        .marquee-vertical {
            animation: marquee-vertical var(--duration) linear infinite;
        }
    `;

    return (
        <>
            <style>{marqueeStyles}</style>
            <div
                className="marquee"
                style={{
                    "--duration": "10s",
                    "--gap": "20px",
                    whiteSpace: "nowrap",
                } as React.CSSProperties}
            >
                {/* Your marquee content here */}
                This is a horizontal marquee.
            </div>
            <div
                className="marquee-vertical"
                style={{
                    "--duration": "10s",
                    "--gap": "20px",
                } as React.CSSProperties}
            >
                {/* Your marquee content here */}
                This is a vertical marquee.
            </div>
        </>
    );
};

export default Marquee;
