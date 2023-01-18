/* import { createPortal } from "react-dom"; */
import { Link } from "react-router-dom";
import { useStoreModal } from "../zustand/store";
import Confetti from "./Confetti.js";
import { useEffect } from "react";

const ModalMessageBuy = () => {
  const { setActiveModal } = useStoreModal();

  useEffect(() => {
     
  Confetti()
  }, [])
 
  

  const handleClick = () => {
    setActiveModal(false);
  };

  return (
    <div className="fixed grid place-content-center   w-screen h-screen backdrop-brightness-50 bg-slate-500  ">
      <div className="bg-cyan-400 grid place-content-center p-4 shadow-lg shadow-cyan-500/50 rounded-md mx-4 animate-modal">
        <div
          className="  max-w-md max-h-96 py-10 text-center  rounded-md  font-extrabold text-2xl  sm:text-3xl 
          "
        >
          <div className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Compra realizada satisfactoriamente.
          </div>
          <span className="">✨🎉</span>
        </div>
        <div className="text-center">
          <button
            onClick={handleClick}
            type="button"
            className="m-auto py-2  px-4 text-white rounded-md  bg-indigo-500  "
          >
            <Link to="/">Aceptar</Link>
          </button>
        </div>
      </div>
    </div>
  );
/*   return createPortal(
    <div className="fixed grid place-content-center   w-screen h-screen backdrop-brightness-50 bg-slate-500  ">
      <div className="bg-cyan-400 grid place-content-center p-4 shadow-lg shadow-cyan-500/50 rounded-md mx-4 animate-modal">
        <div
          className="  max-w-md max-h-96 py-10 text-center  rounded-md  font-extrabold text-2xl  sm:text-3xl 
          "
        >
          <div className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Compra realizada satisfactoriamente.
          </div>
          <span className="">✨🎉</span>
        </div>
        <div className="text-center">
          <button
            onClick={handleClick}
            type="button"
            className="m-auto py-2  px-4 text-white rounded-md  bg-indigo-500  "
          >
            <Link to="/">Aceptar</Link>
          </button>
        </div>
      </div>
    </div>,

    document.getElementById("modalMessageBuy")
  ); */
};

export default ModalMessageBuy;
