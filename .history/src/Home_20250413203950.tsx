import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/landing/nav-bar";
import Hero from "./components/landing/hero";
import { BentoDemo } from "./components/landing/Bento-grid";
import LogoCloud from "./components/landing/logo-cloud";
import BentoGrid from "./components/kokonutui/bento-grid";

const Home = () => {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Hero />
        <LogoCloud />
              <BentoGrid />
              <
      </ThemeProvider>
    </>
  );
};

export default Home;
