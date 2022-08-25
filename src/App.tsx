import { createGlobalStyle } from "styled-components";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Home } from "./screens/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Wrapper } from "./components/Wrapper";
import { Arena } from "./screens/Arena/Arena";
import { Ranking } from "./screens/ranking/ranking";

//TSX (XML + TS) -> função que retorna tags HTML.z
//uma função pode ser declarada das seguintes maneiras:
//function soma(a, b) { return a + b }
//const sum = (a, b) => a + b;
//mas para uma função ser TSX, ela precisa retornar HTML.

function App() {
  return (
    //fragment permite agrupar uma lista de filhos (pode existir Home 1, Home 2, Home)
    //sem adicionar nós extras ao DOM. Ele não vai criar tags HTML no DOM.
    <BrowserRouter>
      <GlobalStyle />
      <GoogleOAuthProvider clientId="510743553999-5nn9ftp5grm951do3k0lftuk2rsph7bf.apps.googleusercontent.com">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arena" element={<Arena />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;

//createGlobalStyle é uma maneira de adicionar estilos globais na aplicação.
//esses estilos globais são estilos em comum em toda a aplicação
//por exemplo: a cor de fundo das páginas, qual fonte utilizar no projeto, etc...
const GlobalStyle = createGlobalStyle`
  :root {
    all: unset;
    background-color: #1B2D42;
    font-family: 'Poppins', sans-serif;
    
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
  }
`;
