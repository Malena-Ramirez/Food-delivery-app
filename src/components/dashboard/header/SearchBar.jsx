import React, { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  console.log(search);

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
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
