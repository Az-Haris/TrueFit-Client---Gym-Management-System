import { useState } from "react";
import { FaEye } from "react-icons/fa";

const ActivityLog = () => {
  // Sample data
  const [applications, setApplications] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", status: "Pending", feedback: "" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Rejected", feedback: "Lack of required experience." },
    { id: 3, name: "Mark Johnson", email: "mark@example.com", status: "Pending", feedback: "" },
  ]);

  const [selectedFeedback, setSelectedFeedback] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewFeedback = (feedback) => {
    setSelectedFeedback(feedback);
    setIsModalOpen(true);
  };

  return (
    <div className="">
      <div className="max-w-5xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Activity Log</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-3 px-4 border-b border-gray-200">Name</th>
                <th className="text-left py-3 px-4 border-b border-gray-200">Email</th>
                <th className="text-left py-3 px-4 border-b border-gray-200">Status</th>
                <th className="text-left py-3 px-4 border-b border-gray-200">Action</th>
              </tr>
            </thead>
            <tbody>
              {applications
                .filter((app) => app.status !== "Approved") // Exclude approved trainers
                .map((app) => (
                  <tr key={app.id}>
                    <td className="py-3 px-4 border-b border-gray-200">{app.name}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{app.email}</td>
                    <td
                      className={`py-3 px-4 border-b border-gray-200 ${
                        app.status === "Rejected" ? "text-red-500" : "text-yellow-500"
                      }`}
                    >
                      {app.status}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200">
                      {app.status === "Rejected" && (
                        <button
                          onClick={() => handleViewFeedback(app.feedback)}
                          className="text-blue-500 hover:text-blue-700"
                          aria-label="View Feedback"
                        >
                          <FaEye size={20} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Rejection Feedback</h2>
            <p className="text-gray-700">{selectedFeedback || "No feedback provided."}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityLog;
