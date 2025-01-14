import Banner from "../components/Home/Banner";
import Feature from "../components/Home/Feature";
import SectionGap from "../components/SectionGap";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <SectionGap></SectionGap>
            <Feature></Feature>
            <SectionGap></SectionGap>
        </div>
    );
};

export default Home;