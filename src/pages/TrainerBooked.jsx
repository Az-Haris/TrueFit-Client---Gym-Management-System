import { Card } from "flowbite-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const TrainerBooked = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Data from Trainer Details Page
  const trainerName = "Alexandra Reid"; // Replace with dynamic data if needed
  const selectedSlot = location.state?.slot || "No slot selected";

  // Membership packages
  const packages = [
    {
      name: "Basic Membership",
      price: "10",
      benefits: ["Gym access", "Cardio equipment", "Strength equipment"],
    },
    {
      name: "Standard Membership",
      price: "50",
      benefits: [
        "Gym access",
        "Cardio equipment",
        "Strength equipment",
        "Group fitness classes",
        "Personal training",
      ],
    },
    {
      name: "Premium Membership",
      price: "100",
      benefits: [
        "Gym access",
        "Cardio equipment",
        "Strength equipment",
        "Group fitness classes",
        "Personal training",
        "Locker room access",
        "Sauna/steam room",
      ],
    },
  ];

  // All Packages
  const allBenefits = [
    "Gym access",
    "Cardio equipment",
    "Strength equipment",
    "Group fitness classes",
    "Personal training",
    "Locker room access",
    "Sauna/steam room",
  ];

  // State to track selected package
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleJoinNow = () => {
    if (!selectedPackage) {
      alert("Please select a membership package.");
      return;
    }
    navigate("/payment", {
      state: { trainerName, selectedSlot, selectedPackage },
    });
  };

  return (
    <div className="container mx-auto px-3">
      {/* Trainer and Slot Info */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trainer Booking Details
        </h2>
        <p className="text-gray-700 mb-2 text-lg">
          <strong>Trainer Name:</strong> {trainerName}
        </p>
        <p className="text-gray-700 mb-2 text-lg">
          <strong>Selected Slot:</strong> {selectedSlot}
        </p>
      </div>

      {/* Membership Packages */}
      <div className="bg-gray-50 shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-bold mb-4">Choose Your Membership Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg, idx) => (
            <Card key={idx} >
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                {pkg.name}
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight -mt-4 md:mt-0">
                  {pkg.price}
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>

              <ul className="my-3 md:my-7 space-y-3 md:space-y-5">
                {allBenefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className={`flex space-x-3 ${
                      !pkg.benefits.includes(benefit) && "line-through"
                    }`}
                  >
                    {pkg.benefits.includes(benefit) ? (
                      <svg
                        className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
              >
                Choose plan
              </button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerBooked;
