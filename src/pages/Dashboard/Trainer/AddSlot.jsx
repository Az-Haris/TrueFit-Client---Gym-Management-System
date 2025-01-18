import Select from "react-select";
import { useState } from "react";

const AddSlot = () => {
  const [slotData, setSlotData] = useState({
    slotName: "",
    slotTime: "",
    selectedClasses: [],
    otherInfo: "",
  });

  // Sample data for classes and days (replace with dynamic data from the backend if needed)
  const previousTrainerData = {
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30,
    skills: ["Yoga", "Cardio", "Pilates"],
    availableDays: ["Monday", "Wednesday", "Friday"],
  };

  const classesData = [
    { value: "Yoga", label: "Yoga" },
    { value: "Cardio", label: "Cardio" },
    { value: "Strength Training", label: "Strength Training" },
    { value: "Pilates", label: "Pilates" },
  ];

  const availableDaysOptions = previousTrainerData.availableDays.map((day) => ({
    value: day,
    label: day,
  }));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSlotData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClassSelect = (selectedOptions) => {
    setSlotData((prevState) => ({
      ...prevState,
      selectedClasses: selectedOptions,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Slot Data Submitted:", slotData);

    // Add logic to save the data to the database
    alert("Slot added successfully!");
    setSlotData({
      slotName: "",
      slotTime: "",
      selectedClasses: [],
      otherInfo: "",
    });
  };

  return (
    
      <div className="w-full max-w-2xl">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Add New Slot</h2>

        {/* Read-Only Trainer Data */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Trainer Details</h3>
          <p>
            <strong>Name:</strong> {previousTrainerData.name}
          </p>
          <p>
            <strong>Email:</strong> {previousTrainerData.email}
          </p>
          <p>
            <strong>Age:</strong> {previousTrainerData.age}
          </p>
          <p>
            <strong>Skills:</strong> {previousTrainerData.skills.join(", ")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Select Days */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select Days
            </label>
            <Select
              options={availableDaysOptions}
              isMulti
              placeholder="Select available days"
              className="mt-1"
            />
          </div>

          {/* Slot Name */}
          <div>
            <label
              htmlFor="slotName"
              className="block text-sm font-medium text-gray-700"
            >
              Slot Name
            </label>
            <input
              type="text"
              id="slotName"
              name="slotName"
              value={slotData.slotName}
              onChange={handleInputChange}
              required
              placeholder="Enter slot name (e.g., Morning Slot)"
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Slot Time */}
          <div>
            <label
              htmlFor="slotTime"
              className="block text-sm font-medium text-gray-700"
            >
              Slot Time
            </label>
            <input
              type="text"
              id="slotTime"
              name="slotTime"
              value={slotData.slotTime}
              onChange={handleInputChange}
              required
              placeholder="Enter slot time (e.g., 1 hour)"
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Classes Include */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Classes Include
            </label>
            <Select
              options={classesData}
              isMulti
              onChange={handleClassSelect}
              placeholder="Select classes to include"
              value={slotData.selectedClasses}
              className="mt-1"
            />
          </div>

          {/* Other Info */}
          <div>
            <label
              htmlFor="otherInfo"
              className="block text-sm font-medium text-gray-700"
            >
              Other Info (Optional)
            </label>
            <input
              type="text"
              id="otherInfo"
              name="otherInfo"
              value={slotData.otherInfo}
              onChange={handleInputChange}
              placeholder="Enter any additional information"
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Add Slot
            </button>
          </div>
        </form>
      </div>
  );
};

export default AddSlot;
