import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getProducts, getProductById } from "../services/fechtProduct";
import {useStore} from "../zustand/store";

const ProductDetails = () => {
  const { id } = useParams();
  const store = useStore();

  const { data, isLoading } = useQuery({
    queryKey: ["products", "id"],
    queryFn: () => getProductById(id),
  });

  if (isLoading) return <div>cargando ...</div>;

  console.log(data);

  const handleClick = () => {
    const { id, title, image, price } = data;
    store.addProduct({
      id,
      title,
      image,
      price,
    });
  };

  return (
    <div className="h-screen w-full grid  max-w-lg grid-rows-[10% ,50% ,40%] md:grid-rows-[100px,1fr]   md:px-4 md:grid-cols-8 md:max-w-6xl m-auto">
      <nav className="w-full   text-white flex justify-between items-center p-2 pt-4 md:col-span-8">
        <button className="  p-2 sm:p-0 rounded-sm"> 
        <Link to="/">
          <img className="w-10 border-2 border-black p-2 rounded-sm" src="../../public/back.png"  alt="" /> 
        </Link> 
        </button>

        <h1 className="text-black font-bold text-2xl">Producto Detalles</h1>

        <div className="w-10 h-10 rounded-full border-2 border-slate-400">
          <a href="" className="block w-full h-full p-2">
            <img
              className="block w-full h-full"
              src="shopping-cart.svg"
              alt=""
            />
          </a>
        </div>
      </nav>

      <div className=" md:col-span-3 h-auto">
        <figure className="h-full sm:m-auto  md:max-w-sm  sm:max-h-56  sm:aspect-square ">
          <img
            className="m-auto sm:w-full h-full max-h-80 md:h-auto "
            src={data?.image}
            alt=""
          />
        </figure>
      </div>

      <div className="relative px-4 md:col-span-5 md:grid md:place-content-start gap-8">
        <div className="absolute right-2 top-2">
          <img src="" alt="" />
        </div>
        <h3 className="font-semibold text-xl">{data?.title}</h3>
        <p>
          <span>🎇 {data?.rating?.rate}</span>{" "}
          <span>{data?.rating?.count} reviews</span>
        </p>
        <p className="text-sm m-2">{data?.description}</p>
        <div className="py-4 m-2 max-w-xs">
          <button
            onClick={handleClick}
            className="w-full bg-sky-500 text-white rounded-3xl py-2"
          >
            <span className="px-2">Add Item to Bag</span>
            <span className="text-white">|</span>
            <span className="px-2">{data?.price}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
