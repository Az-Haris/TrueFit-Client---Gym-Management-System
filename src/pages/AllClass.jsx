import { useEffect, useState } from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { assets } from "../assets/assets";

const AllClass = () => {
  const classesData = [
    {
      id: 1,
      name: "Yoga for Beginners",
      description:
        "Learn the basics of yoga and improve your flexibility and balance.",
      trainers: [
        {
          id: "t1",
          name: "John Doe",
          profileImage: "https://via.placeholder.com/150",
        },
        {
          id: "t2",
          name: "Jane Smith",
          profileImage: "https://via.placeholder.com/150",
        },
        {
          id: "t3",
          name: "Emily Johnson",
          profileImage: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      id: 2,
      name: "Advanced Pilates",
      description: "Challenge yourself with advanced Pilates techniques.",
      trainers: [
        {
          id: "t4",
          name: "Michael Brown",
          profileImage: "https://via.placeholder.com/150",
        },
        {
          id: "t5",
          name: "Sarah Wilson",
          profileImage: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      id: 3,
      name: "Strength Training",
      description: "Build strength and endurance with guided workouts.",
      trainers: [
        {
          id: "t6",
          name: "Chris Green",
          profileImage: "https://via.placeholder.com/150",
        },
        {
          id: "t7",
          name: "Anna White",
          profileImage: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      id: 4,
      name: "Zumba Dance Fitness",
      description: "A fun and energetic dance-based fitness class.",
      trainers: [
        {
          id: "t8",
          name: "Jessica Blue",
          profileImage: "https://via.placeholder.com/150",
        },
        {
          id: "t9",
          name: "David Black",
          profileImage: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      id: 5,
      name: "Meditation & Mindfulness",
      description: "Discover inner peace with guided meditation techniques.",
      trainers: [
        {
          id: "t10",
          name: "Sophia Gray",
          profileImage: "https://via.placeholder.com/150",
        },
        {
          id: "t11",
          name: "Liam Gold",
          profileImage: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      id: 6,
      name: "Cardio Blast",
      description: "High-energy cardio workouts to burn calories fast.",
      trainers: [
        {
          id: "t12",
          name: "Ella Violet",
          profileImage: "https://via.placeholder.com/150",
        },
        {
          id: "t13",
          name: "Lucas Red",
          profileImage: "https://via.placeholder.com/150",
        },
      ],
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {}, [currentPage]);

  return (
    <div className="container mx-auto mt-5">
      <Title
        title={"Explore All Classes"}
        description={
          "Discover diverse classes and expert trainers to elevate your skills!"
        }
      ></Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-3">
        {classesData.map((clas, idx) => (
          <div
            key={idx}
            className="border hover:shadow-2xl bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
          >
            <div>
              <img
                src={clas.image}
                alt=""
                className="w-full h-52 sm:h-60 lg:h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{clas.name}</h3>
              <p className="text-gray-700 mb-4">{clas.description}</p>
            </div>
            <div className="flex justify-between items-center">
              {/* 5 Trainer image */}
              <div className="flex -space-x-4">
                {clas.trainers.slice(0, 5).map((trainer) => (
                  <Link
                    to={`/trainer/${trainer.id}`}
                    key={trainer.id}
                    className="relative block w-10 h-10 rounded-full border border-blue-400 hover:ring-2 hover:ring-blue-500 overflow-hidden hover:z-10 transition duration-200"
                  >
                    <img
                      src={assets.Feature2}
                      alt={trainer.name}
                      className="object-cover w-full h-full bg-white"
                    />
                  </Link>
                ))}
              </div>

              <Link to={clas.bookingLink}>
                <Button color="blue">Book Now</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center items-center space-x-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-800"
            } rounded-lg`}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllClass;
