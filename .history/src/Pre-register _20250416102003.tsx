import LoginFlow from "./Auth/Login";
import { ThemeProvider } from "./components/theme-provider";

const Pre_register = () => {
  return (
    <>
      <ThemeProvider>
        <div
          className="min-h-svh bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/ethiopian-landscape-canyon-of-debre-lingbeek.jpg')",
          }}
        >
          <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10 overflow-hidden">
            <div className="w-full max-w-sm relative z-10 bg-background/80 dark:bg-background/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <LoginFlow />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Pre_register;