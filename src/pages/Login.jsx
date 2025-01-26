import { Button, Spinner } from "flowbite-react";
import { useRef, useState } from "react";
import SocialLogin from "../components/SocialLogin";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../components/ScrollToTop";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const { loginUser, setUser, setEmail } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const pass = e.target.password.value;

    // Login user
    loginUser(email, pass)
      .then(async (result) => {
        const user = result.user;

        // Save Last login time
        await axiosPublic.patch(`/users/${user.email}`).then((response) => {
          setUser(response.data.user);
          setLoading(false);
          Swal.fire("Success!", "Successfully Logged In!", "success");
          navigate(location?.state ? location.state : "/");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire("Error!", `${errorCode} ${errorMessage}`, "error");
        setLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <ScrollToTop></ScrollToTop>
      <Helmet>
        <title>TrueFit - Login to your account.</title>
      </Helmet>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl font-prata">Login</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      <SocialLogin></SocialLogin>

      <input
        type="email"
        name="email"
        ref={emailRef}
        autoComplete="username"
        className="w-full px-3 py-2 border border-gray-800 rounded-lg"
        placeholder="Email"
        required
      />
      <div className="w-full relative">
        <span
          onClick={() => {
            setShowPass(!showPass);
          }}
          className="absolute right-4 top-[25%] text-xl"
        >
          {showPass ? <IoMdEyeOff /> : <IoMdEye />}
        </span>
        <input
          type={showPass ? "text" : "password"}
          name="password"
          autoComplete="current-password"
          className="w-full px-3 py-2 border border-gray-800 rounded-lg"
          placeholder="Password"
          required
        />
      </div>

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <Link
          onClick={() => setEmail(emailRef.current.value)}
          to={"/forgot-pass"}
        >
          Forgot your password?
        </Link>
        <Link to={"/signup"}>Create account</Link>
      </div>
      <Button type="submit" color="blue" className="px-5 mt-4">
        {loading ? (
          <Spinner color="success" aria-label="Success spinner example" />
        ) : (
          <span>Login</span>
        )}
      </Button>
    </form>
  );
};

export default Login;
