import Banner from "../components/Home/Banner";
import SectionGap from "../components/SectionGap";
import Title from "../components/Title";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <SectionGap></SectionGap>
            <Title title={'About US'} description={'Seamlessly visualize superior customer service via seamless convergence. Appropriately monetize highly efficient testing procedures and.'}></Title>
        </div>
    );
};

export default Home;