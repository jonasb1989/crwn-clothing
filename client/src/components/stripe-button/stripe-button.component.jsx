import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { response } from 'express';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Rlhmy2bMXagLCZ5CTLxeVQJb00ZhvwZH2m';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => { 
      alert('Payment Successful');
    }).catch(error => {
      console.log('Payment error: ', error);
      alert('There was an error with your payment. Please make sure you use the provided credit card');
    });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
