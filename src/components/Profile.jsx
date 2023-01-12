import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();

  if (isLoading || !isAuthenticated) {
    return (
      <div className=" overflow-hidden ">
        <img
          src="../../public/perfil.webp"
          className="w-10 h-10 bg-neutral-300 rounded-full"
          alt=""
        />
      </div>
    );
  }

  return (
    isAuthenticated && (
      <div className=" overflow-hidden ">
        <img
          src={user?.picture}
          className="w-10 h-10 bg-neutral-300 rounded-full"
          alt={user.name}
        />
      </div>
    )
  );
};

export default Profile;
