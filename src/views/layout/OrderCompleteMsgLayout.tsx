import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

const OrderCompleteMsgLayout = () => {
	return (
		<Box sx={{ background: (theme) => theme.palette.secondary.light }}>
			<Navbar />
			<Outlet />
			<Footer />
		</Box>
	);
};

export default OrderCompleteMsgLayout;
