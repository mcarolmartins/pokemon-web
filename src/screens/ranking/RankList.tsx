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
  // nesta caso o ranking é um lista e inicializamos com array vazio,
  // sempre vai ser atualizado com uma nova lista, então não precisamos da referencia do valor antigo
  const [ranking, setRanking] = useState<Array<User>>([]);

  // função para pegar os dados de ranking da api
  // pega os dados (data)  e salva no estqado
  const getRanking = async () => {
    const { data } = await api.get("/ranking");
    setRanking(data);
  };

  // useEffect que sera chamando no primeiro render,
  // chamara a função de getRanking
  useEffect(() => {
    getRanking();
  }, []);

  return (
    <Wrapper>
      <ul>
        {/* percorre a lista de ranking utilizando o .map */}
        {ranking.map((usuario, i) => (
          <CardList key={usuario.name}>
            {/*  para cada elemento da posiçao a posiçao */}
            {/* nesse caso i+1 porque as posições começam com 0 */}
            <Position>{i + 1}</Position>
            {/* para cada elemento da posiçao mostra a imagem e nome */}
            <Profile>
              <img src={usuario?.image} referrerPolicy="no-referrer" />
              {usuario.name}
            </Profile>
            {/* para cada elemento da posiçao mostra o score*/}
            <Points>
              <Pokebola />
              pontos:
              <Score>{usuario?.score}</Score>
            </Points>
          </CardList>
        ))}
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
  color: #1b2d42;
  > svg {
    margin-right: 0.5rem;
  }
`;

const Score = styled.strong`
  display: flex;
  justify-content: flex-end;

  color: #1b2d42;
  font-size: 18px;
  min-width: 40px;
  margin-right: 0.5rem;
`;
