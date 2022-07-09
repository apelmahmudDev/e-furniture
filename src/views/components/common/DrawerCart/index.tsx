import { useStyles } from "./styled";
import NotFound from "../NotFound";
import { Box, Button, Avatar, Typography, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../store";
import {
	removeFromCart,
	toggleDrawer,
} from "../../../../store/slice/cartSlice";
import { ROUTING_TREE } from "../../../../constants/siteUrls";
import { useNavigate } from "react-router-dom";
import {
	setShippingCart,
	setShippingSummary,
} from "../../../../store/slice/shippingSlice";

// icons
import {
	ProductionQuantityLimitsOutlinedIcon,
	CloseIcon,
	ArrowBackIcon,
} from "../../../../assets/icon";

const styles = {
	flexCenterRow: {
		display: "flex",
		alignItems: "center",
	},
	flexColumn: {
		display: "flex",
		flexDirection: "column",
		gap: 1,
	},
};

const DrawerCart = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const cart = useSelector((state: RootState) => state.cart);

	return (
		<>
			{/* not found */}
			{!cart.cart.length && (
				<Box my={4} sx={{ ...styles.flexColumn }}>
					<NotFound
						message="No products in the cart."
						icon={<ProductionQuantityLimitsOutlinedIcon />}
					/>
					<Button
						onClick={() => dispatch(toggleDrawer({ open: false }))}
						startIcon={<ArrowBackIcon />}
						sx={{ width: "50%", m: "0 auto" }}
						variant="outlined"
					>
						Return To Shop
					</Button>
				</Box>
			)}

			{/* cart product */}
			<Box>
				{/* render cart item */}
				{cart.cart.map((product) => (
					<Box key={product._id} className={classes.cartProduct}>
						<Box sx={{ ...styles.flexCenterRow, gap: 3 }}>
							<Avatar src={product.image} alt="product" />
							<Box>
								<Typography variant="subtitle1">{product.name}</Typography>
								<Typography color="primary" variant="subtitle2">
									1 x {product.price}
								</Typography>
							</Box>
						</Box>
						<IconButton
							onClick={() => dispatch(removeFromCart(product._id))}
							size="small"
						>
							<CloseIcon fontSize="small" />
						</IconButton>
					</Box>
				))}

				{cart.cart.length > 0 && (
					<>
						<Box sx={{ ...styles.flexCenterRow }}>
							<Typography
								sx={{
									flexGrow: 1,
									fontFamily: "Titillium Web",
									fontWeight: 600,
								}}
							>
								Subtotal:
							</Typography>
							<Typography variant="h6" sx={{ fontWeight: 600 }}>
								${cart.subTotal}
							</Typography>
						</Box>

						<Box>
							<Button
								onClick={() => navigate("/" + ROUTING_TREE.CART)}
								sx={{ my: 1 }}
								fullWidth
								variant="outlined"
							>
								View Cart
							</Button>
							<Button
								onClick={() => {
									dispatch(setShippingCart(cart.cart));
									dispatch(setShippingSummary(cart.checkoutSummary));
									navigate("/" + ROUTING_TREE.ORDER.SHIPPING);
								}}
								sx={{ my: 1 }}
								fullWidth
								variant="contained"
							>
								Checkout
							</Button>
						</Box>
					</>
				)}
			</Box>
		</>
	);
};

export default DrawerCart;
