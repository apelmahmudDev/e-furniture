import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

const CartLayout = () => {
	return (
		<Box
			sx={{
				background: (theme) => theme.palette.secondary.light,
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Navbar />
			<Box sx={{ flex: 1 }}>
				<Outlet />
			</Box>
			<Footer />
		</Box>
	);
};

export default CartLayout;
