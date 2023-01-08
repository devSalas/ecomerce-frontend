
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import FormPay from "./components/FormPay"

const stripePromise=loadStripe("pk_test_51MNjItANEHdq6jhMvuGZgom8AY43AkKlYRRbEgOv94vpes2BZtGkq4wyeh5nZ7shYqRERTcQ2KclbBwxHs2ba4sR00IdtXhx9b")

const StripePay = () => {
  return (
    <div className="max-w-md h-96 bg-white border-2 border-slate-400 rounded-sm m-auto p-4 mt-20">
    <Elements stripe={stripePromise}>
      <FormPay/>
    </Elements>
    <Route path="/about">About Us</Route>
  </div>
  )
}

export default StripePay