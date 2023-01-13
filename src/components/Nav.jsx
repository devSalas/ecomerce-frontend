import Carrito from "./Carrito";
import AuthenticateUser from "./AuthenticateUser";
import Profile from "./Profile";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="border border-b-2 sticky top-0 z-50 bg-white w-screen">
      <div className="flex justify-between px-2 py-2 items-center max-w-7xl m-auto">
        <div>
          <Link to="/">
            <img className="h-12" src="./logo.png" alt="" />
          </Link>
        </div>
        <div className="flex gap-4">
          <AuthenticateUser />
          <Profile />
          <Carrito />
        </div>
      </div>
    </div>
  );
}
