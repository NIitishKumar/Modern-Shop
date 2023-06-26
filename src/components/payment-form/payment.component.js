import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import FormButton from '../form-button/button.component'
import { FormContainer, PaymentContainer } from './payment.style'
import { BaseButton } from '../button/button.styles'
import { useSelector } from 'react-redux'
import { user } from '../../store/user/user-selector'
import { totolPrice } from '../../store/cart/cart.selector'

function PaymentForm() {

    const stripe = useStripe();
    const element = useElements();
    const currentUser = useSelector(user);
    const amount = useSelector(totolPrice);
    const [isPaymentProcessing, setisPaymentProcessing] = useState(false);

    const handlePayment = async (e) => {
        e.preventDefault();

        if( !stripe && !element ){return;}

        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method:"post",
            headers:{
                "Content-Type" : "application/json",
            },
            body:JSON.stringify({"amount":(amount * 100)})
        }).then(res => {
            console.log(res)
        })
        console.log(response)

        const { paymentIntent : {client_secret}} = response || {};

        const paymentResult = stripe.confirmCardPayment( client_secret, {
            payment_method : {
                card : element.getElement(CardElement),
                billing_details:{
                    name: currentUser ? currentUser.displayName : "Mohit Singh",
                }
            }
        } )

        if (paymentResult.error) {
            alert(paymentResult.error);
        }else{
            if (paymentResult.paymentIntent.status === "succeeded") {
                alert("Payment Successful !");
            }
        }

    }

  return (
    <div>
        <PaymentContainer>
            <FormContainer onSubmit={handlePayment}>
                <h2>Credit Card Payment</h2>
                <CardElement/>
                <BaseButton type="inverted" >Pay Now</BaseButton>
            </FormContainer>
        </PaymentContainer>
    </div>
  )
}

export default PaymentForm