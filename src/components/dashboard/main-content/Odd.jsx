import React from 'react';

const Odd = ({ deliveryStatus }) => {
  return (
    <div className='row'>
      <div className='col-sm'> {/*<!--spacer-->*/} </div>
      {/* <!-- timeline item 1 center dot --> */}
      <div className='col-sm-1 text-center flex-column d-none d-sm-flex'>
        <div className='row h-50'>
          <div className='col'>&nbsp;</div>
          <div className='col'>&nbsp;</div>
        </div>
        <h5 className='m-2'>
          <span className='badge rounded-pill bg-light border'>&nbsp;</span>
        </h5>
        <div className='row h-50'>
          <div className='col border-end'>&nbsp;</div>
          <div className='col'>&nbsp;</div>
        </div>
      </div>
      {/* <!-- timeline item 1 event content --> */}
      <div className='col-sm py-2'>
        <div className='card'>
          <div className='card-body'>
            <h4 className='card-title'>
              <i className={`${deliveryStatus.icon} fs-3 me-3`}></i>
              {deliveryStatus.message}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Odd;
