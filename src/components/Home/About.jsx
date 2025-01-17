import Title from "../Title";
import { assets } from "../../assets/assets";
import { Button, List } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";
import { Link } from "react-router";

const About = () => {
  const features = [
    "Expert trainers and resources.",
    "Tailored programs for all fitness levels.",
    "A supportive and inspiring community.",
    "Progress tracking for measurable results.",
  ];
  return (
    <div>
      <Title
        title={"About TrueFit"}
        description={"Empowering You to Achieve Your Best Self"}
      ></Title>

      <div className="about-section bg-gray-100 py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Column */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 hidden lg:block">
            <img
              src={assets.Gym}
              alt="About TrueFit"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-4xl font-bold mb-4 font-prata">About TrueFit</h2>
            <h3 className="text-2xl text-gray-600 mb-6">
              Empowering You to Achieve Your Best Self
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              TrueFit is more than just a fitness platform - it&apos;s your partner
              in health and well-being. With personalized workout plans, expert
              guidance, and a supportive community, we are committed to helping
              you transform your fitness journey.
            </p>
            <List>
              {features.map((feature, idx) => (
                <List.Item key={idx} icon={HiCheckCircle}>
                  {feature}
                </List.Item>
              ))}
            </List>
            <Link to={'/forum'}>
              <Button className="mt-10" color="blue">Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
