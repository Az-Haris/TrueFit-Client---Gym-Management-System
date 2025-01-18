

const Profile = () => {
  

  return (
    <div className="">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Profile</h2>

        {/* Profile Picture */}
        <div className="mb-6 text-center">
          <img
            src={"https://via.placeholder.com/150"}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <label
            htmlFor="profilePicture"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Change Profile Picture
          </label>
          <input
            type="file"
            id="profilePicture"
            className="hidden"
            accept="image/*"
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Last Login */}
        <div className="mb-4">
          <label
            htmlFor="lastLogin"
            className="block text-gray-700 font-medium mb-2"
          >
            Last Login
          </label>
          <input
            type="text"
            id="lastLogin"
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Save Changes Button */}
        <div className="text-center">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
