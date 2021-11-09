import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { restaurantSearchAction } from '../../../actions/restaurantSearchAction';

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
    <div className='d-flex input-group ms-3'>
      <span className='input-group-text' id='basic-addon1'>
        <img src='https://i.imgur.com/tB9uhDh.png' alt='Icono de búsqueda' />
      </span>
      <input
        className='form-control'
        type='search'
        placeholder='Search'
        aria-label='Search'
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
