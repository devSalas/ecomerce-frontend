import { useStore } from "../zustand/store";
import CarritoCard from "./CarritoCard";
import { Link } from "react-router-dom";

export default function CarritoModal({ click }) {
  const store = useStore();

  let total = store.products.reduce((prev, curr) => prev + curr.price, 0);

  const hanldeClick = (e) => {
    store.setPriceTotal(total);
  };

  return (
    <div className="border z-10 fixed top-0 right-0 md:right-0 bottom-0 md:w-96 w-full bg-white shadow-2xl p-4">
      <button
        className="bg-[url('/public/back.png')] bg-cover w-6 h-6"
        onClick={click}
      ></button>
      <h2 className="p-4 text-lg font-medium">Products:</h2>
      <ul className="flex flex-col gap-8 p-4 h-3/5 overflow-y-scroll overflow-hidden">
        {store?.products?.map(({ id, title, image, price }) => (
          <CarritoCard
            key={id}
            id={id}
            title={title}
            image={image}
            price={price}
          />
        ))}
      </ul>
      <p className="p-4">
        Total a pagar: <span className="font-semibold">${total}</span>
      </p>
      <Link to="/paymenMethod">
        <button
          onClick={hanldeClick}
          className="bg-sky-400 text-white py-2 px-4 rounded-full"
        >
          Pagar
        </button>
      </Link>
    </div>
  );
}
