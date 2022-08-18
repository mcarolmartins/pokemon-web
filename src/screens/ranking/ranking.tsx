import styled from "styled-components";
import { Wrapper } from "../../components/Wrapper";
import { OrderBy } from "./OrderBy";
import { RankingList } from "./RankList";

export const Ranking = () => {
  return (
    <Wrapper screen="RANKING">
      <ContentWrapper>
        <OrderBy />
        <RankingList />
      </ContentWrapper>
    </Wrapper>
  );
};
const ContentWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
`;
