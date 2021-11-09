import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deliveryAction } from './actions/deliveryAction';
import { restaurantsAction } from './actions/restaurantsAction';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import GlobalStyle from './globalStyles';

function App() {
  const { logged } = useSelector(state => state.logged);

  const dispatch = useDispatch();

  useEffect(() => {
    const getList = (category, action) => {
      axios.get(`http://localhost:3004/${category}`)
        .then((res) => {
          const list = res.data;
          dispatch(action(list))
        })
    }
    getList("restaurants", restaurantsAction);
    getList("deliveryStatus", deliveryAction);

  }, [dispatch]);


  return (
    <>
      <GlobalStyle />
      {
        logged ? <Dashboard /> : <Login />
      }

    </>
  );
}

export default App;
