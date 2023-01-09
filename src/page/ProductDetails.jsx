import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getProducts,getProductById} from '../services/fechtProduct'

const ProductDetails =() => {

  const {id}= useParams()

  const { data,isLoading} = useQuery({ 
    queryKey: ["products","id"],
     queryFn:()=> getProductById(id)
    });

  if(isLoading)return (<div>cargando ...</div>)
    
  console.log(data)

  return (
    <div className="h-screen w-full grid  max-w-lg grid-rows-[10% ,50% ,40%] md:grid-rows-[200px,1fr]   md:px-4 md:grid-cols-8 md:max-w-6xl m-auto">
      <nav className="w-full   text-white flex justify-between p-2 pt-4 md:col-span-8">
        <button> {"<-"} </button>

        <h1 className="text-black font-bold text-2xl">Producto Detalles</h1>

        <div className="w-10 h-10 rounded-full border-2 border-slate-400">
          <a href="" className="block w-full h-full p-2">
          <img className="block w-full h-full" src="shopping-cart.svg" alt="" />
          </a></div>
      </nav>

      <div className=" md:col-span-3 h-auto">

      <figure className="h-full sm:m-auto  md:max-w-sm  sm:max-h-56  sm:aspect-square ">
        <img className="m-auto sm:w-full h-full max-h-80 md:h-auto " src={data?.image} alt="" />
      </figure>

      </div>

      <div className="relative px-4 md:col-span-5 md:grid md:place-content-start gap-8">
        <div className="absolute right-2 top-2">

        <img src="" alt="" />

        </div>
        <h3>{data?.title}</h3>
        <p><span>🎇{data?.rating?.rate}</span> <span>{data?.rating?.count} reviews</span></p>
        <p className="text-sm m-2">
          {data?.description}
        </p>
        <div className="py-4 m-2 max-w-xs">
          <button className="w-full bg-blue-500 rounded-3xl py-2">
            <span className="px-2">Add Item to Bag</span>
            <span className="text-white">|</span>
            <span className="px-2">{data?.price}</span>
          </button>
        </div>
      </div>


    </div>
  )
}

export default ProductDetails