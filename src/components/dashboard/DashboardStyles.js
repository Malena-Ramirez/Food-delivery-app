import styled from "styled-components";

export const DashboardMain = styled.main`
  min-height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export const HeaderContainer = styled.header`
  padding: 1em 1.5em;
`;

export const MainSection = styled.section`
  /* border: 1px solid black; */
`;

export const Title = styled.h1`
  display: none;
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;

export const Restaurant = styled.li`
  list-style: none;
  padding: 1.5em 2em;
  border-radius: 10px;
  margin-bottom: 1em;
  background: linear-gradient(45deg, #ff3689 0%, #ff284e 25%, #ff441f 90%);
  &:hover{
    cursor: pointer;
    filter: drop-shadow(0 0 0.75rem #AAAAAA);
  }
`;