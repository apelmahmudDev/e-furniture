import { ROUTING_TREE } from "../constants/siteUrls";
import MainLayout from "../views/layout/MainLayout";
import NotFound from "../views/pages/page404";
import Admin from "../views/pages/admin";
import Dashboard from "../views/pages/admin/dashboard";
import Product from "../views/pages/admin/product";
import Login from "../views/pages/auth/Login";
import SignUp from "../views/pages/auth/SignUp";
import Home from "../views/pages/home";
import RequireAuth from "../views/pages/auth/RequireAuth";
import ShippingLayout from "../views/layout/ShippingLayout";
import Shipping from "../views/pages/shipping";
import OrderCompleteMsg from "../views/pages/orderCompleteMsg";
import OrderCompleteMsgLayout from "../views/layout/OrderCompleteMsgLayout";
import RequireAdmin from "../utils/security/RequireAdmin";
import User from "../views/pages/user";
import MyProfile from "../views/pages/user/myProfile";

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
			<RequireAuth>
				<ShippingLayout />
			</RequireAuth>
		),
		path: ROUTING_TREE.ORDER.SHIPPING,
		children: [{ path: "", element: <Shipping /> }],
	},
	{
		element: (
			<RequireAuth>
				<OrderCompleteMsgLayout />
			</RequireAuth>
		),
		path: ROUTING_TREE.ORDER.COMPLETED,
		children: [{ path: "", element: <OrderCompleteMsg /> }],
	},
	{
		element: (
			// <RequireAuth>
			<User />
			// </RequireAuth>
		),
		path: ROUTING_TREE.USER.USER,
		children: [{ element: <MyProfile />, path: ROUTING_TREE.USER.PROFILE }],
	},
	{
		element: (
			<RequireAuth>
				<RequireAdmin>
					<Admin />
				</RequireAdmin>
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
