import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { restaurantSearchAction } from '../../../actions/restaurantSearchAction';
import {
  SearchBarContainer,
  SearchBarInput,
  SearchBarIcon,
  SearchBarImg,
} from '../DashboardStyles';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(restaurantSearchAction(search));
  }, [dispatch, search]);

  return (
    <SearchBarContainer className='d-flex input-group'>
      <SearchBarIcon className='input-group-text' id='basic-addon1'>
        <SearchBarImg
          src='https://i.imgur.com/tB9uhDh.png'
          alt='Icono de búsqueda'
        />
      </SearchBarIcon>
      <SearchBarInput
        className='form-control'
        type='search'
        placeholder='Buscar'
        aria-label='Search'
        value={search}
        onChange={handleChange}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
