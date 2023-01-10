import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
 
  const  {user,isLoading,isAuthenticated} =useAuth0()

 /*  const userRef = useRef("") */

  const handleClick = () => {
  
  }
  console.log(isLoading  )
  if(isLoading || !isAuthenticated){ return    <div className=' overflow-hidden grid place-content-center m-auto'>
  <img onClick={handleClick} src="user.svg" className="w-14 h-14  rounded-full m-auto p-1" alt="" />
  </div>
  }

  console.log(user.picture )
  return ( isAuthenticated &&
    <div className=' overflow-hidden grid place-content-center m-auto'>
      <img onClick={handleClick} src={user?.picture} className="w-14 h-14  rounded-full m-auto p-1" alt={user.name} />
    </div>
  )
}

export default Profile 