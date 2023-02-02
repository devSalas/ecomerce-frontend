import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "./stripe.css";
import { useStore } from "../zustand/store";
import MessageCardVoid from "../components/MessageCardVoid";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";


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

    fetch("https://ecomerce-stripe-backend.onrender.com/create-payment-intent", {
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

  if(isError)return ( <MessageCardVoid/>)
  return (
    <div className=" w-screen m-auto grid  place-content-center">
        {(clientSecret) 
          ?(
          <Elements options={options} stripe={stripePromise} c>
            <Link to="/" className="flex justify-center items-center text-cyan-900 font-bold">
              <img className="w-10 p-2 " src="back.png" alt="" />
              <span>ir a la home</span>
            </Link>
            <div className="flex flex-col sm:flex-row p-4 sm:gap-4 lg:gap-16">
            <div className="bg-slate-200 px-4 py-6 rounded-lg w-full   sm:mt-4   self-start ">
              <h2 className="font-bold text-lg">Nota</h2>
              <p className="text-md font-medium">Esto es una aplicación de prueba <br />
              Por ello, usar los siguientes datos:</p> <br />
              <li> correo: aleatorio </li>
              <li>cuenta : 4242 4242 4242 4242</li>
              <li>Expriación : fecha actual o mayor</li>
              <li>CVC : 3 numeros aleatorios</li>
              <li>Pais:  aleatorio</li>

            </div>
            <CheckoutForm />

            </div>
          </Elements> ) 
        :<Spinner/>
        }
        
    </div>
  );
}