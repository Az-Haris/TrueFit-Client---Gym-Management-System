import { Button } from "flowbite-react";
import { Link, useNavigate, useParams } from "react-router";
import { assets } from "../assets/assets";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import ScrollToTop from "../components/ScrollToTop";
import Loading from "../components/Loading";

const TrainerDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { data: trainerData = {}, isLoading } = useQuery({
    queryKey: ["trainerData"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/trainers/${id}`);
      return result.data;
    },
  });

  console.log(trainerData);

  return (
    <div className="container mx-auto px-3 py-6">
      <ScrollToTop></ScrollToTop>

      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          {/* Trainer Info Section */}
          <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg p-6 mb-8">
            <img
              src={trainerData?.photoURL}
              alt={trainerData?.fullName || trainerData.displayName}
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
            <div className="lg:ml-8 mt-6 lg:mt-0 lg:text-left">
              <h2 className="text-3xl font-bold mb-2">
                {trainerData?.fullName || trainerData.displayName}
              </h2>
              <p className="text-gray-700 mb-4">{trainerData?.aboutInfo}</p>
              <p className="text-gray-700 mb-1">
                <strong>Age: </strong>
                {trainerData?.age} year
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Experience: </strong>
                {trainerData?.experience} year of experience
              </p>
              <h4 className="font-semibold">Expertise:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {trainerData?.skills?.map((item, index) => (
                  <li key={index}>{item.label}</li>
                ))}
              </ul>
              <p className="mt-4 text-gray-600">
                <strong>Slots Left: </strong>
                {trainerData?.slots}
              </p>
            </div>
          </div>

          {/* Available Slots Section */}
          <div className="bg-gray-50 shadow-lg border rounded-lg p-6 mb-32">
            <h3 className="text-2xl font-bold mb-4">
              Book For Available Slots
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {trainerData?.availableDays?.map((day, index) => (
                <Link
                  key={index}
                  className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 transition text-center"
                >
                  {day.label} ({trainerData?.availableTime})
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

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
