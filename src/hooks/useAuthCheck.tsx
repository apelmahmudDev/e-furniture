import { useEffect, useState } from "react";
import { useAppDispatch } from "../store";
import { setAuth } from "../store/slice/authSlice";

const useAuthCheck = () => {
	const dispatch = useAppDispatch();
	const [isAuthCheck, setIsAuthCheck] = useState(false);

	useEffect(() => {
		const localAuth = localStorage.getItem("auth");

		if (localAuth) {
			const auth = JSON.parse(localAuth);

			if (auth?.user) {
				dispatch(setAuth(auth.user));
			}
		}

		setIsAuthCheck(true);
	}, [dispatch]);

	return isAuthCheck;
};

export default useAuthCheck;
