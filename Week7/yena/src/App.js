import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <div className = "App">
      <GlobalStyle />
      <Header />
      <Main />
    </div>
  )
}

export default App;