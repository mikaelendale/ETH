import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/landing/nav-bar";
import Hero from "./components/landing/hero";
import LogoCloud from "./components/landing/logo-cloud";
import BentoGrid from "./components/kokonutui/bento-grid";
import Faq02 from "./components/kokonutui/faq-02";
import { Integrations } from "./components/eldoraui/integrations";
import FooterSection from "./components/footer";

const Home = () => {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Hero />
        <LogoCloud />
              <BentoGrid />
              <Integrations/>
        <Faq02 />
        <FooterSection/>
      </ThemeProvider>
    </>
  );
};

export default Home;
