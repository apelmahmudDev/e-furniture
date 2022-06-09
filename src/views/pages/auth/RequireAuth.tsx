import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../../../store";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
	const auth = useSelector((state: RootState) => state.auth);
	let location = useLocation();

	if (!auth.isAuthenticated) {
		return <Navigate to="/auth/login" state={{ from: location }} replace />;
	}

	return children;
};

export default RequireAuth;
