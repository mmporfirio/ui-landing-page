import { MainContainer } from "./Home.styles";
import About from "./components/About/About";
import Donomics from "./components/Donomics/Donomics";
import Footer from "./components/Footer/Footer";
import Initial from "./components/Initial/Initial";
import Partners from "./components/Partners/Partners";

function Home() {
  return (
    <MainContainer>
      <Initial />
      <About />
      <Partners />
      <Donomics />
      <Footer />
    </MainContainer>
  );
}

export default Home;
