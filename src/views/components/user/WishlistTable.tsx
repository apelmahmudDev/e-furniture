import { Avatar, Box, CardContent, Stack } from "@mui/material";

// table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AppCard, AppIconButton } from "../common/StyledComponent";
import Header from "../common/Header";
import NotFound from "../common/NotFound";

// icons
import {
	AddShoppingCartOutlinedIcon,
	CloseIcon,
	ProductionQuantityLimitsOutlinedIcon,
} from "../../../assets/icon";
import { RootState, useAppDispatch } from "../../../store";
import { useSelector } from "react-redux";
import { removeWishlist } from "../../../store/slice/wishlistSlice";
import { addToCart } from "../../../store/slice/cartSlice";

const productImgStyles = {
	height: 60,
	width: 60,
	borderRadius: 0,
	"& > img": { objectFit: "contain" },
};

const WishlistTable = () => {
	const dispatch = useAppDispatch();
	const wishlist = useSelector((state: RootState) => state.wishlist);

	// after add product to cart , then remove that from wishlist
	const addProductToCart = (product: any) => {
		dispatch(addToCart(product));
		dispatch(removeWishlist(product));
	};

	return (
		<AppCard>
			<CardContent>
				<Header headerText="Your Wishlist" />

				{/* orders empty message */}
				{!wishlist.wishlist.length && (
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							flexDirection: "column",
						}}
					>
						<NotFound
							message="You have no product in wishlist"
							icon={<ProductionQuantityLimitsOutlinedIcon />}
						/>
					</Box>
				)}

				{/* show when you have any orders */}
				{wishlist.wishlist.length > 0 && (
					<>
						<TableContainer>
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>Product</TableCell>
										<TableCell align="center">Name</TableCell>
										<TableCell align="center">Price</TableCell>
										<TableCell align="center">Date</TableCell>
										<TableCell align="center">Actions</TableCell>
									</TableRow>
								</TableHead>

								<TableBody>
									{wishlist.wishlist.map((pd) => (
										<TableRow
											key={pd._id}
											sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
										>
											<TableCell component="th" scope="row">
												<Avatar
													sx={productImgStyles}
													src={pd.image}
													alt={pd.name}
												/>
											</TableCell>
											<TableCell align="center">Blue sofa box style</TableCell>
											<TableCell align="center">
												<strong>৳ </strong> {pd.price}
											</TableCell>
											<TableCell align="center">{pd.createdAt}</TableCell>
											<TableCell align="center">
												<Stack
													spacing={1}
													direction="row"
													justifyContent="center"
												>
													<AppIconButton onClick={() => addProductToCart(pd)}>
														<AddShoppingCartOutlinedIcon fontSize="small" />
													</AppIconButton>
													<AppIconButton
														onClick={() => dispatch(removeWishlist(pd))}
													>
														<CloseIcon />
													</AppIconButton>
												</Stack>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</>
				)}
			</CardContent>
		</AppCard>
	);
};

export default WishlistTable;
