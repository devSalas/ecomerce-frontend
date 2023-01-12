import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { getProductById } from "../services/fechtProduct";
import { useStore } from "../zustand/store";

const ProductDetails = () => {
  const { id } = useParams();
  const store = useStore();

  const { data, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductById(id),
  });

  if (isLoading) return <Spinner />;

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
    <main className="w-full max-w-7xl m-auto md:grid grid-cols-2 ">
      <section className="flex h-14  items-center gap-2 col-start-2">
        <button className="p-2 sm:p-0 rounded-sm">
          <Link to="/">
            <img className="w-10 p-2 " src="../../public/back.png" alt="" />
          </Link>
        </button>
        <h1 className="text-black font-bold text-2xl">Producto Detalles</h1>
      </section>

      <section className="row-start-1 row-span-2 h-auto">
        <figure className="h-full sm:aspect-square p-8">
          <img
            className="m-auto sm:w-full h-full max-h-80 md:h-auto object-contain"
            src={data?.image}
            alt=""
          />
        </figure>
      </section>

      <section className="relative px-4 ">
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
      </section>
    </main>
  );
};

export default ProductDetails;
