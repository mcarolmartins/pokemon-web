import { createGlobalStyle } from "styled-components";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Home } from "./Home";

//TSX (XML + TS) -> função que retorna tags HTML.
//uma função pode ser declarada das seguintes maneiras:
//function soma(a, b) { return a + b }
//const sum = (a, b) => a + b;
//mas para uma função ser TSX, ela precisa retornar HTML.

function App() {
  return (
    //fragment permite agrupar uma lista de filhos (pode existir Home 1, Home 2, Home)
    //sem adicionar nós extras ao DOM. Ele não vai criar tags HTML no DOM.
    <>
      <GlobalStyle />
      <GoogleOAuthProvider clientId="510743553999-5nn9ftp5grm951do3k0lftuk2rsph7bf.apps.googleusercontent.com">
        <Home />
      </GoogleOAuthProvider>
    </>
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
