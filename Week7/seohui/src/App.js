import { GlobalStyle } from "./styles/globalStyles";
import Header from "./components/header/Header";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main />
    </div>
  );
}

export default App;
