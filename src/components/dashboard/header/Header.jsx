import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restaurantSelectedAction } from '../../../actions/restaurantSelectedAction';
import {
  AvatarContainer,
  AvatarImage,
  HeaderContainer,
  Restaurant,
  RestaurantLogo,
  Title,
  RestaurantContainer,
} from '../DashboardStyles';
import SearchBar from './SearchBar';

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const { restaurants } = useSelector((state) => state.restaurants);
  const { restaurantSelected } = useSelector(
    (state) => state.restaurantSelected
  );
  const { restaurantSearch } = useSelector((state) => state.restaurantSearch);

  const { image, orders } = user;

  const { id: selectedID } = restaurantSelected;

  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    let restaurantsOrders = [];
    let obj = {};
    orders.forEach((order) => {
      restaurants.forEach((restaurant, index) => {
        if (order.restaurantID === restaurant.id) {
          obj = {
            restaurant,
            deliveryStatusID: order.deliveryStatusID,
            id: 1000 + index,
          };
        }
      });
      restaurantsOrders.push(obj);
    });
    setOrdersList(restaurantsOrders);
  }, [orders, restaurants]);

  const filterOrders = useMemo(() => {
    if (!restaurantSearch) return ordersList;

    return ordersList.filter((order) =>
      order.restaurant.name
        .toLowerCase()
        .includes(restaurantSearch.toLowerCase())
    );
  }, [ordersList, restaurantSearch]);

  const dispatch = useDispatch();

  const handleClick = (restaurant) => {
    dispatch(restaurantSelectedAction(restaurant));
  };

  return (
    <HeaderContainer className='bg-dark'>
      <Title>Dashboard</Title>
      <AvatarContainer>
        <AvatarImage src={image} alt='Ávatar del usuario' />
        <SearchBar />
      </AvatarContainer>
      <nav className='mt-5'>
        <RestaurantContainer className='px-2'>
          {filterOrders.length > 0 ? (
            filterOrders.map((order) => {
              const { restaurant } = order;

              return (
                <Restaurant
                  key={restaurant.id}
                  onClick={() => handleClick(order)}
                  isSelected={order.id === selectedID}
                >
                  <RestaurantLogo
                    src={restaurant.image}
                    alt='Logo del restaurante'
                  />
                  <span className='text-center'>{restaurant.name}</span>
                </Restaurant>
              );
            })
          ) : (
            <p className='text-secondary text-center fs-4 px-2'>
              No se encontraron resultados
            </p>
          )}
        </RestaurantContainer>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
