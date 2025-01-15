import Title from "../Title";

const TeamSection = () => {
  const trainers = [
    {
      name: "John Doe",
      photo: "https://via.placeholder.com/150",
      bio: "John is a certified personal trainer with 10+ years of experience. He specializes in strength training and weight loss strategies.",
      expertise: ["Strength Training", "Weight Loss", "Personal Coaching"],
    },
    {
      name: "Jane Smith",
      photo: "https://via.placeholder.com/150",
      bio: "Jane is a yoga instructor and nutritionist, passionate about holistic health. She has helped clients achieve mind-body balance.",
      expertise: ["Yoga", "Nutrition", "Mindfulness"],
    },
    {
      name: "Alex Johnson",
      photo: "https://via.placeholder.com/150",
      bio: "Alex is a cardio and endurance coach with a proven track record of improving athletic performance and stamina.",
      expertise: ["Cardio", "Endurance Training", "Athletic Performance"],
    },
  ];

  return (
    <div>
      <Title
        title={"Meet Our Expert Trainers"}
        description={
          "Expert trainers offer personalized guidance for a tailored fitness journey to achieve goals."
        }
      ></Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-3">
        {trainers.map((trainer, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-lg p-6 text-center border hover:shadow-2xl"
          >
            <img
              src={trainer.photo}
              alt={trainer.name}
              className="w-32 h-32 mx-auto rounded-full mb-4 border"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {trainer.name}
            </h3>
            <p className="text-gray-600 mt-2">{trainer.bio}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {trainer.expertise.map((skill, idx) => (
                <span key={idx} className="text-sm text-blue-500 bg-green-100 px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
