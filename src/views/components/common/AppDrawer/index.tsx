import Drawer from "@mui/material/Drawer";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { toggleDrawer } from "../../../../store/slice/cartSlice";
import DrawerCart from "../DrawerCart";
import Wishlist from "../Wishlist";

const AppDrawer = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state: RootState) => state.cart);

	return (
		<Drawer
			anchor="right"
			open={cart.drawer_open}
			onClose={() => dispatch(toggleDrawer({ open: false }))}
		>
			<AppBar
				position="static"
				sx={{
					bgcolor: (theme) => theme.palette.secondary.main,
					boxShadow: 0,
				}}
			>
				<Toolbar
					sx={{
						pl: "16px !important",
						pr: "16px !important",
					}}
				>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						{cart.isCart ? "Shopping Cart" : "Wish list"}
					</Typography>
					<IconButton
						onClick={() => dispatch(toggleDrawer({ open: false }))}
						color="inherit"
						aria-label="menu"
						size="small"
					>
						<CloseIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Box p={2}>{cart.isCart ? <DrawerCart /> : <Wishlist />}</Box>
		</Drawer>
	);
};

export default AppDrawer;
