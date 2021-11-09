import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import { MainSection } from '../DashboardStyles';

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

  return (
    <MainSection>
      {status.length > 0 ? (
        <div className='container py-3 px-5 mt-4 mb-4'>
          <Card status={status} />
        </div>
      ) : (
        <div className='h-100 d-flex align-items-center justify-content-center'>
          <p className='text-muted text-center fs-4'>
            Elige un restaurante para conocer el estado del pedido
          </p>
        </div>
      )}
    </MainSection>
  );
};

export default MainContent;
