import { ThemeProvider } from "./components/theme-provider";
import LoginForm from "./Auth/Login";

const Pre_register = () => {
  return (
    <>
      <ThemeProvider> 
        <LoginForm/>
      </ThemeProvider>
    </>
  );
};

export default Pre_register;
