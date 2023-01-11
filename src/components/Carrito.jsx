import { useState } from "react";
import CarritoModal from "./CarritoModal";
import useStore from "../zustand/store";

export default function Carrito() {
  const [active, setActive] = useState(false);

  const store = useStore();

  const handleClick = (e) => {
    setActive(!active);
  };
  return (
    <>
      <button
        className="bg-[url('/public/shopping.svg')] bg-cover w-10 h-10"
        onClick={handleClick}
      >
        {store.products.length === 0 ? null : (
          <span className="bg-red-500 w-6 h-6 absolute rounded-full text-white">
            {store.products.length}
          </span>
        )}
      </button>
      {active ? <CarritoModal click={handleClick} /> : null}
    </>
  );
}
