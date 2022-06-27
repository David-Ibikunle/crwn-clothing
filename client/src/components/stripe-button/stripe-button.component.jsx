import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K9F0qCjz7YLLmuaZAL9Ye5Ah3pa9qKRWSB8yLfH9muvE9kjgiQG5KLzXOavQ9Eo7KwqYvAYDLhT3T2w4uc8x6ha00MsmeHZm5'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Thank you for giving me money')
        }).catch(error => {
            console.log('Payment Error:', error);
            alert(
                'There was an issue with your payment. Please make sure you used the provided credit card number'
            )
        })
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton