import {
	Avatar,
	Box,
	Button,
	CardContent,
	Divider,
	IconButton,
} from "@mui/material";
import { RootState, useAppDispatch } from "../../../store";
import { AppCard } from "../common/StyledComponent";
import Header from "../common/Header";

// table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import {
	setShippingCart,
	setShippingSummary,
} from "../../../store/slice/shippingSlice";
import { ROUTING_TREE } from "../../../constants/siteUrls";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// icons
import {
	ArrowBackIcon,
	DeleteOutlined,
	ProductionQuantityLimitsOutlinedIcon,
} from "../../../assets/icon";
import NotFound from "../common/NotFound";
import { removeFromCart } from "../../../store/slice/cartSlice";

const productImgStyles = {
	height: 60,
	width: 60,
	borderRadius: 0,
	"& > img": { objectFit: "contain" },
};

const CartProduct = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const cart = useSelector((state: RootState) => state.cart);

	return (
		<AppCard>
			<CardContent>
				<Header headerText="Cart Products" />

				{/* cart empty message */}
				{!cart.cart.length && (
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							flexDirection: "column",
						}}
					>
						<NotFound
							message="No products in the cart."
							icon={<ProductionQuantityLimitsOutlinedIcon />}
						/>
						<Button
							onClick={() => navigate("/" + ROUTING_TREE.HOME)}
							sx={{ mt: 2 }}
							startIcon={<ArrowBackIcon />}
							variant="outlined"
						>
							Return To Shop
						</Button>
					</Box>
				)}

				{cart.cart.length > 0 && (
					<>
						<TableContainer>
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>Product</TableCell>
										<TableCell align="center">Price</TableCell>
										<TableCell align="center">Quantity(g)</TableCell>
										<TableCell align="center">Total</TableCell>
										<TableCell align="center">Actions</TableCell>
									</TableRow>
								</TableHead>

								<TableBody>
									{cart.cart.map((product, index) => (
										<TableRow
											sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
										>
											<TableCell component="th" scope="row">
												<Avatar
													sx={productImgStyles}
													src={product.image}
													alt="product"
												/>
											</TableCell>
											<TableCell align="center">
												<strong>৳ </strong> {product.price}
											</TableCell>
											<TableCell align="center">2</TableCell>
											<TableCell align="center">
												<strong>৳ </strong> {product.price}
											</TableCell>
											<TableCell align="center">
												<IconButton
													color="primary"
													onClick={() => dispatch(removeFromCart(product._id))}
												>
													<DeleteOutlined />
												</IconButton>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>

						{/* go to checkout */}
						<Divider sx={{ mb: 3 }} />
						<Box textAlign="right">
							<Button
								onClick={() => {
									dispatch(setShippingCart(cart.cart));
									dispatch(setShippingSummary(cart.checkoutSummary));
									navigate("/" + ROUTING_TREE.ORDER.SHIPPING);
								}}
								sx={{ my: 1, color: (theme) => theme.palette.secondary.light }}
								variant="contained"
							>
								Checkout
							</Button>
						</Box>
					</>
				)}
			</CardContent>
		</AppCard>
	);
};

export default CartProduct;
