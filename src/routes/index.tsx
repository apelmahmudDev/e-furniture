import { lazy } from "react";
import { ROUTING_TREE } from "../constants/siteUrls";

import Home from "../views/pages/home";
import RequireAuth from "../views/pages/auth/RequireAuth";
import OrderCompleteMsg from "../views/pages/orderCompleteMsg";
import OrderCompleteMsgLayout from "../views/layout/OrderCompleteMsgLayout";
import RequireAdmin from "../utils/security/RequireAdmin";
import Cart from "../views/pages/cart";
import Shop from "../views/pages/shop";
import Blogs from "../views/pages/blogs";

const MainLayout = lazy(() => import("../views/layout/MainLayout"));
const NotFound = lazy(() => import("../views/pages/page404"));
const Admin = lazy(() => import("../views/pages/admin"));
const Dashboard = lazy(() => import("../views/pages/admin/dashboard"));
const Product = lazy(() => import("../views/pages/admin/product"));
const Login = lazy(() => import("../views/pages/auth/Login"));
const SignUp = lazy(() => import("../views/pages/auth/SignUp"));
const Shipping = lazy(() => import("../views/pages/shipping"));
const User = lazy(() => import("../views/pages/user"));
const MyProfile = lazy(() => import("../views/pages/user/myProfile"));
const CartLayout = lazy(() => import("../views/layout/CartLayout"));
const Orders = lazy(() => import("../views/pages/user/orders"));
const AdminOrders = lazy(() => import("../views/pages/admin/orders"));
const Wishlist = lazy(() => import("../views/pages/user/wishlist"));
const ShopLayout = lazy(() => import("../views/layout/ShopLayout"));
const ShippingLayout = lazy(() => import("../views/layout/ShippingLayout"));
const BlogsLayout = lazy(() => import("../views/layout/BlogsLayout"));

const routes = [
	{
		element: <MainLayout />,
		path: ROUTING_TREE.HOME,
		children: [{ path: "", element: <Home /> }],
	},
	{
		element: <ShopLayout />,
		path: ROUTING_TREE.SHOP,
		children: [{ path: "", element: <Shop /> }],
	},
	{
		element: <BlogsLayout />,
		path: ROUTING_TREE.BLOGS,
		children: [{ path: "", element: <Blogs /> }],
	},
	// crate account & login
	{ element: <Login />, path: ROUTING_TREE.AUTH.LOGIN },
	{ element: <SignUp />, path: ROUTING_TREE.AUTH.SIGNUP },
	{
		element: <CartLayout />,
		path: ROUTING_TREE.CART,
		children: [{ path: "", element: <Cart /> }],
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

	// user profile
	{
		element: (
			<RequireAuth>
				<User />
			</RequireAuth>
		),
		path: ROUTING_TREE.USER.USER,
		children: [
			{ element: <MyProfile />, path: ROUTING_TREE.USER.PROFILE },
			{ element: <Orders />, path: ROUTING_TREE.USER.ORDERS },
			{ element: <Wishlist />, path: ROUTING_TREE.USER.WISHLIST },
		],
	},

	// admin dashboard
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
			{ element: <Dashboard />, path: ROUTING_TREE.ADMIN.DASHBOARD },
			{ element: <AdminOrders />, path: ROUTING_TREE.ADMIN.ORDERS },
			{ element: <Product />, path: ROUTING_TREE.ADMIN.PRODUCTS },
		],
	},
	{
		element: <NotFound />,
		path: "*",
	},
];

export default routes;
