import GlobalStyle from "./styles/globalStyles";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Hobby from "./components/hobby/Hobby";

function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        <Header />
      </header>
      <section>
        <Intro />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Hobby />
      </section>
    </>
  );
}

export default App;
