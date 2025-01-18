import { useState } from "react";

const AddForum = () => {
  const [forumData, setForumData] = useState({
    title: "",
    description: "",
    category: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForumData({ ...forumData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setForumData({ ...forumData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add API call or logic to save forum
    console.log("Forum Submitted:", forumData);
  };

  return (
      <div className="max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Add New Forum</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block font-medium text-gray-700 mb-2"
            >
              Forum Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={forumData.title}
              onChange={handleInputChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter forum title"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={forumData.description}
              onChange={handleInputChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Write forum description here"
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block font-medium text-gray-700 mb-2"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={forumData.category}
              onChange={handleInputChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="">Select a category</option>
              <option value="Fitness">Fitness</option>
              <option value="Nutrition">Nutrition</option>
              <option value="Wellness">Wellness</option>
              <option value="Mental Health">Mental Health</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label
              htmlFor="image"
              className="block font-medium text-gray-700 mb-2"
            >
              Upload Cover Image (optional)
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageUpload}
              className="block w-full text-gray-700"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg shadow hover:bg-blue-600"
          >
            Add Forum
          </button>
        </form>
      </div>
  );
};

export default AddForum;
