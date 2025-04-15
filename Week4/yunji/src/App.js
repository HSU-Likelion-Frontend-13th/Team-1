import globlaStyle from "./styles/globalStyle";
import Header from './components/Header';
import Content from "./components/Content";
import About from "./components/About"
import Hobby from "./components/Hobby";

function App() {
  return (
    <div className="App">
      <globlaStyle />
      <Header />
      <Content  />
      <About />
      <Hobby />
  </div>
  );
}

export default App;
