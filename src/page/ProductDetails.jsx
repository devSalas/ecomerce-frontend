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
    <main className="w-full max-w-7xl m-auto md:grid grid-cols-2">
      <section className="flex h-14 md:hidden items-center gap-2 px-4">
        <button className="p-2 sm:p-0 rounded-sm">
          <Link to="/">
            <img className="w-10 p-2 " src="/back.png" alt="" />
          </Link>
        </button>
        <h1 className="text-neutral-800 font-semibold text-2xl">
          Producto Detalles
        </h1>
      </section>

      <section className="row-start-1 p-4 md:p-8">
        <figure className=" p-8 border h-96">
          <img
            className="m-auto sm:w-full h-full max-h-80 md:h-auto object-contain"
            src={data?.image}
            alt=""
          />
        </figure>
      </section>

      <section className="relative px-4 col-start-2">
        <div className="hidden md:flex py-8 items-center gap-2">
          <button className="p-2 sm:p-0 rounded-sm">
            <Link to="/">
              <img className="w-10 p-2 " src="/back.png" alt="" />
            </Link>
          </button>
          <h1 className="text-neutral-800 font-semibold text-2xl">
            Producto Detalles
          </h1>
        </div>

        <h3 className="font-semibold text-xl text-sky-600">{data?.title}</h3>
        <p className="py-4">
          <span>🎇 {data?.rating?.rate}</span>
          <span> {data?.rating?.count} reviews</span>
        </p>
        <p className="text-sm m-2">{data?.description}</p>
        <div className="py-4 m-auto max-w-xs">
          <button
            onClick={handleClick}
            className="w-full bg-sky-500 text-white rounded-3xl py-2 hover:bg-sky-600 transition-all hover:shadow-lg"
          >
            <span className="">Add Item to Bag</span>
            <span className="px-2">|</span>
            <span className="">${data?.price}</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
