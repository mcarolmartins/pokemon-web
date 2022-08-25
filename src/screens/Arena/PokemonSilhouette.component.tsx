import styled, { css, keyframes } from "styled-components";
import { ReactComponent as GameName } from "../../assets/icons/gameName.svg";
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
  const [pokemon, setPokemon] = useState<PokemonProps>();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // console.log("pokemonState: ", pokemon);

  // função que atualiza o estado do pokemon atual
  const updatePokemon = (newPokemon: PokemonProps) => {
    setPokemon(newPokemon);
  };

  // Função para pegar os pokemons da api
  // pega um pokemon por fez,
  // os dados que queremos são: name, image e cry (audio), por isso desestruturamos de data
  // tbm precisamos chamar a funçao que atualiza o pokemon atual
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
  // useEffect: quando acontece o primeiro render da pagina (primeiro carregamento):
  // - chamar a função getPokemon
  useEffect(() => {
    getPokemon();
  }, []);

  // funcao InputVerify que é responsavel por:
  // - verificar se o valor do input é igual ao nome do pokemon,
  // - sendo igual, reseta o valor do input
  // - sendo igual, atualizar nossa lista de pokemons salvos
  // - sendo igual, atualiza o estado de isVisible para controlar a animação
  // - sendo igual, chama novamente a função de getPokemon com atraso de 300ms
  const InputVerify = (event: ChangeEvent<HTMLInputElement>) => {
    // event.target.value é o valor digitado no input
    if (event.target.value === pokemon?.name) {
      console.log("acertou");
      event.target.value = "";
      updatePokemonList(pokemon.image);
      setIsVisible(true);

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
