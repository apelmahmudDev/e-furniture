import { Outlet } from "react-router-dom";
import AppBreadcrumbs from "../components/common/AppBreadcrumbs";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Newsletter from "../components/common/Newsletter";
import Services from "../components/common/Services";

const BlogsLayout = () => {
	return (
		<>
			<Navbar />
			<AppBreadcrumbs />
			<Outlet />
			<Services />
			<Newsletter />
			<Footer />
		</>
	);
};

export default BlogsLayout;
