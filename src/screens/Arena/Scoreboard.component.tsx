import { useEffect } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as Pokebola } from "../../assets/icons/pokebola.svg";
import api from "../../services/api";

const Scoreboard = ({ pokemonList }: { pokemonList: Array<string> }) => {
  //TODO: função de atualizar o Record dado um acerto,
  //atualizamos o score no banco dado o id salvo no localStorage

  //TODO: chamar a funçao sempre que o SCORE mudar e o mesmo for maior que o record

  return (
    <ListPoints>
      <Points>
        <Pokebola />
        {/* TODO: chamar  o score atual */}
        <Score>687</Score>
      </Points>
      <ListPokemon>
        {pokemonList.map((imageSrc) => {
          return <PokeDisk src={imageSrc} />;
        })}
        {/* <PokeDiskSkeleton />
        <PokeDiskSkeleton />
        <PokeDiskSkeleton /> */}
      </ListPokemon>
      <Ellipsis>...</Ellipsis>
    </ListPoints>
  );
};

const ListPoints = styled.div`
  width: 100%;
  height: 100%;

  background: #ffffff;
  box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.03);
  border-radius: 24px 8px 8px 24px;
`;

const Points = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  column-gap: 1rem;
  padding: 25px 25px 36px;
  box-sizing: border-box;
`;

const Score = styled.strong`
  color: #1b2d42;
  font-size: 18px;
`;

const ListPokemon = styled.div`
  display: grid;
  gap: 1.5rem;
  padding: 0 1.5rem;
  grid-template-columns: auto auto auto;
  justify-content: center;
  align-content: center;
`;

const pokeDiskStyle = css`
  background-color: #f4f4f4;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  padding: 0.5rem;
  box-sizing: border-box;
`;

const PokeDisk = styled.img`
  ${pokeDiskStyle}
`;

const PokeDiskSkeleton = styled.div`
  ${pokeDiskStyle}
`;

const Ellipsis = styled.span`
  font-size: 32px;
  opacity: 30%;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  text-align: end;
  display: block;
`;

export default Scoreboard;
