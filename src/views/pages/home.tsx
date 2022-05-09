import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import WishAndCardView from "../components/common/WishAndCardView";
import Blog from "../components/home/Blog";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Hero from "../components/home/Hero";
import LatestProducts from "../components/home/LatestProducts";
import Newsletter from "../components/home/Newsletter";
import Services from "../components/home/Services";
import TopCategories from "../components/home/TopCategories";
import UniqueProducts from "../components/home/UniqueProducts";

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<FeaturedProducts />
			<LatestProducts />
			<UniqueProducts />
			<TopCategories />
			<Blog />
			<Services />
			<Newsletter />
			<Footer />
			<WishAndCardView />
		</>
	);
};

export default Home;
