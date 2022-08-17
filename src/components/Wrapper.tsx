import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

type WrapperProps = {
  children: React.ReactElement;
  screen: "ARENA" | "RANKING";
};

export const Wrapper = ({ children, screen }: WrapperProps) => {
  const user = JSON.parse(localStorage.getItem("user") ?? "");

  //por que precisamos do JSON.parse()?
  console.log("sem json", localStorage.getItem("user"));
  console.log("com json", JSON.parse(localStorage.getItem("user") ?? ""));

  return (
    <Main>
      <Profile>
        <img src={user ? user.image : ""} alt="" />
        {user ? user.name : ""}
      </Profile>
      <Navigation>
        <Link to={"/arena"}>
          <Button primary={screen === "ARENA"}>Arena</Button>
        </Link>
        <Link to={"/ranking"}>
          <Button primary={screen === "RANKING"}>Ranking</Button>
        </Link>
      </Navigation>
      <Container>{children}</Container>
    </Main>
  );
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

const Profile = styled.div`
  background: rgba(255, 255, 255, 0.54);
  color: rgba(27, 45, 66, 0.8);
  letter-spacing: -0.02em;
  border-radius: 40px 8px 8px 40px;
  font-weight: 300;
  grid-area: profile;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-right: 1.5rem;
  > img {
    width: 32px;
    border-radius: 50%;
  }
`;

const Navigation = styled.div`
  grid-area: buttons;
  align-content: space-between;
  display: flex;
  justify-content: flex-end;
  > a {
    text-decoration: none;
  }
`;

const StyleButtonPrimary = css`
  background-color: #1b2d42;
  color: #fff;
  border-radius: 48px;
  font-weight: 600;
  border: 1px solid #1b2d42;
`;

const Button = styled.button<{ primary: boolean }>`
  all: unset;
  text-align: center;
  width: 110px;
  height: 32px;
  color: #1b2d42;
  /* color: ${({ primary }) => (primary ? "#fff" : "#1b2d42")}; */
  border-radius: 48px;
  font-weight: 500;
  border: 1px solid transparent;

  ${({ primary }) => primary && StyleButtonPrimary}
`;

const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 3px 8px 1px #cff1e3;
  border-radius: 8px;
  height: 505px;
  grid-area: content;
  overflow: auto;
`;
