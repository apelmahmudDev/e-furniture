import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { ROUTING_TREE } from "../../constants/siteUrls";
import { RootState } from "../../store";
import NotFound from "../../views/pages/page404";

const RequireAdmin = ({ children }: { children: JSX.Element }) => {
	const auth = useSelector((state: RootState) => state.auth);
	let location = useLocation();

	if (auth.user.user_type === "user") {
		return (
			<Navigate
				to={"/" + ROUTING_TREE.HOME}
				state={{ from: location }}
				replace
			/>
		);
	} else if (auth.user.user_type === "admin") {
		return children;
	} else {
		return <NotFound />;
	}
};

export default RequireAdmin;
