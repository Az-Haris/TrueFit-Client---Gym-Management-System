import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const TrainerHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const trainerId = user?._id;
  const { data: slots = [],  } = useQuery({
    queryKey: ["slots"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/slots/${trainerId}`);
      return result.data;
    },
  });
 
  const { data: forums = [],  } = useQuery({
    queryKey: ["forums"],
    queryFn: async () => {
      const result = await axiosSecure.get('/trainer-forum');
      return result.data;
    },
  });
 
  
  const stats = {
    totalSlots: slots.length,
    AvailableSlots: user?.slots,
    pendingApplications: forums?.length,
  };


  const upcomingBookings = [
    {
      id: 1,
      className: "Yoga",
      time: "8:00 AM - 9:00 AM",
      date: "20 Jan 2025",
      bookedBy: "Alice Johnson",
    },
    {
      id: 2,
      className: "HIIT",
      time: "10:00 AM - 11:00 AM",
      date: "21 Jan 2025",
      bookedBy: "Bob Smith",
    },
  ];

  return (
    <div>
      {/* Welcome Section */}
      <div className="bg-white shadow-md rounded-lg p-3 sm:p-6 mb-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {user && (
            <img
              src={user.photoURL}
              alt={user?.displayName}
              className="w-16 h-16 rounded-full object-cover"
            />
          )}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome, {user?.fullName || user?.displayName}!
            </h1>
            <p className="text-gray-600">Your dashboard at a glance.</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow-md rounded-lg p-3 sm:p-6">
          <h2 className="text-lg font-semibold text-gray-800">Total Slots</h2>
          <p className="text-2xl font-bold text-blue-500">{stats.totalSlots}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-3 sm:p-6">
          <h2 className="text-lg font-semibold text-gray-800">Available Slots</h2>
          <p className="text-2xl font-bold text-red-500">
            {stats.AvailableSlots}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-3 sm:p-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Forum Posts
          </h2>
          <p className="text-2xl font-bold text-green-500">
            {stats.pendingApplications}
          </p>
        </div>
      </div>

      {/* Upcoming Bookings */}
      <div className="bg-white shadow-md rounded-lg p-3 sm:p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Upcoming Bookings
        </h2>
        {upcomingBookings.length > 0 ? (
          <div className="space-y-4">
            <div className="flex gap-5 flex-col sm:flex-row sm:items-center bg-gray-50  rounded-lg">
              {upcomingBookings.map((booking) => (
                <div key={booking.id} className="p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {booking.className}
                    </h3>
                    <p className="text-sm text-gray-600">{booking.date}</p>
                    <p className="text-sm text-gray-600">{booking.time}</p>
                    <p className="text-sm text-gray-600">
                      <strong>Booked By:</strong> {booking.bookedBy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-600">No upcoming bookings.</p>
        )}
      </div>

      {/* Manage Slots Section */}
      <div className="bg-white shadow-md rounded-lg p-3 sm:p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Manage Slots</h2>
        <p className="text-gray-600 mb-4">
          View, add, or update your available slots to keep your schedule
          organized.
        </p>
        <Link to={'/dashboard/manage-slots'} className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600">
          Manage Slots
        </Link>
      </div>
    </div>
  );
};

export default TrainerHome;
