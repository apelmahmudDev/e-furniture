import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { setIsGoToOrderCompletedPage } from "../../store/slice/globalSlice";
import ShippingContainer from "../components/shipping";

const Shipping = () => {
	const dispatch = useAppDispatch();
	// is going to order completed page ?
	useEffect(() => {
		dispatch(setIsGoToOrderCompletedPage(true));
	}, [dispatch]);

	return (
		<>
			<ShippingContainer />
		</>
	);
};

export default Shipping;
