import styled from "styled-components";

export const LoginMain = styled.main`
  background: linear-gradient(45deg, #ff3689 0%, #ff284e 25%, #ff441f 90%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.h1`
  display: none;
`;

export const LogoImg = styled.img`
  border-radius: 50%;
  width: 50vw;
  height: 50vw;
  max-width: 270px;
  max-height: 270px;
  min-width: 200px;
  min-height: 200px;
`;