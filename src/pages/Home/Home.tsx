import { MainContainer } from "./Home.styles";
import About from "./components/About/About";
import Initial from "./components/Initial/Initial";

function Home() {
  return (
    <MainContainer>
      <Initial />
      <About />
    </MainContainer>
  );
}

export default Home;
