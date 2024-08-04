import React from 'react';
import errorMark from '../assets/images/errorMark.svg';

const Success = () => {

  const redirect = () => {
    setTimeout(() => {
      window.location.href = "/cart"
    }, 5000)
  }
   
  return (
    <div className="success-container">
            <h1 className="success-title">Payment Fail!</h1>
            <p className="success-message">Please Try Again!</p>
           
            <img src={errorMark} alt="Img Name" srcSet="" />
   {  redirect()}
    </div>
  );
};

export default Success;


