import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/landing/nav-bar";
import Hero from "./components/landing/hero";
import LogoCloud from "./components/landing/logo-cloud";
import BentoGrid from "./components/kokonutui/bento-grid";
import Faq02 from "./components/kokonutui/faq-02";
import Overview from "./components/cards/overview";

const Home = () => {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Hero />
        <LogoCloud />
              <BentoGrid />\
        <Faq02 />
      </ThemeProvider>
    </>
  );
};

export default Home;
