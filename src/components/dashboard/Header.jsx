import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restaurantSelectedAction } from '../../actions/restaurantSelectedAction';
import {
  AvatarContainer,
  AvatarImage,
  HeaderContainer,
  Restaurant,
  RestaurantLogo,
  Title,
} from './DashboardStyles';

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const { restaurants } = useSelector((state) => state.restaurants);
  const { image, orders } = user;

  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    let restaurantsOrders = [];
    let obj = {};
    orders.forEach((order) => {
      restaurants.forEach((restaurant) => {
        if (order.restaurantID === restaurant.id) {
          obj = {
            restaurant,
            deliveryStatusID: order.deliveryStatusID,
          };
        }
      });
      restaurantsOrders.push(obj);
    });

    setOrdersList(restaurantsOrders);
  }, [orders, restaurants]);

  const dispatch = useDispatch();

  const handleClick = (restaurant) => {
    dispatch(restaurantSelectedAction(restaurant));
  };

  return (
    <HeaderContainer className='bg-dark'>
      <Title>Dashboard</Title>
      <AvatarContainer>
        <AvatarImage src={image} alt='Ávatar del usuario' />
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
          {ordersList.length > 0 &&
            ordersList.map((order) => {
              const { restaurant } = order;

              return (
                <Restaurant
                  key={restaurant.id}
                  onClick={() => handleClick(order)}
                >
                  <RestaurantLogo
                    src={restaurant.image}
                    alt='Logo del restaurante'
                  />
                  {restaurant.name}
                </Restaurant>
              );
            })}
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
