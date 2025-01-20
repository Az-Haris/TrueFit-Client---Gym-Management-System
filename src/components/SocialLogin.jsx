import Swal from "sweetalert2";
import { Button } from "flowbite-react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
  const { loginWithGoogle, setUser, setLoading } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    // Login with google
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
        Swal.fire("Success!", "Successfully Logged In!", "success");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
        Swal.fire("Error!", `${errorCode} ${errorMessage}`, "error");
      });
  };
  return (
    <Button onClick={() => handleLogin()} outline color="blue" size="sm">
      <img className="w-6" src={assets.Google} alt="" />
    </Button>
  );
};

export default SocialLogin;
