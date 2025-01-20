import { Button, Spinner } from "flowbite-react";
import { useForm } from "react-hook-form";
import SocialLogin from "../components/SocialLogin";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router";
import { imageUpload } from "../utils/imageUpload";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const { registerNewUser, updateUser, setUser, loading, setLoading } =
    useAuth();
  const navigate = useNavigate();
  const location = useLocation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const photoURL = await imageUpload(data.photo[0]);
      if (photoURL.error) {
        throw new Error(photoURL.error);
      }

      // Register User
      registerNewUser(data.email, data.password)
        .then((result) => {
          const user = result.user;

          // Update user info with name and photo
          updateUser({ displayName: data.name, photoURL })
            .then(() => {
              const updatedUser = {
                ...user,
                displayName: data.name,
              };
              setUser(updatedUser);
              setLoading(false);
              Swal.fire(
                "Success!",
                "Successfully Registered!",
                "success",
              );
              navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
              setLoading(false);
              const errorCode = error.code;
              const errorMessage = error.message;
              Swal.fire("Error!", `${errorCode} ${errorMessage}`, "error");
            });
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          Swal.fire("Error!", `${errorCode} ${errorMessage}`, "error");
        });
    } catch (error) {
      Swal.fire("Error!", `Image upload failed: ${error.message}`, "error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl font-prata">Sign Up</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      <SocialLogin></SocialLogin>

      <input
        type="text"
        name="name"
        {...register("name")}
        className="w-full px-3 py-2 border border-gray-800 rounded-lg"
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        {...register("email")}
        autoComplete="username"
        className="w-full px-3 py-2 border border-gray-800 rounded-lg"
        placeholder="Email"
        required
      />
      <div className="w-full">
        <div className="relative">
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
            {...register("password", {
              minLength: 6,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
            })}
            autoComplete="current-password"
            className="w-full px-3 py-2 border border-gray-800 rounded-lg"
            placeholder="Password"
            required
          />
        </div>
        {errors.password && (
          <span className="text-red-500">
            1 small, 1 capital, 1 number & nin 6 character
          </span>
        )}
      </div>

      <input
        type="file"
        id="fileUpload"
        name="photo"
        {...register("photo")}
        className="w-full border border-gray-800 rounded-lg"
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p></p>
        <Link to={"/login"} className="cursor-pointer">
          Login here
        </Link>
      </div>
      <Button type="submit" color="blue" className="px-5 mt-4">
        {loading ? (
          <Spinner color="info" aria-label="Info spinner example" />
        ) : (
          <span>Sign Up</span>
        )}
      </Button>
    </form>
  );
};

export default SignUp;
