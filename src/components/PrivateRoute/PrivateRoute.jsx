import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, Loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (Loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
