import React from 'react';
import {
  AvatarContainer,
  AvatarImage,
  HeaderContainer,
  Restaurant,
  Title,
} from './DashboardStyles';

const Header = () => {
  return (
    <HeaderContainer className='bg-dark'>
      <Title>Dashboard</Title>
      <AvatarContainer>
        <AvatarImage
          src='https://us.123rf.com/450wm/thesomeday123/thesomeday1231709/thesomeday123170900021/85622928-icono-de-perfil-de-avatar-predeterminado-marcador-de-posici%C3%B3n-de-foto-gris-vectores-de-ilustraciones.jpg?ver=6'
          alt='Ávatar del usuario'
        />
        <form className='d-flex input-group ms-3'>
          <span className='input-group-text' id='basic-addon1'>
            <img src='https://i.imgur.com/tB9uhDh.png' alt='Búsqueda' />
          </span>
          <input
            className='form-control'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
        </form>
      </AvatarContainer>
      <nav className='mt-5'>
        <ul>
          <Restaurant>Tramite 1</Restaurant>
          <Restaurant>Tramite 2</Restaurant>
          <Restaurant>Tramite 3</Restaurant>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
