import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const MemberHome = () => {
  const { user } = useAuth();
  const userEmail = user?.email;
  const axiosSecure = useAxiosSecure();
  const { data: userData = {} } = useQuery({
    queryKey: ["member-info"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/users/${user?.email}`);
      return result.data;
    },
  });
  const { data } = useQuery({
    queryKey: ["bookingInfo"],
    enabled: userData?.subscription == !undefined,
    queryFn: async () => {
      const result = await axiosSecure.get(`/bookings/${userEmail}`);
      return result.data;
    },
  });
  const slotsInfo = data?.slotResult;

  const quickLinks = [
    { id: 1, title: "Community Forums", link: "/forum" },
    { id: 2, title: "Book a Trainer", link: "/trainers" },
    { id: 3, title: "Become a Trainer", link: "/become-trainer" },
  ];

  return (
    <div>
      <Helmet>
        <title>TrueFit - Hey Member, Your Dashboard is Here.</title>
      </Helmet>
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
              <p className="text-gray-600">
                {userData.subscription || "Explorer"}
              </p>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Upcoming Bookings */}
        <div className="bg-white shadow-md rounded-lg p-3 sm:p-6 mb-6">
          <h3 className="text-lg font-bold mb-4">Upcoming Bookings</h3>
          {data === undefined ? (
            <div>
              <p className="text-red-500">Haven&apos;t Booked Any Trainer. </p>
              <Link
                to={"/trainers"}
                className=" text-blue-400 hover:text-blue-600"
              >
                Book a Trainer
              </Link>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="p-3 border rounded-lg">
                <p>
                  <strong>Name:</strong> {slotsInfo?.slotName || ""}
                </p>
                <p>
                  <strong>Time:</strong> {slotsInfo?.slotTime || ""}
                </p>
                <p>
                  <strong>Days:</strong>{" "}
                  {slotsInfo?.selectedDays
                    ?.map((day) => day.label)
                    .join(", ") || ""}
                </p>
              </div>
            </div>
          )}
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
      </div>
    </div>
  );
};

export default MemberHome;
