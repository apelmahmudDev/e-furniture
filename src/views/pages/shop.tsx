import AppDrawer from "../components/common/AppDrawer";
import ProductDetails from "../components/common/ProductDetails";
import WishAndCardView from "../components/common/WishAndCardView";
import Newsletter from "../components/common/Newsletter";
import Services from "../components/common/Services";

import AllProducts from "../components/shop/AllProducts";

const Shop = () => {
	return (
		<>
			<AllProducts />
			<Services />
			<Newsletter />
			<WishAndCardView /> {/* global  */}
			<ProductDetails /> {/* global  */}
			<AppDrawer /> {/* global */}
		</>
	);
};

export default Shop;
