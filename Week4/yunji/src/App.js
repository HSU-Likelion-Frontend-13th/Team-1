import GloblaStyle from "./styles/GlobalStyle";
import Header from './components/Header';
import Content from "./components/Content";
import About from "./components/About"
import Hobby from "./components/Hobby";

function App() {
  return (
    <div className="App">
      <GloblaStyle />
      <Header />
      <Content  />
      <About />
      <Hobby />
  </div>
  );
}

export default App;
