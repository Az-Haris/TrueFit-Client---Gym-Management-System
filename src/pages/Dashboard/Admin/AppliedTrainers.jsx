import { useNavigate } from "react-router";


const AppliedTrainers = () => {
  // Sample data
  const trainerApplications = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@gmail.com",
      age: 30,
      skills: ["Yoga", "Zumba"],
      status: "Pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@gmail.com",
      age: 28,
      skills: ["Pilates", "Cardio"],
      status: "Pending",
    },
    {
      id: 3,
      name: "Emily Brown",
      email: "emily.brown@gmail.com",
      age: 35,
      skills: ["Strength Training"],
      status: "Pending",
    },
  ];

  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`${id}`); // Redirect to the detailed page
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Applied Trainers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {trainerApplications.map((trainer) => (
          <div
            key={trainer.id}
            className="bg-white border rounded-lg shadow p-4 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-bold text-gray-700 mb-2">
                {trainer.name}
              </h2>
              <p className="text-gray-600 text-sm">
                <strong>Email:</strong> {trainer.email}
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Age:</strong> {trainer.age}
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Skills:</strong> {trainer.skills.join(", ")}
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Status:</strong> {trainer.status}
              </p>
            </div>
            <div className="mt-4">
              <button
                onClick={() => handleDetails(trainer.id)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedTrainers;
