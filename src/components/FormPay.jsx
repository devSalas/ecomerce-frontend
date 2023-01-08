
import { useStripe,useElements, CardElement } from '@stripe/react-stripe-js'
import axios from 'axios'
const FormPay = () => {


  const stripe = useStripe()
  const elements = useElements()


  const handleSubmit =async (evt)=>{
    evt.preventDefault()

    const {error,paymentMethod} =await stripe.createPaymentMethod({
    type:'card',
    card:elements.getElement(CardElement)
    })
    

    if(!error){ 
      const {data}=await axios.post("http://localhost:3000/",{...paymentMethod,amount:40000});
      console.log(data)
      


    }

    

  }


  return (<>
    <div className="w-full h-full flex flex-col gap-3">

    <h2>Card Number</h2>
    <form  onSubmit={handleSubmit} className='border-slate-700'>
      <CardElement/>
      <button className=' h-12 bg-blue-400 w-full mt-20'>pay now</button>
    </form>
    </div>
  
  
  </>

  )
}

export default FormPay


/* function CheckoutForm(){



  const hanldeSubmit= async(evt)=>{
    evt.preventDefault();

    const {error,paymentMethod} = await stripe.createPaymentMethod({
      type:'card',
      card:elements.getElement(CardElement)
    })

    if(!error){
    console.log(paymentMethod)
    const {id} = paymentMethod

    axios.post("")
    }

  
  }

  return( <form className="card card-body" onSubmit={hanldeSubmit}>
 
    <img src="https://placeimg.com/300/300/nature" alt=""  />

    <div className="form-group">
          <CardElement  className="form-control"/>
    </div>

    <button>comprar</button>

  </form>)
}
 */