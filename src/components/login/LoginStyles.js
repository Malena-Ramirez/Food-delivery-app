import styled from "styled-components";

export const LoginMain = styled.main`
  background: linear-gradient(45deg, #ff3689 0%, #ff284e 25%, #ff441f 90%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  background-color:#c0c0c075;
  padding: 5em 2.5em;
  border-radius: 20px;
  @media (min-width: 768px) { 
    padding: 6.5em 15em;
   }
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

export const LoginInput = styled.input`
  background-color: #fdfdfd;
  &:focus {
    border-color: #FF441F;
    /* box-shadow: none; */
    /* box-shadow: 2px 2px 10px 1px rgba(255,68,31,0.6);  */
    box-shadow: 0 0 0 .25rem #ff441f75; 
  }
`;