import React from 'react';
import checkMark from '../assets/images/checkMark.svg';

const Success = () => {

  const redirect = () => {
    setTimeout(() => {
      window.location.href = "/"
    }, 5000)
  }
   
  return (
    <div className="success-container">
            <h1 className="success-title">Payment Successful!</h1>
            <p className="success-message">Thank you for your purchase. Your transaction has been completed successfully.</p>
           
            <img src={checkMark} alt="Img Name" srcSet="" />
   {  redirect()}
    </div>
  );
};

export default Success;


