import LaloDev from "../../../public/images/partners/Black_lalo_Dev.svg";
import { Button } from "../ui/button";
export default function LogoCloud() {
  return (
    <section className="bg-background pb-30">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-lg font-medium">
          Your favorite companies are our partners.
        </h2>
        <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
          <img
            className="h-18 w-fit dark:invert"
            src={LaloDev}
            alt="Lalo Dev Logo"
            width="auto"
          />  
          <Button
            className="h-5 w-fit dark:invert"
          />
          
        </div>{" "}
      </div>
    </section>
  );
}
