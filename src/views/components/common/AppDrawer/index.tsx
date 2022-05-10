import Drawer from "@mui/material/Drawer";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { toggleDrawer } from "../../../../store/slice/cartSlice";

const AppDrawer = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state: RootState) => state.cart);

	return (
		<Drawer
			anchor="right"
			open={cart.drawer_open}
			onClose={() => dispatch(toggleDrawer({ open: false }))}
		>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						{cart.isCart ? "Shopping Cart" : "Wish list"}
					</Typography>
					<IconButton
						onClick={() => dispatch(toggleDrawer({ open: false }))}
						color="inherit"
						aria-label="menu"
					>
						<CloseIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			{/* <Box></Box> */}
		</Drawer>
	);
};

export default AppDrawer;
