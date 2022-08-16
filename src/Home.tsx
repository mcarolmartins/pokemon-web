import styled from "styled-components";
import { ReactComponent as Logo } from "./assets/icons/logo.svg";
import { ReactComponent as Charmeleon } from "./assets/icons/charmeleon.svg";
import { GoogleLogin } from "@react-oauth/google";

import jwt_decode from "jwt-decode";

//componente TSX declarado com arrow function
export const Home = () => {
  //armazenar no local storage as informações do usuário
  const createUser = (email: string, name: string, picture: string) => {
    localStorage.setItem("user", JSON.stringify({ email, name, picture }));
  };

  return (
    <Main>
      <SectionLogin>
        <Logo />
        <Paragraph>
          desafie seu conhecimento sobre o universo pokemon e descubra se você
          conhece cada um deles neste jogo!
        </Paragraph>

        <GoogleLogin
          text="continue_with"
          width="313"
          shape="circle"
          logo_alignment="center"
          onSuccess={(credentialResponse) => {
            const { email, name, picture } = jwt_decode<{
              email: string;
              name: string;
              picture: string;
            }>(credentialResponse.credential ?? "");

            createUser(email, name, picture);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </SectionLogin>
      <SectionPokemon>
        <Charmeleon />
      </SectionPokemon>
    </Main>
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

const SectionPokemon = styled.section`
  grid-area: pokemon;
  background: linear-gradient(180deg, #d3f3d7 0%, #daf7f0 100%);
  border-radius: 0px 16px 16px 0px;
  padding: 156px 88px;
`;

const Paragraph = styled.p`
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #333333;
  width: 313px;
`;
