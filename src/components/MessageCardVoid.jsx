import { Link } from "react-router-dom"

const MessageCardVoid = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <Link to="/" className="flex justify-center items-center text-cyan-900 font-bold">
        <img className="w-10 p-2 " src="back.png" alt="" />
        <span>ir a la home</span>
      </Link>
      <h2 className='max-w-sm m-auto my-4 border-2 p-2 mx-2 text-blue-400 font-medium '>
        Estima cliente, Todavia no cuenta con producto seleccionado, por favor, dirijase a la pagina principal
      </h2> 

    <div className="aspect-square max-w-sm mx-2">
      <img className='w-full m-auto ' src="https://media2.giphy.com/media/giXLnhxp60zEEIkq8K/giphy.gif?cid=ecf05e478ph3srbp9t3c1xj8deo9uo1gaazjsexd4i7vhr86&rid=giphy.gif&ct=g" alt="" />
    </div>

    </div>
  )
}

export default MessageCardVoid