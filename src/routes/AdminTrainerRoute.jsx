import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";
import PropTypes from "prop-types";
import useRole from "../hooks/useRole";

const AdminTrainerRoute = ({ children }) => {
  const {role, isLoading} = useRole()
  const location = useLocation();

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (role === "admin" || role === "trainer") {
    return children;
  }
  return <Navigate state={location.pathname} to={"/dashboard"}></Navigate>;
};

AdminTrainerRoute.propTypes = {
  children: PropTypes.object.isRequired,
};

export default AdminTrainerRoute;
