import { Button } from "flowbite-react";
import { useState } from "react";
import { assets } from "../assets/assets";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl font-prata">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      <Button outline color="blue" size="sm">
        <img className="w-6" src={assets.Google} alt="" />
      </Button>

      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          name="name"
          className="w-full px-3 py-2 border border-gray-800 rounded-lg"
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        name="email"
        className="w-full px-3 py-2 border border-gray-800 rounded-lg"
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        className="w-full px-3 py-2 border border-gray-800 rounded-lg"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p>Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login here
          </p>
        )}
      </div>
      <Button type="submit" color="blue" className="px-5 mt-4">
        {currentState === "Login" ? "Login" : "Sign Up"}
      </Button>
    </form>
  );
};

export default Login;
