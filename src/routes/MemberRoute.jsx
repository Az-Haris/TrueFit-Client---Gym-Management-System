import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";
import PropTypes from "prop-types";
import useRole from "../hooks/useRole";

const MemberRoute = ({ children }) => {
  const {role, isLoading} = useRole()
  const location = useLocation();

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (role === "member") {
    return children;
  }
  return <Navigate state={location.pathname} to={"/dashboard"}></Navigate>;
};

MemberRoute.propTypes = {
  children: PropTypes.object.isRequired,
};

export default MemberRoute;
