import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "./stripe.css";
import { useStore } from "../zustand/store";
import MessageCardVoid from "../components/MessageCardVoid";



const stripePromise = loadStripe(
  "pk_test_51MNjItANEHdq6jhMvuGZgom8AY43AkKlYRRbEgOv94vpes2BZtGkq4wyeh5nZ7shYqRERTcQ2KclbBwxHs2ba4sR00IdtXhx9b"
);


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

export default function StripePay() {
  const [clientSecret, setClientSecret] = useState("");
  const {products,priceTotal} = useStore()
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const priceTotalrounded = Math.round(priceTotal * 100)

    fetch("https://ecomerce-back.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({products ,priceTotalrounded}),
    })
      .then((res) => res.json())
      .then((data) =>{
        if(data.isError) return setIsError(true)
        setClientSecret(data.clientSecret)
      });
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="w-screen m-auto">
      
      
        {(clientSecret) 
          ?(
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements> ) 
        :<MessageCardVoid/>
        }


      
    </div>
  );
}