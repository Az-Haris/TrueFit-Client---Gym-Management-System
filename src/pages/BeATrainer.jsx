import { useState } from "react";
import Select from "react-select";
import Title from "../components/Title";
import { Button } from "flowbite-react";
import ScrollToTop from "../components/ScrollToTop";
import useAuth from "../hooks/useAuth";

const skillOptions = [
  { value: "fitness", label: "Fitness" },
  { value: "yoga", label: "Yoga" },
  { value: "zumba", label: "Zumba" },
  { value: "martial-arts", label: "Martial Arts" },
  { value: "dance", label: "Dance" },
];

const dayOptions = [
  { value: "Sun", label: "Sunday" },
  { value: "Mon", label: "Monday" },
  { value: "Tue", label: "Tuesday" },
  { value: "Wed", label: "Wednesday" },
  { value: "Thu", label: "Thursday" },
  { value: "Fri", label: "Friday" },
  { value: "Sat", label: "Saturday" },
];

const BeATrainer = () => {
  const {user}= useAuth()
  const userEmail = user.email;
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    experience: "",
    profileImage: null,
    skills: [],
    availableDays: [],
    availableTime: "",
    aboutInfo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillsChange = (selectedOptions) => {
    setFormData({ ...formData, skills: selectedOptions });
  };

  const handleDaysChange = (selectedOptions) => {
    setFormData({ ...formData, availableDays: selectedOptions });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      fullName,
      age,
      experience,
      skills,
      availableDays,
      availableTime,
      aboutInfo,
      profileImage,
    } = formData;

    const data = new FormData();
    data.append("fullName", fullName);
    data.append("email", userEmail); // Read-only email
    data.append("experience", experience);
    data.append("age", age);
    data.append("skills", JSON.stringify(skills.map((skill) => skill.value)));
    data.append(
      "availableDays",
      JSON.stringify(availableDays.map((day) => day.value)),
    );
    data.append("availableTime", availableTime);
    data.append("aboutInfo", aboutInfo);
    data.append("status", "pending"); // Default status
    data.append("slots", 10); // Default slots
    if (profileImage) data.append("profileImage", profileImage);

    try {
    //   await axios.post("/api/apply-trainer", data);
    //   alert("Application submitted successfully!");
    console.log(formData)
    } catch (error) {
      console.error(error);
      alert("Error submitting application.");
    }
  };

  return (
    <div className="mt-5 md:mt-10">
      <ScrollToTop></ScrollToTop>
      <Title
        title={"Become a Trainer"}
        description={
          "Apply to share your expertise and inspire future fitness enthusiasts."
        }
      ></Title>
      

      <div className="container mx-auto px-3 max-w-2xl">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-md rounded-lg border"
      >
        <div className="mb-4">
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Email (Read-only)</label>
          <input
            type="email"
            name="email"
            value={userEmail}
            readOnly
            className="w-full border p-2 rounded-lg bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Year of Experience</label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            placeholder="e.g., 2"
            onChange={handleInputChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Skills</label>
          <Select
            isMulti
            options={skillOptions}
            onChange={handleSkillsChange}
            className="w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Available Days</label>
          <Select
            isMulti
            options={dayOptions}
            onChange={handleDaysChange}
            className="w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Available Time</label>
          <input
            type="text"
            name="availableTime"
            value={formData.availableTime}
            onChange={handleInputChange}
            placeholder="e.g., 9:00 AM - 5:00 PM"
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">About Yourself</label>
          <textarea
            name="aboutInfo"
            value={formData.aboutInfo}
            placeholder="Describe about yourself..."
            onChange={handleInputChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>

        
        <div className="mb-4">
          <label className="block font-medium mb-1">Profile Image</label>
          <input
            type="file"
            name="profileImage"
            onChange={handleFileChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>

        <Button type="submit" className="px-10 mt-10" color="blue">Apply</Button>
      </form>
      
      </div>
    </div>
  );
};

export default BeATrainer;
