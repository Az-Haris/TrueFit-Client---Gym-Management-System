import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router";
import { assets } from "../assets/assets";

const TrainerDetails = () => {
  const navigate = useNavigate();

  const trainerData = {
    name: "Alexandra Reid",
    photo: "https://example.com/alexandra-reid.jpg",
    details:
      "Certified personal trainer with 8 years of experience specializing in strength training and holistic fitness.",
    expertise: ["Strength Training", "Yoga", "Nutrition Guidance"],
    additionalInfo:
      "Speaks English and Spanish. Passionate about helping others transform their lives through fitness.",
    slots: [
      "Monday 9:00 AM - 10:00 AM",
      "Wednesday 2:00 PM - 3:00 PM",
      "Friday 6:00 PM - 7:00 PM",
    ],
  };

  return (
    <div className="container mx-auto px-3 py-6">
      {/* Trainer Info Section */}
      <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg p-6 mb-8">
        <img
            src={trainerData.photo}
            alt={trainerData.name}
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
        <div className="lg:ml-8 mt-6 lg:mt-0 lg:text-left">
          <h2 className="text-3xl font-bold mb-2">{trainerData.name}</h2>
          <p className="text-gray-700 mb-4">{trainerData.details}</p>
          <h4 className="font-semibold">Expertise:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {trainerData.expertise.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-gray-600">{trainerData.additionalInfo}</p>
        </div>
      </div>

      {/* Available Slots Section */}
      <div className="bg-gray-50 shadow-lg border rounded-lg p-6 mb-32">
        <h3 className="text-2xl font-bold mb-4">Book For Available Slots</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trainerData.slots.map((slot, index) => (
            <Link
              key={index}
              className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 transition text-center"
              onClick={() => navigate("/booking", { state: { slot } })}
            >
              {slot}
            </Link>
          ))}
        </div>
      </div>

      {/* Be A Trainer Section */}
      <div
        style={{ backgroundImage: `url(${assets.Trainer})` }}
        className="relative bg-cover bg-center h-full text-white text-center py-10 md:py-40 rounded-lg shadow-lg"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 rounded-lg"></div>

        <div className="relative flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 font-prata">
            Passionate About Fitness?
          </h3>
          <p className="mb-6">
            Join our team and inspire others to achieve their goals.
          </p>
          <Button
            size="xl"
            gradientDuoTone="purpleToBlue"
            onClick={() => navigate("/become-trainer")}
          >
            Become a Trainer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetails;
