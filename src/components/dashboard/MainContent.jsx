import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import { MainSection } from './DashboardStyles';

const MainContent = () => {
  const { restaurantSelected } = useSelector(
    (state) => state.restaurantSelected
  );
  const { deliveryStatus } = useSelector((state) => state.deliveryStatus);

  const [status, setStatus] = useState([]);

  useEffect(() => {
    if (restaurantSelected.deliveryStatusID) {
      setStatus(deliveryStatus.slice(0, restaurantSelected.deliveryStatusID));
    }
  }, [deliveryStatus, restaurantSelected.deliveryStatusID]);

  console.log(status);

  return (
    <MainSection className='d-flex flex-column justify-content-center align-items-center'>
      {status.length > 0 ? (
        <div className='container py-3 px-5 mt-4 mb-4'>
          <Card />
        </div>
      ) : (
        <p className='text-muted text-center fs-4'>
          Elige un restaurante para conocer el estado del pedido
        </p>
      )}
    </MainSection>
  );
};

export default MainContent;
