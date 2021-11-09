import styled from "styled-components";

export const DashboardMain = styled.main`
  min-height: 100vh;
  width: 100vw;
  display: grid;
  @media (min-width: 460px) { 
    grid-template-columns: 1fr 3fr;
   }
  @media (min-width: 768px) { 
    grid-template-columns: 1fr 3fr;
   }
`;

export const HeaderContainer = styled.header`
  padding: 1em 1.5em;
`;

export const MainSection = styled.section`
  background-color: #e8e6e6;
`;

export const Title = styled.h1`
  display: none;
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width:  460px) { 
    flex-wrap: wrap;
   }
   @media (min-width: 768px) { 
    flex-wrap: nowrap;
   }
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

export const RestaurantContainer = styled.ul`
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  @media (min-width: 375px) { 
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width:  460px) { 
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 768px) { 
    max-width: 300px;
    margin: 0 auto;
  }
`;

export const Restaurant = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 1.5em;
  border-radius: 10px;
  margin-bottom: 1em;
  background-color: ${props => props.isSelected ? '#ff441f' : '#c0c0c075'};
  color: white;
  &:hover{
    cursor: pointer;
    filter: drop-shadow(0 0 0.75rem #AAAAAA);
  }
  @media (min-width: 768px) { 
    flex-wrap: nowrap;
    justify-content: flex-start;
   }
`;

export const RestaurantLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const SearchBarContainer = styled.div`
  margin-left: 1em;
  @media (min-width:  460px) { 
    margin-left: 0;
   }
   @media (min-width: 768px) { 
    margin-left: 2em;
   }
`;

export const SearchBarInput = styled.input`
  &:focus {
    border-color: #FF441F;
    box-shadow: none; 
  }
  
`;

export const SearchBarIcon = styled.span`
  @media (min-width:  460px) { 
    display:none;
   }
   @media (min-width:  768px) { 
    display:flex;
   }
`;

export const SearchBarImg = styled.img`
  width: 15px;
  height: auto;
`;

export const TimeLineContainer = styled.div`
  max-width: 900px;
  margin: auto;
`;