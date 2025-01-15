import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Title from "../Title";

const Review = () => {
  const reviews = [
    {
      name: "John Doe",
      image: "/path-to-image/john.jpg",
      text: "This program has completely transformed my fitness journey!",
      rating: 5,
    },
    {
      name: "Jane Smith",
      image: "/path-to-image/jane.jpg",
      text: "The trainers are amazing, and the plans are very effective!",
      rating: 4.5,
    },
    {
      name: "Alex Johnson",
      image: "/path-to-image/alex.jpg",
      text: "I love the personalized approach and community vibe here!",
      rating: 5,
    },
    {
      name: "Emily Davis",
      image: "/path-to-image/emily.jpg",
      text: "Great workouts and excellent trainers. Highly recommend TrueFit!",
      rating: 4.8,
    },
    {
      name: "Michael Brown",
      image: "/path-to-image/michael.jpg",
      text: "Superb experience with outstanding results. Worth every penny!",
      rating: 5,
    },
  ];

  return (
    <div className="px-3">
      <Title
        title={"Real Stories, Real Results"}
        description={
          "Discover success stories shared by our inspiring fitness community members."
        }
      ></Title>
      <Swiper
        modules={[Navigation]} // Use modules array to include Navigation
        slidesPerView={3}
        spaceBetween={40}
        navigation
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card p-6 rounded-lg shadow-lg text-center border hover:shadow-2xl">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border"
              />
              <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
              <p className="text-gray-700 mb-4 italic">
                &quot;{review.text}&quot;
              </p>
              <div className="text-yellow-400">
                {"★".repeat(Math.floor(review.rating))}{" "}
                {review.rating % 1 > 0 && "½"}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
