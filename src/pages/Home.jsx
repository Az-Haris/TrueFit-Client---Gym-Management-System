import About from "../components/Home/About";
import Banner from "../components/Home/Banner";
import CommunityPosts from "../components/Home/CommunityPosts";
import Feature from "../components/Home/Feature";
import FeaturedClasses from "../components/Home/FeaturedClasses";
import Newsletter from "../components/Home/Newsletter";
import Review from "../components/Home/Review";
import TeamSection from "../components/Home/TeamSection";
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
      <CommunityPosts></CommunityPosts>
      <SectionGap></SectionGap>
      <Newsletter></Newsletter>
      <SectionGap></SectionGap>
      <TeamSection></TeamSection>
    </div>
  );
};

export default Home;
