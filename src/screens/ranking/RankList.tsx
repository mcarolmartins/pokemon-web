import { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Pokebola } from "../../assets/icons/pokebola.svg";
import api from "../../services/api";

type User = {
  name: string;
  email: string;
  image: string;
  score: number;
};

export const RankingList = () => {
  //TODO: pegar o ranking do da api e rodar sempre ao att a pagina (primeriro render)

  return (
    <Wrapper>
      <ul>
        <CardList>
          <Position>1</Position>
          <Profile>
            <img
              src="https://lh3.googleusercontent.com/a-/AFdZucpuyV6gqeDohzCfXIDFjPdiC__ebEWaxjFU4Zm0Eg=s96-c"
              referrerPolicy="no-referrer"
            />
            Gabrielly
          </Profile>
          <Points>
            <Pokebola />
            pontos:
            <Score>{111}</Score>
          </Points>
        </CardList>
        <CardList>
          <Position>2</Position>
          <Profile>
            <img
              src="https://lh3.googleusercontent.com/a-/AFdZucpuyV6gqeDohzCfXIDFjPdiC__ebEWaxjFU4Zm0Eg=s96-c"
              referrerPolicy="no-referrer"
            />
            Gabrielly
          </Profile>
          <Points>
            <Pokebola />
            pontos:
            <Score>{111}</Score>
          </Points>
        </CardList>
        <CardList>
          <Position>3</Position>
          <Profile>
            <img
              src="https://lh3.googleusercontent.com/a-/AFdZucpuyV6gqeDohzCfXIDFjPdiC__ebEWaxjFU4Zm0Eg=s96-c"
              referrerPolicy="no-referrer"
            />
            Gabrielly
          </Profile>
          <Points>
            <Pokebola />
            pontos:
            <Score>{111}</Score>
          </Points>
        </CardList>
        <CardList>
          <Position>4</Position>
          <Profile>
            <img
              src="https://lh3.googleusercontent.com/a-/AFdZucpuyV6gqeDohzCfXIDFjPdiC__ebEWaxjFU4Zm0Eg=s96-c"
              referrerPolicy="no-referrer"
            />
            Gabrielly
          </Profile>
          <Points>
            <Pokebola />
            pontos:
            <Score>{111}</Score>
          </Points>
        </CardList>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 13.5rem;

  > ul {
    padding: 0;
    margin: 0;

    > :first-child {
      background: rgba(255, 230, 142, 0.57);
    }

    > :nth-child(2) {
      background: #eaeaea;
    }

    > :nth-child(3) {
      background: rgba(226, 170, 23, 0.31);
    }
  }
`;

const CardList = styled.li`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;

  height: 56px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  margin-bottom: 12px;
`;

const Position = styled.span`
  font-weight: 600;
  font-size: 1rem;
  color: #1b2d42;
  margin: 1rem;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 32px;
    border-radius: 50%;
    margin: 0.5rem;
  }
`;

const Points = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  column-gap: 1rem;
  box-sizing: border-box;
  color: #1b2d42;
  margin: 1rem;
`;

const Score = styled.strong`
  display: flex;
  justify-content: flex-end;

  color: #1b2d42;
  font-size: 18px;
  min-width: 40px;
`;
