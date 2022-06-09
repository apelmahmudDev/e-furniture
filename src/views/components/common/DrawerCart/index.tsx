import NotFound from "../NotFound";
import { Box, Button, Avatar, Typography, IconButton } from "@mui/material";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import DeleteIcon from "@mui/icons-material/Close";
import { useStyles } from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

const DrawerCart = () => {
	const classes = useStyles();
	const cart = useSelector((state: RootState) => state.cart);

	return (
		<>
			{/* not found */}
			{false && (
				<Box my={4} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
					<NotFound
						message="No products in the cart."
						icon={<ProductionQuantityLimitsOutlinedIcon />}
					/>
					<Button
						startIcon={<ArrowBackOutlinedIcon />}
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
					<Box key={product.id} className={classes.cartProduct}>
						<Avatar src={product.image} alt="product" />
						<Box>
							<Typography variant="subtitle1">{product.name}</Typography>
							<Typography color="primary" variant="subtitle2">
								4 x $452.00
							</Typography>
						</Box>
						<IconButton size="small">
							<DeleteIcon fontSize="small" />
						</IconButton>
					</Box>
				))}

				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Typography
						sx={{ flexGrow: 1, fontFamily: "Titillium Web", fontWeight: 600 }}
					>
						Subtotal:
					</Typography>
					<Typography variant="h6" sx={{ fontWeight: 600 }}>
						$345.000
					</Typography>
				</Box>

				<Box>
					<Button sx={{ my: 1 }} fullWidth variant="outlined">
						View Cart
					</Button>
					<Button sx={{ my: 1 }} fullWidth variant="contained">
						Checkout
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default DrawerCart;
