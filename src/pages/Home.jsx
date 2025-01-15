import About from "../components/Home/About";
import Banner from "../components/Home/Banner";
import Feature from "../components/Home/Feature";
import FeaturedClasses from "../components/Home/FeaturedClasses";
import Review from "../components/Home/Review";
import SectionGap from "../components/SectionGap";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <SectionGap></SectionGap>
      <Feature></Feature>
      <SectionGap></SectionGap>
      <About></About>
      <SectionGap></SectionGap>
      <FeaturedClasses></FeaturedClasses>
      <SectionGap></SectionGap>
      <Review></Review>
      <SectionGap></SectionGap>
    </div>
  );
};

export default Home;
