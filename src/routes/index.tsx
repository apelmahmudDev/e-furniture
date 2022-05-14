import MainLayout from "../views/layout/MainLayout";
import Login from "../views/pages/auth/Login";
import SignUp from "../views/pages/auth/SignUp";
import Home from "../views/pages/home";

const routes = [
	{
		element: <MainLayout />,
		path: "/",
		children: [{ path: "", element: <Home /> }],
	},
	{
		element: <Login />,
		path: "/auth/login",
	},
	{
		element: <SignUp />,
		path: "/auth/sign-up",
	},
];

export default routes;
