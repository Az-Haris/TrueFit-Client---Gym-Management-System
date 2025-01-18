import { Button } from "flowbite-react";
import { Link } from "react-router";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-90px)] md:h-[calc(100vh-100px)] bg-gradient-to-br from-blue-500 to-purple-600 text-white py-5 px-2">
      {/* Welcome Message */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
        Welcome to TrueFit!
      </h1>
      <p className="text-sm sm:text-lg md:text-xl text-center max-w-2xl mb-6">
        Your journey to learning, growth, and excellence starts here. Explore
        our features and join the community to get the most out of your
        experience.
      </p>

      {/* Call-to-Action Button */}
      <Link to={'admin-home'}>
        <Button outline gradientDuoTone="purpleToBlue">
          Get Started
        </Button>
      </Link>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Welcome;
