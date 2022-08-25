import { useEffect } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as Pokebola } from "../../assets/icons/pokebola.svg";
import api from "../../services/api";

const Scoreboard = ({
  pokemonList,
  score,
}: {
  pokemonList: Array<string>;
  score: number;
}) => {
  // useEffect que sera chamando no primeiro render, e tb quando o score mudar
  // quando isso acontecer, verifica se o score é maio do que o record salvo no localStorage
  // no inicio dizemos que o record era 0, então se o usuario acertar um pokemon,
  // ja vai entrar na conndição e atualizaremos o seu score no banco de dados e o record no localStorage
  // ou seja, so salvaremos um novo score no banco de dados, quando o score do game atual superar o record salvo
  useEffect(() => {
    const user = localStorage.getItem("user");
    const data = user ? JSON.parse(user) : {};

    //se o score do usuario for maior que o record salvo no localStorage
    if (score > data.record) {
      updateScore();
      localStorage.setItem("user", data);
    }
  }, [score]);

  // funcão que atualiza o valor do score no banco de dados
  // pegamos o valor de user salvo no localStorage
  // atualizamos no usuario com o metodo de patch, passando a URL e id
  // o id pegamos de ...
  // depois que atualizamos o usuario, setamos o valor retornado da api (dados atualizados) no localStorage,
  // ou seja, lembrando que inicializamos o record do localStorage com 0?
  // agora que atualizamos o score no banco de dados, podemos atualizar nosso record local tb
  const updateScore = async () => {
    const user = localStorage.getItem("user");
    const data = user ? JSON.parse(user) : {};

    try {
      const { data: userUpdated } = await api.patch(`/user/${data._id}`, {
        score: score,
      });
      localStorage.setItem(
        "user",
        JSON.stringify({ ...userUpdated, record: score })
      );
    } catch (err) {
      console.log("deu ruim: ", err);
    }
  };

  return (
    <ListPoints>
      <Points>
        <Pokebola />
        {/*  chama o score atual, que vem da prop */}
        <Score>{score}</Score>
      </Points>
      <ListPokemon>
        {/* o .slice vai "cortar" o meu array para que fique sempre 15 posiçoes, 
          exemplo: o array atual tem 30 posições, ou seja, as 15 iniciais + 15 de pokemons acertados.
          mas seguindo o padrão do layout, só queremos mostrar 15 posiçoes, as 15 ultimas, então 
          utilizamos o slice para limitar meu array
        */}
        {/* logo apos vou percorrer o meu array pokemonList com o .map */}
        {pokemonList.slice(0, 15).map((imageURL, i) =>
          // para fazer o skeleton eu verifico se nessa posiçao o valor é string vazia
          imageURL === "" ? (
            // se for string vazia mostra meu skeleton ( o valor key é so boas praticas)
            <PokeDiskSkeleton key={`skeleton_id_${i}`} />
          ) : (
            // se não for string vazia mostra meu component com o src, sendo que esse src está salvo na posiçao
            <PokeDisk key={`id_${i}`} src={imageURL} />
          )
        )}
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
