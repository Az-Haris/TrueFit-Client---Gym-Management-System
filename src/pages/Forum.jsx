import { Link } from "react-router";
import Title from "../components/Title";

const Forum = () => {

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
          snippet: "A beginner's guide to mastering the art of meal prepping.A beginner's guide to mastering the art of meal prepping.A beginner's guide to mastering the art of meal prepping.",
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
    <div className="container mx-auto p-4 mt-5">
      {/* <!-- Forum Header --> */}
      <Title
              title={"Explore Community Insights"}
              description={
                "Stay informed with the latest posts and valuable discussions."
              }
            ></Title>




      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-3">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="border hover:shadow-2xl p-4 rounded-md flex flex-col justify-between"
          >
            <div>
              <h3 className="font-bold text-xl">{post.title}</h3>
              <p className="text-sm text-gray-400 mt-1 mb-3">
                By {post.author} | {post.date}
              </p>
              <p className="text-gray-600">{post.snippet}</p>
            </div>
            <div>
            <div className="flex items-center justify-between mt-4">
            {/* <!-- Voting System --> */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-green-500">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 10h4v6h6v-6h4L10 3 3 10z" />
                </svg>
                Upvote
              </button>
              <button className="flex items-center text-red-500">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 10h4V4h6v6h4l-7 7-7-7z" />
                </svg>
                Downvote
              </button>
            </div>
            <span className="text-gray-500">Votes: 25</span>
          </div>
            </div>
          </div>
        ))}
      </div>





      {/* <!-- Pagination --> */}
      <div className="mt-10 flex justify-center space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Prev
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default Forum;
