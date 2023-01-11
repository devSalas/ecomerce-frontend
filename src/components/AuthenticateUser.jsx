import { useAuth0 } from "@auth0/auth0-react";

const LogIn = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="text-end hidden sm:block">
      <button
        onClick={() => {
          loginWithRedirect();
        }}
        className="bg-blue-400 h-12 px-4 rounded text-white font-bold"
      >
        Iniciar Sesion
      </button>
    </div>
  );
};

const Logout = () => {
  const { logout } = useAuth0();
  return (
    <div className="text-end hidden sm:block">
      <button
        className=" bg-red-500 h-12 px-4 rounded text-white font-bold"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Salir
      </button>
    </div>
  );
};

const AuthenticateUser = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log({ user, isAuthenticated, isLoading });
  return !isAuthenticated ? <LogIn /> : <Logout />;
};
export default AuthenticateUser;
