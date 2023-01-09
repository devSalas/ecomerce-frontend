import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getProducts,getProductById} from '../services/fechtProduct'

const ProductDetails =() => {

  const {id}= useParams()

  const { data,isLoading} = useQuery({ 
    queryKey: ["products","id"],
     queryFn:()=> getProductById(id)
    });
    
    /* 
    
    category
: 
"men's clothing"
description
: 
"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket."
id
: 
2
image
: 
"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
price
: 
22.3
rating
: 
{rate: 4.1, count: 259}
title
: 
"Mens Casual Premium Slim Fit T-Shirts "
    */

  if(isLoading)return (<div>cargando ...</div>)
    
  console.log(data)

  return (
    <div className="h-screen w-full grid  max-w-lg   md:px-4 md:grid-cols-8 md:max-w-6xl m-auto">
      <nav className="w-full   text-white flex justify-between p-2 pt-4 md:col-span-8">
        <button> {"<-"} </button>

        <h1 className="text-black font-bold text-2xl">Producto Detalles</h1>

        <div className="w-10 h-10 rounded-full border-2 border-slate-400">
          <a href="" className="block w-full h-full p-2">
          <img className="block w-full h-full" src="shopping-cart.svg" alt="" />
          </a></div>
      </nav>

      <div className="md:col-span-3 h-auto">

      <figure className="  w-full  relative left-0 right-0  md:max-w-sm ">
        <img className="w-full h-full md:h-auto " src={data?.image} alt="" />
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
     

      <div className="md:col-span-8  flex flex-col justify-center items-center">


      </div>


    </div>
  )
}

export default ProductDetails