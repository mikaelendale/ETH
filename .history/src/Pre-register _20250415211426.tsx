import { ThemeProvider } from "./components/theme-provider";
import LoginForm from "./Auth/Login";

const Pre_register = () => {
  return (
    <>
      <ThemeProvider> 
         <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
            <LoginForm />
            </div>
      </ThemeProvider>
    </>
  );
};

export default Pre_register;
