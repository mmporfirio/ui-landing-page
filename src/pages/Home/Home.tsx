import { MainContainer } from "./Home.styles";
import About from "./components/About/About";
import Initial from "./components/Initial/Initial";
import Partners from "./components/Partners/Partners";

function Home() {
  return (
    <MainContainer>
      <Initial />
      <About />
      <Partners />
    </MainContainer>
  );
}

export default Home;
