import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router";

const AppliedTrainerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample trainer details data (you can fetch this data dynamically)
  const trainerDetails = {
    id: 1,
    name: "John Doe",
    email: "john.doe@gmail.com",
    age: 30,
    profileImage: "https://via.placeholder.com/150",
    skills: ["Yoga", "Zumba"],
    availableDays: ["Monday", "Wednesday", "Friday"],
    availableTime: "9 AM - 12 PM",
    status: "Pending",
  };

  const handleConfirm = () => {
    // Handle confirm logic here
    console.log("Application Confirmed");
    navigate("/applied-trainers"); // Redirect to the Applied Trainers page
  };

  const handleReject = () => {
    // Handle reject logic here
    console.log("Application Rejected");
    navigate("/applied-trainers"); // Redirect to the Applied Trainers page
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link to={"/dashboard/applied-trainers"}>
          <FaRegArrowAltCircleLeft className="text-2xl text-black" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-800 ">
          Trainer Details
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={trainerDetails.profileImage}
          alt="Profile"
          className="w-32 h-32 rounded-full border"
        />
        <div>
          <p className="text-lg font-semibold text-gray-700">
            Name: {trainerDetails.name}
          </p>
          <p className="text-gray-600">Email: {trainerDetails.email}</p>
          <p className="text-gray-600">Age: {trainerDetails.age}</p>
          <p className="text-gray-600">
            Skills: {trainerDetails.skills.join(", ")}
          </p>
          <p className="text-gray-600">
            Available Days: {trainerDetails.availableDays.join(", ")}
          </p>
          <p className="text-gray-600">
            Available Time: {trainerDetails.availableTime}
          </p>
          <p className="text-gray-600">Status: {trainerDetails.status}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleConfirm}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Confirm Application
        </button>
        <button
          onClick={handleReject}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Reject Application
        </button>
      </div>
    </div>
  );
};

export default AppliedTrainerDetails;
