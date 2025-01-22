import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../utils/imageUpload";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router";

const Profile = () => {
  const { user, updateUser, setUser, logOut } = useAuth();
  const [image, setImage] = useState(user.photoURL);
  const [name, setName] = useState(user.displayName);
  const [selectedFile, setSelectedFile] = useState(null);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setSelectedFile(file);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const photoURL = await imageUpload(selectedFile);

    updateUser({ displayName: name, photoURL }).then(async () => {
      await axiosPublic
        .patch(`/user/${user.email}`, { displayName: name, photoURL })
        .then(async(user) => {
          setUser(user.data);
          navigate('/dashboard/member-home')
          await Swal.fire("Success!", `Profile Updated Successfully! Please Login again to see changes.`, "success");
          logOut();
        });
    });
  };

  return (
    <div className="">
      <form
        onSubmit={handleUpdateProfile}
        className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Your Profile</h2>

        {/* Profile Picture */}
        <div className="mb-6 text-center">
          <img
            src={image}
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
            name="photo"
            onChange={handleImageChange}
            className="hidden"
            accept="image/*"
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            defaultValue={name}
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
            value={user.email}
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
            defaultValue={user.lastLogin.split("T")[0]}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Save Changes Button */}
        <div className="text-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
