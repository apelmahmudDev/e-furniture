import { Outlet } from "react-router-dom";
import AppBreadcrumbs from "../components/common/AppBreadcrumbs";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

const ShopLayout = () => {
	return (
		<>
			<Navbar />
			<AppBreadcrumbs />
			<Outlet />
			<Footer />
		</>
	);
};

export default ShopLayout;
