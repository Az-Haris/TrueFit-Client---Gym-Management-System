import { useState } from "react";

const ManageSlots = () => {
  // Sample slots data (replace with dynamic data from backend)
  const [slots, setSlots] = useState([
    {
      id: 1,
      slotName: "Morning Slot",
      slotTime: "8:00 AM - 9:00 AM",
      bookedBy: { name: "John Doe", email: "johndoe@example.com" },
    },
    {
      id: 2,
      slotName: "Evening Slot",
      slotTime: "5:00 PM - 6:00 PM",
      bookedBy: null, // Unbooked slot
    },
    {
      id: 3,
      slotName: "Noon Slot",
      slotTime: "12:00 PM - 1:00 PM",
      bookedBy: { name: "Jane Smith", email: "janesmith@example.com" },
    },
  ]);

  const handleDeleteSlot = (slotId) => {
    const confirmation = window.confirm("Are you sure you want to delete this slot?");
    if (confirmation) {
      setSlots(slots.filter((slot) => slot.id !== slotId));
      alert("Slot deleted successfully!");
    }
  };

  return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Slots</h2>

        {/* Card Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {slots.map((slot) => (
            <div
              key={slot.id}
              className="bg-white border rounded-lg shadow p-4 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {slot.slotName}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Time:</strong> {slot.slotTime}
                </p>
                {slot.bookedBy ? (
                  <div className="text-sm text-gray-800">
                    <p>
                      <strong>Booked By:</strong> {slot.bookedBy.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {slot.bookedBy.email}
                    </p>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 italic">Not Booked</p>
                )}
              </div>
              <button
                onClick={() => handleDeleteSlot(slot.id)}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* No Slots Message */}
        {slots.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No slots available.</p>
        )}
      </div>
    
  );
};

export default ManageSlots;
