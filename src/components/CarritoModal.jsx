import { useStore } from "../zustand/store";
import CarritoCard from "./CarritoCard";
import { Link } from "react-router-dom";

export default function CarritoModal({ click, active }) {
  const store = useStore();

  let total = store.products.reduce((prev, curr) => prev + curr.price, 0);

  const hanldeClick = (e) => {
    store.setPriceTotal(total);
    click();
  };

  return (
    <div
      style={active ? { transform: "translateX(100%)" } : {}}
      className="border z-10 fixed top-0 right-0 md:right-0 bottom-0 md:w-96 w-full bg-white shadow-2xl p-4 transition-all"
    >
      <button
        className="bg-[url('/public/back.png')] bg-cover w-6 h-6"
        onClick={click}
      ></button>
      <h2 className="p-4 text-lg font-medium">Products:</h2>
      <ul className="flex flex-col gap-2 p-4 h-3/5 overflow-y-scroll overflow-hidden">
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
      <div className="w-full flex justify-center">
        <Link to="/paymenMethod">
          <button
            onClick={hanldeClick}
            className="bg-sky-400 text-white py-2 px-6 rounded-full hover:shadow-lg transition-all hover:bg-sky-500"
          >
            Pagar
          </button>
        </Link>
      </div>
    </div>
  );
}
