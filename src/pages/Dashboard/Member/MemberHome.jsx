import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";


const MemberHome = () => {
  const {user} = useAuth()
  const memberInfo = {
    name: "Jane Smith",
    profilePicture: "https://via.placeholder.com/150",
    membership: "Gold Member",
    email: "jane.smith@example.com",
  };

  const upcomingBookings = [
    {
      id: 1,
      trainer: "John Doe",
      date: "2025-01-20",
      time: "10:00 AM - 11:00 AM",
      class: "Yoga Class",
    },
    {
      id: 2,
      trainer: "Emily Brown",
      date: "2025-01-22",
      time: "5:00 PM - 6:00 PM",
      class: "Strength Training",
    },
  ];

  const notifications = [
    "Your booking with John Doe has been confirmed.",
    "A new forum post is available in Community Forums.",
    "Your membership renewal is due next month.",
  ];

  const quickLinks = [
    { id: 1, title: "Community Forums", link: "/forum" },
    { id: 2, title: "Book a Trainer", link: "/trainers" },
    { id: 3, title: "Classes", link: "/classes" },
  ];

  return (
    <div>
      <div className="max-w-5xl mx-auto">
        {/* Profile Section */}
        <div className="bg-white shadow-md rounded-lg p-3 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-bold">{user.displayName}</h2>
              <p className="text-gray-600">{memberInfo.membership}</p>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Upcoming Bookings */}
        <div className="bg-white shadow-md rounded-lg p-3 sm:p-6 mb-6">
          <h3 className="text-lg font-bold mb-4">Upcoming Bookings</h3>
          <div className="flex flex-col sm:flex-row gap-5">
          {upcomingBookings.map((booking) => (
            <div
              key={booking.id}
              className="p-3 border rounded-lg"
            >
              <p>
                <strong>Trainer:</strong> {booking.trainer}
              </p>
              <p>
                <strong>Class:</strong> {booking.class}
              </p>
              <p>
                <strong>Date:</strong> {booking.date}
              </p>
              <p>
                <strong>Time:</strong> {booking.time}
              </p>
            </div>
          ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white shadow-md rounded-lg p-3 sm:p-6 mb-6">
          <h3 className="text-lg font-bold mb-4">Notifications</h3>
          <ul className="list-disc list-inside text-gray-700">
            {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="bg-white shadow-md rounded-lg p-3 sm:p-6 mb-6">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.id}
                to={link.link}
                className="block bg-blue-500 text-white text-center py-3 rounded-lg hover:bg-blue-600"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Trainer Recommendations */}
        <div className="bg-white shadow-md rounded-lg p-3 sm:p-6">
          <h3 className="text-lg font-bold mb-4">Recommended Trainers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example cards (can be replaced with dynamic data) */}
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h4 className="font-bold">John Doe</h4>
              <p className="text-gray-600">Specialty: Yoga & Strength</p>
              <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600">
                View Profile
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h4 className="font-bold">Emily Brown</h4>
              <p className="text-gray-600">Specialty: Cardio Training</p>
              <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600">
                View Profile
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h4 className="font-bold">Alex Green</h4>
              <p className="text-gray-600">Specialty: Pilates & Stretching</p>
              <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberHome;
