import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useStore, useStoreModal } from "../zustand/store";
import { useAuth0 } from "@auth0/auth0-react";
import ModalMessageBuy from "./ModalMessageBuy";

const FormPay = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { priceTotal, products } = useStore();
  const { removeProduct, setPriceTotal } = useStore();
  const { user, isAuthenticated } = useAuth0();
  const { isActiveModal, setActiveModal } = useStoreModal();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!isAuthenticated) return;

    if (products.length <= 0) {
      alert("no ha añadido ningun producto al carrito");
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(
        CardNumberElement,
        CardExpiryElement,
        CardCvcElement
      ),
    });

    if (!error) {
      const RoundedPriceTotal = Math.round(priceTotal * 100);
      //console.log(RoundedPriceTotal);
      const { data } = await axios.post("http://localhost:3000/", {
        ...paymentMethod,
        amount: RoundedPriceTotal,
        products,
      });
      //console.log(data.status);
      if (data.status) {
        console.log("se compro satisfactoriamente");
        setActiveModal(true);
        setPriceTotal(0);
        removeProduct();
      } else {
        console.log("hubo un erro con la creacion del pago");
      }
    }
  };

  return (
    <>
      <div className=" max-w-xs  flex flex-col justify-between   bg-white border-2 m-auto p-2 border-slate-400 rounded-2xl sm:mt-20   ">
        <h2 className="text-center mb-4 font-bold text-2xl p-2 text-purple-500 border-b-2 border-black">
          Metodo de Pago
        </h2>

        {!isAuthenticated && (
          <div className="text-center bg-red-400 p-2 rounded-md text-sm mb-4">
            necesitas registarte para poder seguir
          </div>
        )}

        <form onSubmit={handleSubmit} className="border-slate-700 grow ">
          <div>
            <div>Numero de Tarjeta</div>
            <CardNumberElement className="border-2 p-3 rounded-md my-2 bg-teal-200" />
          </div>

          <div className="flex justify-between">
            <div>
              <label htmlFor="expiracion" className="my-2">
                Expiración
              </label>
              <CardExpiryElement
                id="expiracion"
                className="border-2 p-3 rounded-md  w-20 my-2 bg-teal-200"
              />
            </div>
            <div>
              <label htmlFor="expiracion" className="my-2">
                CVC
              </label>

              <CardCvcElement className="border-2 p-3 rounded-md  w-20 my-2 bg-teal-200" />
            </div>
          </div>

          <button
            className={`${
              !isAuthenticated ? "opacity-50" : ""
            } h-12 bg-blue-400 w-full  rounded-md my-4 text-white font-bold text-xl`}
          >
            Pagar ahora
          </button>
        </form>
      </div>

      {isActiveModal && <ModalMessageBuy />}
    </>
  );
};

export default FormPay;
