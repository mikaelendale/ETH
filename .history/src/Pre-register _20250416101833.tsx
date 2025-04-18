import LoginFlow from "./Auth/Login";
import { ThemeProvider } from "./components/theme-provider";

const Pre_register = () => {
  return (
    <>
      <ThemeProvider>
      <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10 overflow-hidden">
       <div 
        className="min-h-svh bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/silver-gradient-bg.jpg')",
        }}
      >

        <div className="w-full max-w-sm relative z-10 bg-background/80 dark:bg-background/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
          <LoginFlow />
        </div>
      </div>
      </ThemeProvider>
    </>
  );
};

export default Pre_register;