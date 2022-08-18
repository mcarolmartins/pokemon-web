import styled from "styled-components";

export const OrderBy = () => {
  return (
    <Wrapper>
      <Order>ordenado por:</Order>
      <OrderOptions>maior pontuação</OrderOptions>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1.5rem;
  display: flex;
  justify-content: flex-end;
`;

const Order = styled.span`
  font-weight: 600;
  font-size: 12px;
  color: #1b2d42;
`;
const OrderOptions = styled.span`
  font-size: 12px;
  text-align: center;
  color: #1b2d42;
  margin: 0 0.5rem; ;
`;
