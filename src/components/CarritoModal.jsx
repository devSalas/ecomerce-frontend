import React from "react";
import { Link } from "react-router-dom";
import {useStore} from "../zustand/store";

export default function CarritoModal({ click }) {
  const store = useStore();
  
  let total = store.products.reduce((prev, curr) => prev + curr.price, 0);

  const hanldeClick=(evt)=>{
    store.setPriceTotal(total);
  }

  const handleRemoveProduct=(evt,id,price)=>{
    evt.preventDefault();
    store.setPriceTotal(total);
    let delProduct= store.products.filter(product=>product.id !== id)
    console.log(delProduct)
    store.removeOneProduct(delProduct)
  }


  return (
    <div className="border z-10 fixed top-0 right-0 md:right-0 bottom-0 md:w-96 w-full bg-white shadow-2xl p-4">
      <button
        className="bg-[url('/public/back.png')] bg-cover w-6 h-6"
        onClick={click}
      ></button>
      <h2 className="p-4 text-lg font-medium">Products:</h2>
      <ul className="flex flex-col gap-8 p-4 h-3/5 overflow-y-scroll overflow-hidden">
        {store?.products?.map(({ id, title, image, price }) => (
          <li className="flex gap-2 justify-between" key={id}>
            <img className="w-10 h-10" src={image} alt="" />
            <p className="w-60">{title}</p>
            <div className="font-semibold w-16">${price} <p className="aspect-square w-6 h-6 m-auto grid place-content-center   rounded-full"><img onClick={(evt)=> handleRemoveProduct(evt,id,price)} className="w-full h-full" src="../public/x-circle.svg" alt="" /></p> </div>
          </li>
        ))}
      </ul>
      <p className="p-4">
        Total a pagar: <span className="font-semibold">${total}</span>
      </p>
      <Link to="/paymenMethod" >
        <button onClick={hanldeClick} className="bg-sky-400 text-white py-2 px-4 rounded-full">
          Pagar
        </button>
      </Link>
    </div>
  );
}
