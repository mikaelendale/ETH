import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/landing/nav-bar"; 

const Pre_register = () => {
  return (
    <>
      <ThemeProvider> 
        <Login/>
      </ThemeProvider>
    </>
  );
};

export default Pre_register;
