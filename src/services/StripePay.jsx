import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";
import FormPay from "../components/FormPay";
/* import FormPay from "./components/FormPay" */

const stripePromise = loadStripe(
  "pk_test_51MNjItANEHdq6jhMvuGZgom8AY43AkKlYRRbEgOv94vpes2BZtGkq4wyeh5nZ7shYqRERTcQ2KclbBwxHs2ba4sR00IdtXhx9b"
);

const StripePay = () => {
  return (
    <div className="  ">
      <Elements stripe={stripePromise}>
        <Link to="/">
          <img
            className="w-10 border-2 border-black p-2 rounded-sm m-2 "
            src="back.png"
            alt=""
          />
        </Link>
        <FormPay />
      </Elements>
    </div>
  );
};

export default StripePay;
