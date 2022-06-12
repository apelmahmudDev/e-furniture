import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { ROUTING_TREE } from "../../../constants/siteUrls";
import { RootState } from "../../../store";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
	const auth = useSelector((state: RootState) => state.auth);
	let location = useLocation();

	if (!auth.isAuthenticated) {
		return (
			<Navigate
				to={`/${ROUTING_TREE.AUTH.LOGIN}`}
				state={{ from: location }}
				replace
			/>
		);
	}

	return children;
};

export default RequireAuth;
