import MainLayout from "../views/layout/MainLayout";
import Home from "../views/pages/home";

const routes = [
	{
		element: <MainLayout />,
		path: "/",
		children: [{ path: "", element: <Home /> }],
	},
];

export default routes;
