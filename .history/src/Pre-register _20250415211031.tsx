import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/landing/nav-bar"; 
import { LoginForm } from "./Auth/Login";

const Pre_register = () => {
  return (
    <>
      <ThemeProvider> 
        <LoginForm
      </ThemeProvider>
    </>
  );
};

export default Pre_register;
