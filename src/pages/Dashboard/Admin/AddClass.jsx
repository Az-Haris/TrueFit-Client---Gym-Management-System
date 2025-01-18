import { useState } from "react";
const AddClass = () => {
  const [formData, setFormData] = useState({
    className: "",
    image: null,
    details: "",
    additionalInfo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prevState) => ({ ...prevState, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Add logic here to save data to the database
    alert("Class added successfully!");
    setFormData({
      className: "",
      image: null,
      details: "",
      additionalInfo: "",
    });
  };

  return (
    <div>
      <div className="w-full max-w-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Class</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Class Name */}
          <div>
            <label
              htmlFor="className"
              className="block text-sm font-medium text-gray-700"
            >
              Class Name
            </label>
            <input
              type="text"
              id="className"
              name="className"
              value={formData.className}
              onChange={handleInputChange}
              required
              placeholder="Enter class name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Image */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Class Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="mt-1 block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:bg-gray-100 file:text-gray-700 file:hover:bg-gray-200"
            />
          </div>

          {/* Details */}
          <div>
            <label
              htmlFor="details"
              className="block text-sm font-medium text-gray-700"
            >
              Details
            </label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleInputChange}
              required
              placeholder="Enter class details"
              rows="4"
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Additional Info */}
          <div>
            <label
              htmlFor="additionalInfo"
              className="block text-sm font-medium text-gray-700"
            >
              Additional Info
            </label>
            <input
              type="text"
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              placeholder="Enter additional information (optional)"
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Add Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
