import styled from "styled-components";
import { ReactComponent as Logo } from "./assets/icons/logo.svg";
import { ReactComponent as Charmeleon } from "./assets/icons/charmeleon.svg";

//componente TSX declarado com arrow function
export const Home = () => {
  return (
    <main>
      <section>
        <Logo />
        <p>
          desafie seu conhecimento sobre o universo pokemon e descubra se você
          conhece cada um deles neste jogo!
        </p>
        <a href="login.html">Continuar como Google</a>
      </section>
      <section>
        <Charmeleon />
      </section>
    </main>
  );
};

const Main = styled.main`
  background: #fafafa;
  border-radius: 1rem;
  display: grid;
  grid-template-areas: "login pokemon";
`;

const SectionLogin = styled.section`
  grid-area: login;
  padding: 152px 88px;
  display: grid;
  grid-gap: 40px;

  > svg {
    width: 316px;
  }
`;
