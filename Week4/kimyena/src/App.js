import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Hobby from "./components/Hobby";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header>
        <Header />
      </header>
      <nav>
        <Nav />
      </nav>
      <section>
        <About />
      </section>
      <section>

      </section>
    </div>
  )
}

export default App;