import LoginFlow from "./Auth/Login";
import { ThemeProvider } from "./components/theme-provider";

const Pre_register = () => {
  return (
    <>
      <ThemeProvider>
        <div className="flex min-h-svh flex-col items-center sefheirhgierhgirh;-6 bg-background p-6 md:p-10">
          <div className="w-full max-w-sm">
            <LoginFlow />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Pre_register;