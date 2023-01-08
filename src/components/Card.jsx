import { useState } from "react";

export default function Card({ title, description, image, price }) {
  const [like, setLike] = useState(false);

  const handleChange = (e) => {
    setLike(!like);
    console.log(like);
  };

  const handleClick = (e) => {
    console.log("click");
  };

  return (
    <div className=" relative">
      <div className="border aspect-square p-2">
        <img className="w-full h-full object-contain" src={image} alt={title} />
        <input
          className="absolute top-2 cursor-pointer right-2 appearance-none bg-[url('/public/me-gusta.png')] w-5 h-5 bg-cover checked:bg-[url('/public/corazon.png')]"
          type="checkbox"
          onChange={handleChange}
          checked={like}
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
