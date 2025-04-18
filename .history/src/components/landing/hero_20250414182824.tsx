import { Button } from "@/components/ui/button";
import Btn11 from "../kokonutui/btn-11";

export default function Hero() {
  return (
    <section className="relative w-full pt-30 md:py-24 lg:py-32 overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('https://cdn1.matadornetwork.com/blogs/1/2021/01/Ethiopia-landscape-3.jpg')] bg-cover bg-center opacity-80 dark:opacity-60"></div>

        {/* Gradient overlay - transitions to white in light mode and black in dark mode */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="max-w-screen-lg mx-auto rounded-2xl bg-background/30 backdrop-blur-sm p-8 md:p-12 lg:p-16">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-primary leading-tight">
              WeyBot - Ask Anything!
            </h1>

            <p className="text-lg md:text-xl text-primary max-w-2xl">
              Craft beautiful interfaces with our minimalist design system and
              component library.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Btn11 className="rounded-xl px-8 py-6 text-base">
                Pre register
              </Btn11>
              <Button
                size="lg"
                variant="ghost"
                className="rounded-xl px-8 py-6 text-base"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
