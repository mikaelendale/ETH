import LoginFlow from "./Auth/Login";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";

const Pre_register = () => {
  return (
    <>
      <ThemeProvider>
        <div className="absolute p top-4 right-4 z-50">
          <ModeToggle />
          </div>
        <ModeToggle/>
        <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10 overflow-hidden">
          <div className="w-full max-w-sm relative z-10 backdrop-blur-sm p-6 rounded-2xl ">
            <LoginFlow />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Pre_register;
