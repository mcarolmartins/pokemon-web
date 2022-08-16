import styled from "styled-components";

export const Wrapper = () => {
  return <Main>Iaê!</Main>;
};
const Main = styled.main`
  margin: 0 auto;
  background: linear-gradient(180deg, #d2f3d6 0%, #daf7f1 100%);
  border-radius: 16px;
  display: grid;
  align-items: center;
  width: 952px;
  padding: 1rem 4rem 4rem 4rem;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
  grid-template-areas:
    "profile buttons"
    "content content";
  grid-gap: 1rem;
`;
