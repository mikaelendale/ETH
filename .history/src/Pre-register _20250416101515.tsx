import LoginFlow from "./Auth/Login";
import { ThemeProvider } from "./components/theme-provider";

const Pre_register = () => {
  return (
    <>
      <ThemeProvider>
      <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10 overflow-hidden">
        {/* Premium gradient background image */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/ethiopian-landscape-canyon-of-debre-lingbeek.jpg')] dark:bg-[url('/silver-gradient-dark.png')] bg-no-repeat bg-cover opacity-60 dark:opacity-40"></div>
        </div>

        <div className="w-full max-w-sm relative z-10 bg-background/80 dark:bg-background/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
          <LoginFlow />
        </div>
      </div>
      </ThemeProvider>
    </>
  );
};

export default Pre_register;