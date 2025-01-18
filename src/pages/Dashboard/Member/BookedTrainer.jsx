import { useState } from "react";
import { FaStar } from "react-icons/fa";

const BookedTrainer = () => {
  // Sample data
  const trainerInfo = {
    name: "John Doe",
    profilePicture: "https://via.placeholder.com/150",
    expertise: "Strength Training, Yoga",
    contact: "john.doe@example.com",
  };

  const classesInfo = [
    { id: 1, name: "Morning Yoga" },
    { id: 2, name: "Strength Training" },
    { id: 3, name: "Cardio Blast" },
  ];

  const slotInfo = [
    { id: 1, slotName: "Morning Slot", time: "8:00 AM - 9:00 AM" },
    { id: 2, slotName: "Evening Slot", time: "5:00 PM - 6:00 PM" },
  ];

  const otherInfo = "Trainer has over 10 years of experience and is certified in personal training.";

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleReviewSubmit = () => {
    // Submit review logic here
    console.log("Review:", review);
    console.log("Rating:", rating);
    setIsReviewModalOpen(false);
  };

  return (
    <div>
      <div className="max-w-4xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Booked Trainer</h1>

        {/* Trainer Info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
          <img
            src={trainerInfo.profilePicture}
            alt={trainerInfo.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-bold">{trainerInfo.name}</h2>
            <p className="text-gray-600">{trainerInfo.expertise}</p>
            <p className="text-gray-600">{trainerInfo.contact}</p>
          </div>
        </div>

        {/* Classes Info */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800">Classes Info</h3>
          <ul className="list-disc list-inside text-gray-700">
            {classesInfo.map((classItem) => (
              <li key={classItem.id}>{classItem.name}</li>
            ))}
          </ul>
        </div>

        {/* Slot Info */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800">Slot Info</h3>
          <ul className="text-gray-700">
            {slotInfo.map((slot) => (
              <li key={slot.id}>
                <strong>{slot.slotName}:</strong> {slot.time}
              </li>
            ))}
          </ul>
        </div>

        {/* Other Info */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800">Other Info</h3>
          <p className="text-gray-700">{otherInfo}</p>
        </div>

        {/* Review Button */}
        <button
          onClick={() => setIsReviewModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Leave a Review
        </button>
      </div>

      {/* Review Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Leave a Review</h2>

            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={24}
                  className={`cursor-pointer ${
                    star <= rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>

            {/* Feedback Textarea */}
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your feedback here..."
              className="w-full border border-gray-300 p-2 rounded-lg mb-4"
              rows="4"
            ></textarea>

            {/* Submit Button */}
            <button
              onClick={handleReviewSubmit}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Submit Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookedTrainer;
