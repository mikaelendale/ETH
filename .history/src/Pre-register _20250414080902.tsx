import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/landing/nav-bar";
import Hero from "./components/landing/hero";
import LogoCloud from "./components/landing/logo-cloud";
import BentoGrid from "./components/kokonutui/bento-grid";
import Faq02 from "./components/kokonutui/faq-02";
import { Integrations } from "./components/eldoraui/integrations";

const Pre_register = () => {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Hero />
        <LogoCloud />
        <BentoGrid />
        <Integrations />
        <Faq02 />
      </ThemeProvider>
    </>
  );
};

export default Home;
