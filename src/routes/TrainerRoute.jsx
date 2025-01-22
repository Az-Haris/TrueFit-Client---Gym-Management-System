import PropTypes from "prop-types";
import useRole from "../hooks/useRole";
import Loading from "../components/Loading";
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";


const TrainerRoute = ({children}) => {
    const {role, isLoading} = useRole();
    const location = useLocation();
    const {loading} = useAuth()

  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  if (role === "trainer") {
    return children;
  }
  return <Navigate state={location.pathname} to={"/dashboard"}></Navigate>;
};

TrainerRoute.propTypes = {
  children: PropTypes.object.isRequired,
};
export default TrainerRoute;