import React from "react";
import { useStore } from "../zustand/store";

export default function CarritoCard({ id, title, image, price }) {
  const store = useStore();

  const handleClick = () => {
    store.removeProduct(id);
  };

  return (
    <li className="flex gap-2">
      <img className="w-10 h-10" src={image} alt="" />
      <p className="w-60">{title}</p>
      <p className="font-semibold w-16">${price}</p>
      <button
        className="w-6 h-6 bg-red-400 text-white rounded-full"
        onClick={handleClick}
      >
        -
      </button>
    </li>
  );
}
