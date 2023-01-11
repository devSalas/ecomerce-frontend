/* import { useState } from "react"; */
import { Link } from "react-router-dom";
import {useStore, useStoreLike} from "../zustand/store";

export default function Card({ id, title, description, image, price }) {
  /* const [like, setLike] = useState(false); */


  const {likeProduct}=useStoreLike()
  const {setLikeProduct}=useStoreLike()

  const store = useStore();

  const handleChange = (e) => {

     const isLike = likeProduct.includes(id)
     console.log(isLike)
     if(isLike) {
      let delId = likeProduct.filter($id=> $id !=id)
      setLikeProduct(delId)
    }else{
      setLikeProduct([...likeProduct,id])
    }

  };

  const handleClick = (e) => {
    store.addProduct({
      id,
      title,
      image,
      price,
    });


  };

  console.log(likeProduct)

  return (
    <div className=" relative">
      <div className="border aspect-square p-2">
        <Link to={`/productDetails/${id}`}>
          <img
            className="w-full h-full object-contain"
            src={image}
            alt={title}
          />
        </Link>

        <input
          className="absolute top-2 cursor-pointer right-2 appearance-none bg-[url('/public/me-gusta.png')] w-5 h-5 bg-cover checked:bg-[url('/public/corazon.png')]"
          type="checkbox"
          onChange={handleChange}
          checked={likeProduct.includes(id)}
          name=""
          id=""
        />
      </div>
      <div className="p-2">
        <h4 className="font-medium">{title}</h4>
        <p className="text-neutral-500 mb-4">{description.slice(0, 10)}</p>
        <p className="font-medium">${price}</p>
      </div>
      <button
        onClick={handleClick}
        className="absolute bottom-2 right-2 w-10 h-10 hover:bg-sky-500 text-white bg-sky-400 rounded-full"
      >
        +
      </button>
    </div>
  );
}
