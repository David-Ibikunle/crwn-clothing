import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K9F0qCjz7YLLmuaZAL9Ye5Ah3pa9qKRWSB8yLfH9muvE9kjgiQG5KLzXOavQ9Eo7KwqYvAYDLhT3T2w4uc8x6ha00MsmeHZm5'

    const onToken = token => {
        console.log(token);
        alert('Thank you for giving me money')
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