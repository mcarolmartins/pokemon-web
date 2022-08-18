import styled, { css, keyframes } from "styled-components";
import { ReactComponent as GameName } from "../../assets/icons/gameName.svg";
import Bulbasaur from "../../assets/icons/bulbasaur.svg";
import api from "../../services/api";
import { ChangeEvent, useEffect, useState } from "react";

type PokemonProps = {
  name: string;
  image: string;
  cry: HTMLAudioElement;
};

const PokemonSilhouette = ({
  updatePokemonList,
}: {
  updatePokemonList: (newPokemonList: string) => void;
}) => {
  //TODO: pegar os pokemons da api
  const [pokemon, setPokemon] = useState<PokemonProps>();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // console.log("pokemonState: ", pokemon);

  const updatePokemon = (newPokemon: PokemonProps) => {
    setPokemon(newPokemon);
  };
  const getPokemon = async () => {
    const { data: PokemonData } = await api.get("/pokemon");
    const newPokemon = {
      name: PokemonData.name,
      image: PokemonData.image,
      cry: new Audio(PokemonData.cry),
    };
    // console.log("pokemonApi: ", newPokemon);
    updatePokemon(newPokemon);
    setIsVisible(false);
  };
  //TODO: chamar o primeiro pokemon
  useEffect(() => {
    getPokemon();
  }, []);

  //TODO: fazer funcao que verifica se o valor do input é igual ao valor do pokemon,
  const InputVerify = (event: ChangeEvent<HTMLInputElement>) => {
    // verificar se o event.target.value
    if (event.target.value === pokemon?.name) {
      console.log("acertou");
      setIsVisible(true);
      updatePokemonList(pokemon.image);
      //TODO: atualizar score e lista de acertos
      event.target.value = "";
      setTimeout(() => {
        getPokemon();
      }, 300);
    }

    console.log(event);
  };

  return (
    <Pokemon>
      <GameName />
      <ImageContainer>
        <Image isVisible={isVisible} src={pokemon?.image} />
      </ImageContainer>
      <Input onChange={InputVerify} />
      {pokemon?.name}
    </Pokemon>
  );
};

const Pokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 308px;
`;

const showme = keyframes`
    0% {
        filter: brightness(0) contrast(0.75);
      }
    100% {
        filter: brightness(1) contrast(1);
      }
`;

const Image = styled.img<{ isVisible: boolean }>`
  width: 200px;
  height: 200px;
  filter: brightness(0) contrast(0.75);

  /* TODO: condiçao para fazer a animaçao */
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${showme} 500ms forwards;
    `}
`;

const ImageContainer = styled.div`
  border: 1px solid #dfdfdf;
  border-radius: 8px;

  width: 100%;
  height: 263px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  all: unset;
  width: calc(100% - 16px);
  height: 44px;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  font-size: 18px;
  padding: 8px;
  grid-area: input;
`;

export default PokemonSilhouette;
