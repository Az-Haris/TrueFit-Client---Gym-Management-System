import { Button } from "flowbite-react";
import img from "../../assets/workout.avif";
import Title from "../Title";
import { Link } from "react-router";

const FeaturedClasses = () => {
  const classes = [
    {
      title: "HIIT Workout",
      description:
        "A high-intensity interval training session designed to burn calories quickly.",
      bookings: 120,
      image: img,
      bookingLink: "/classes",
    },
    {
      title: "HIIT Workout",
      description:
        "A high-intensity interval training session designed to burn calories quickly.",
      bookings: 120,
      image: img,
      bookingLink: "/classes",
    },
    {
      title: "HIIT Workout",
      description:
        "A high-intensity interval training session designed to burn calories quickly.",
      bookings: 120,
      image: img,
      bookingLink: "/classes",
    },
    {
      title: "HIIT Workout",
      description:
        "A high-intensity interval training session designed to burn calories quickly.",
      bookings: 120,
      image: img,
      bookingLink: "/classes",
    },
    {
      title: "HIIT Workout",
      description:
        "A high-intensity interval training session designed to burn calories quickly.",
      bookings: 120,
      image: img,
      bookingLink: "/classes",
    },
    {
      title: "HIIT Workout",
      description:
        "A high-intensity interval training session designed to burn calories quickly.",
      bookings: 120,
      image: img,
      bookingLink: "/classes",
    },
  ];
  return (
    <div>
      <Title
        title={"Featured Classes"}
        description={"Top 6 most popular classes based on total bookings"}
      ></Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-3">
        {classes.map((clas, idx) => (
          <div
            key={idx}
            className="border hover:shadow-2xl bg-white p-6 rounded-lg shadow-lg"
          >
            <img
              src={clas.image}
              alt=""
              className="w-full h-52 sm:h-60 lg:h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{clas.title}</h3>
            <p className="text-gray-700 mb-4">
              {clas.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">{clas.bookings} Bookings</span>
              <Link to={clas.bookingLink}><Button color="blue">
                Book Now
              </Button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedClasses;
