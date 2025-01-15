import { Link } from "react-router";
import Title from "../Title";
import { Button } from "flowbite-react";

const CommunityPosts = () => {
  const posts = [
    {
      title: "5 Tips to Stay Consistent with Workouts",
      snippet: "Practical ways to build",
      author: "Jane D.",
      date: "January 10, 2025",
      link: "/community/tips-to-stay-consistent",
    },
    {
      title: "Meal Prepping 101: Save Time & Eat Healthy",
      snippet: "A beginner's guide to mastering the art of meal prepping.",
      author: "John S.",
      date: "January 9, 2025",
      link: "/community/meal-prepping-guide",
    },
    {
      title: "Meal Prepping 101: Save Time & Eat Healthy",
      snippet: "A beginner's guide to mastering the art of meal prepping.",
      author: "John S.",
      date: "January 9, 2025",
      link: "/community/meal-prepping-guide",
    },
    {
      title: "Meal Prepping 101: Save Time & Eat Healthy",
      snippet: "A beginner's guide to mastering the art of meal prepping.",
      author: "John S.",
      date: "January 9, 2025",
      link: "/community/meal-prepping-guide",
    },
    {
      title: "Meal Prepping 101: Save Time & Eat Healthy",
      snippet: "A beginner's guide to mastering the art of meal prepping.",
      author: "John S.",
      date: "January 9, 2025",
      link: "/community/meal-prepping-guide",
    },
    {
      title: "Meal Prepping 101: Save Time & Eat Healthy",
      snippet: "A beginner's guide to mastering the art of meal prepping.",
      author: "John S.",
      date: "January 9, 2025",
      link: "/community/meal-prepping-guide",
    },
  ];

  return (
    <div>
      <Title
        title={"Explore Community Insights"}
        description={
          "Stay informed with the latest posts and valuable discussions."
        }
      ></Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-3">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="border hover:shadow-2xl p-4 rounded-md flex flex-col justify-between"
          >
            <div>
              <h3 className="font-bold text-xl">{post.title}</h3>
              <p className="text-gray-600 my-2">{post.snippet}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                By {post.author} | {post.date}
              </p>
              <Link
                to={post.link}
                className="mt-4 inline-block text-blue-500 font-semibold"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
        <div className="flex justify-center mt-10">
          <Link to={"/community"}>
            <Button outline gradientDuoTone="purpleToBlue">
              See more ...
            </Button>
          </Link>
        </div>
    </div>
  );
};

export default CommunityPosts;
