import globlaStyle from "./styles/globalStyle";
import Header from './components/Header';
import Content from "./components/Content";
import About from "./components/About"

function App() {
  return (
    <div className="App">
      <globlaStyle />
      <Header />
      <Content  />
      <About />
  </div>
  );
}

export default App;
