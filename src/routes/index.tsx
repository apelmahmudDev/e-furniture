import { ROUTING_TREE } from "../constants/siteUrls";
import MainLayout from "../views/layout/MainLayout";
import NotFound from "../views/pages/404";
import Admin from "../views/pages/admin";
import Dashboard from "../views/pages/admin/dashboard";
import Product from "../views/pages/admin/product";
import Login from "../views/pages/auth/Login";
import SignUp from "../views/pages/auth/SignUp";
import Home from "../views/pages/home";
import RequireAuth from "../views/pages/auth/RequireAuth";
import ShippingLayout from "../views/layout/ShippingLayout";
import Shipping from "../views/pages/shipping";

const routes = [
	{
		element: <MainLayout />,
		path: ROUTING_TREE.HOME,
		children: [{ path: "", element: <Home /> }],
	},
	{
		element: <Login />,
		path: ROUTING_TREE.AUTH.LOGIN,
	},
	{
		element: <SignUp />,
		path: ROUTING_TREE.AUTH.SIGNUP,
	},
	{
		element: (
			// <RequireAuth>
			<ShippingLayout />
			// </RequireAuth>
		),
		path: ROUTING_TREE.SHIPPING,
		children: [{ path: "", element: <Shipping /> }],
	},
	{
		element: (
			<RequireAuth>
				<Admin />
			</RequireAuth>
		),
		path: ROUTING_TREE.ADMIN.ADMIN,
		children: [
			{
				path: ROUTING_TREE.ADMIN.DASHBOARD,
				element: <Dashboard />,
			},
			{
				path: ROUTING_TREE.ADMIN.PRODUCTS,
				element: <Product />,
			},
		],
	},
	{
		element: <NotFound />,
		path: "*",
	},
];

export default routes;
