import TopCategories from "../components/home/TopCategories";
import UniqueProducts from "../components/home/UniqueProducts";
import Blog from "../components/home/Blog";
import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import LatestProducts from "../components/home/LatestProducts";

import AppDrawer from "../components/common/AppDrawer";
import ProductDetails from "../components/common/ProductDetails";
import WishAndCardView from "../components/common/WishAndCardView";
import Newsletter from "../components/common/Newsletter";
import Services from "../components/common/Services";

const Home = () => {
	return (
		<>
			<Hero />
			<FeaturedProducts />
			<LatestProducts />
			<UniqueProducts />
			<TopCategories />
			<Blog />
			<Services />
			<Newsletter />
			<WishAndCardView /> {/* global */}
			<ProductDetails /> {/* global */}
			<AppDrawer /> {/* global */}
		</>
	);
};

export default Home;
