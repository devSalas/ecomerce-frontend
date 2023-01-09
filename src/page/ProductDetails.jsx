
const ProductDetails = () => {
  return (
    <div className="h-screen bg-slate-200 w-full grid grid-cols-layout max-w-lg ">
      <nav className="w-full   text-white flex justify-between p-2 pt-4">
        <button> {"<-"} </button>
        <h1 className="text-black font-bold">Product details</h1>
        <div className="w-10 h-10 rounded-full border-2 border-slate-400">
          <a href="" className="block w-full h-full p-2">
          <img className="block w-full h-full" src="shopping-cart.svg" alt="" />
          </a></div>
      </nav>

      <div>

      <figure className="  w-full aspect-video relative left-0 right-0">
        <img className="w-full h-full" src="https://placeimg.com/200/200/tech" alt="" />
      </figure>

      </div>

      <div className="relative px-4">
        <div className="absolute right-2 top-2">🎉</div>
        <h3>AirPods Max</h3>
        <p><span>🎇4.8</span> <span>103 reviews</span></p>
        <p className="text-sm m-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, beatae laborum? Quisquam unde adipisci saepe ipsum voluptatibus numquam incidunt aliquid, repellendus vitae hic. Sint rem amet voluptas dolore voluptate eveniet.
        </p>
      </div>
     
      <div className="flex justify-between m-2">
        <div>$889</div>
        <div className="flex">
          <button className="w-6 h-6 text-white bg-slate-500 rounded-full grid place-content-center">+</button>
          <span className="px-2">1</span>
          <button className="w-6 h-6 text-white bg-slate-500 rounded-full grid place-content-center">-</button>
        </div>
      </div>
      <div>
        <div className="p-2 border-t-2 border-slate-300">
          <h2>Promo Code</h2>
          <div className="relative w-full px-4 bg-white border-2 border-slate-300  rounded-md">
            <input className="w-full h-10" type="text" name="" id="" />
            <button className="absolute text-sm right-1 top-3 ">Aplicar Codigo</button>
          </div>
        </div>
        <div className="py-4 m-2">
          <button className="w-full bg-blue-500 rounded-3xl py-2">
            <span className="px-2">Add Item to Bag</span>
            <span className="text-white">|</span>
            <span className="px-2">$505</span>
          </button>
        </div>

      </div>


    </div>
  )
}

export default ProductDetails