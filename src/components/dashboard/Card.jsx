import React from 'react';
import Even from './Even';
import Odd from './Odd';

const Card = ({ status }) => {
  const isOdd = (num) => {
    if (num % 2) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {status.length > 0 &&
        status.map((element) => {
          return isOdd(element.id) ? (
            <Odd deliveryStatus={element} key={element.id} />
          ) : (
            <Even deliveryStatus={element} key={element.id} />
          );
        })}
    </>
  );
};

export default Card;
