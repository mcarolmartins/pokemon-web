import styled from "styled-components";
import { Wrapper } from "../../components/Wrapper";
import PokemonSilhouette from "./PokemonSilhouette.component";
import Scoreboard from "./Scoreboard.component";
import { useState } from "react";

export const Arena = () => {
  //TODO: VAMOS EXPLICAR DEPOIS
  const [pokemonList, setPokemonList] = useState<Array<string>>(
    new Array(15).fill("")
  );

  const updatePokemonList = (newPokemon: string) => {
    setPokemonList([...pokemonList, newPokemon]);
  };

  console.log("pokemonList", pokemonList);

  return (
    <Wrapper screen="ARENA">
      <ContentWrapper>
        <PokemonSilhouette updatePokemonList={updatePokemonList} />
        <Scoreboard pokemonList={pokemonList} />
      </ContentWrapper>
    </Wrapper>
  );
};

const ContentWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr min-content;
  justify-items: center;
  align-items: center;
  height: 505px;
`;
