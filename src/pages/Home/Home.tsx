import { MutableRefObject, useRef } from "react";
import { NavigationItem } from "./Home.constants";
import { MainContainer } from "./Home.styles";
import About from "./components/About/About";
import Donomics from "./components/Donomics/Donomics";
import Footer from "./components/Footer/Footer";
import Initial from "./components/Initial/Initial";
import Partners from "./components/Partners/Partners";

function Home() {
  const handleScrollPage = (
    reference: MutableRefObject<HTMLDivElement | null>
  ) => reference.current?.scrollIntoView({ behavior: "smooth" });

  const homeRef = useRef<null | HTMLDivElement>(null);
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const partnersRef = useRef<null | HTMLDivElement>(null);
  const donomicsRef = useRef<null | HTMLDivElement>(null);

  const navigationItems: NavigationItem[] = [
    { label: "Home", onClick: () => handleScrollPage(homeRef) },
    { label: "About Us", onClick: () => handleScrollPage(aboutRef) },
    {
      label: "Partners",
      onClick: () => handleScrollPage(partnersRef),
    },
    { label: "Donomics", onClick: () => handleScrollPage(donomicsRef) },
  ];

  return (
    <MainContainer>
      <Initial refProp={homeRef} menuItems={navigationItems} />
      <About refProp={aboutRef} />
      <Partners refProp={partnersRef} />
      <Donomics refProp={donomicsRef} />
      <Footer menuItems={navigationItems} />
    </MainContainer>
  );
}

export default Home;
