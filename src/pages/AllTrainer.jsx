import Title from "../components/Title";
import TrainerCard from "../components/Trainer/TrainerCard";

const AllTrainer = () => {

    const trainers = [
        {
          id: 1,
          name: "Sarah Thompson",
          image: "https://via.placeholder.com/150", // Replace with actual image URLs
          experience: 8,
          specialization: "Strength Training, Weight Management",
          slots: 5,
          linkedin: "https://www.linkedin.com/in/sarah-thompson",
          instagram: "https://www.instagram.com/sarah_thompson",
          slug: "sarah-thompson",
        },
        {
          id: 2,
          name: "Michael Johnson",
          image: "https://via.placeholder.com/150",
          experience: 10,
          specialization: "Yoga, Meditation",
          slots: 2,
          linkedin: "https://www.linkedin.com/in/michael-johnson",
          instagram: "https://www.instagram.com/michael_johnson",
          slug: "michael-johnson",
        },
        {
          id: 3,
          name: "Emily Davis",
          image: "https://via.placeholder.com/150",
          experience: 6,
          specialization: "Cardio, HIIT, Endurance Training",
          slots: 0,
          linkedin: "https://www.linkedin.com/in/emily-davis",
          instagram: "https://www.instagram.com/emily_davis",
          slug: "emily-davis",
        },
        {
          id: 4,
          name: "Daniel Lee",
          image: "https://via.placeholder.com/150",
          experience: 12,
          specialization: "Bodybuilding, Nutrition",
          slots: 4,
          linkedin: "https://www.linkedin.com/in/daniel-lee",
          instagram: "https://www.instagram.com/daniel_lee",
          slug: "daniel-lee",
        },
        {
          id: 5,
          name: "Sophia Martinez",
          image: "https://via.placeholder.com/150",
          experience: 7,
          specialization: "Pilates, Flexibility Training",
          slots: 3,
          linkedin: "https://www.linkedin.com/in/sophia-martinez",
          instagram: "https://www.instagram.com/sophia_martinez",
          slug: "sophia-martinez",
        },
        {
          id: 6,
          name: "James Carter",
          image: "https://via.placeholder.com/150",
          experience: 9,
          specialization: "CrossFit, Functional Fitness",
          slots: 6,
          linkedin: "https://www.linkedin.com/in/james-carter",
          instagram: "https://www.instagram.com/james_carter",
          slug: "james-carter",
        },
      ];
      

      


  return (
    <div className="mt-10 container mx-auto">
      <Title title={"Meet Our Trainers"} description={"Experienced trainers dedicated to helping you achieve fitness goals."}></Title>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-3">
        {trainers.map((trainer) => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </div>
    </div>
  );
};

export default AllTrainer;
