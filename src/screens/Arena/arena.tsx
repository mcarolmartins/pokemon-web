import styled from "styled-components";
import { Wrapper } from "../../components/Wrapper";
import PokemonSilhouette from "./PokemonSilhouette.component";
import Scoreboard from "./Scoreboard.component";
import { useState } from "react";

export const Arena = () => {
  // por que precisamos colocar 15 posições iniciais com string vazia?
  // por que sem essas posições inicias não conseguiriamos fazer o skeleton
  // skeleton é um tipo de loading que remete que algo está carregando ou ainda vai aparecer.
  // segundo o layout, quando o usuario entra no jogo tem-se 15 skeletons e vai diminuindo conforme ele acerta.
  // portanto preenchemos as 15 posições e vamos aumentando o array com os pokemons de verdade
  const [pokemonList, setPokemonList] = useState<Array<string>>(
    // para melhor entendimento do impacto disso na tela, tentem incializar sem posições, um array sem anda
    new Array(15).fill("")
  );

  // funçao que usa o setPokemonList para atualizar a lista de pokemons salvos,
  // é usada dentro do component de PokemonSilhoutte, na funçao de inputVerify
  const updatePokemonList = (newPokemon: string) => {
    setPokemonList([newPokemon, ...pokemonList]);
  };

  // precisamos de uma variavel que armazena o score local do usuario,
  // mas sabemos que a quantidade de pokemons presente na lista é a
  // quantidade de acertos, certo? visto que quando ele acerta, um pokemon é salvo.
  // então podemos dizer que o score é igual ao tamanho do meu array,
  // mas sem as posições vazias que colocamos no inicio.
  // a funçao filter é um metodo de array do javascript que vai filtrar esse array dado uma condiçao,
  // então quero tirar todos os valores que sao falsos (string vazia),
  // o filtro com Boolean vai deixar só os valores true (os de verdade eu sei quem sao),
  // e logo apos pegamos o tamanho desse array filtrado uilizando length
  const score = pokemonList.filter(Boolean).length;

  console.log("pokemonList", pokemonList);

  return (
    <Wrapper screen="ARENA">
      <ContentWrapper>
        <PokemonSilhouette updatePokemonList={updatePokemonList} />
        <Scoreboard pokemonList={pokemonList} score={score} />
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
