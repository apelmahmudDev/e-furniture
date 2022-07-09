import { Container, Typography, Box, Stack } from "@mui/material";
import { useStyles } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Portion from "../../common/Portion";
import { Card, CardContent, CardMedia, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { STYLES } from "../../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { handleProductDetails } from "../../../../store/slice/productSlice";
import ZoomOutMapOutlinedIcon from "@mui/icons-material/ZoomOutMapOutlined";
import { useGetFilteredProductsQuery } from "../../../../store/api/api.product";
import { addToCart } from "../../../../store/slice/cartSlice";
import { addToWishlist } from "../../../../store/slice/wishlistSlice";
import Spinner from "../../common/Spinner";
import ServerError from "../../common/ServerError";
import { FavoriteIcon } from "../../../../assets/icon";
import { RootState } from "../../../../store";

const FeaturedProducts = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const whishlist = useSelector((state: RootState) => state.wishlist.wishlist);

	// get filtered products
	const { data, error, isLoading } = useGetFilteredProductsQuery({
		category: "featured",
	});

	return (
		<Box py={5} component="section">
			<Container>
				<Portion firstWord="Featured" lastWord="Products" mb={4} />

				{/* data loading message show */}
				{isLoading && (
					<Box textAlign="center">
						<Spinner />
					</Box>
				)}

				{/* if server side error */}
				{error && <ServerError />}

				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 50,
						},
					}}
					className={classes.mySwiper}
				>
					{data?.data.map((product, idx) => (
						<SwiperSlide key={idx}>
							<Card sx={{ maxWidth: 280 }} className={classes.root}>
								<Box sx={{ bgcolor: (theme) => theme.palette.secondary.light }}>
									<CardMedia
										component="img"
										height="200"
										image={product.image}
										alt="image of product"
									/>
									<Box className={classes.cardActions}>
										<Stack direction="row" spacing={1}>
											<IconButton
												onClick={() => dispatch(addToCart(product))}
												size="small"
												sx={{
													...STYLES.icon,
												}}
											>
												<ShoppingCartIcon fontSize="small" />
											</IconButton>
											<IconButton
												onClick={() => dispatch(addToWishlist(product))}
												size="small"
												sx={{
													...STYLES.icon,
												}}
											>
												{whishlist.some((pd) => pd._id === product._id) ? (
													<FavoriteIcon fontSize="small" />
												) : (
													<FavoriteBorderIcon fontSize="small" />
												)}
											</IconButton>
											<IconButton
												onClick={() => dispatch(handleProductDetails(true))}
												size="small"
												sx={{ ...STYLES.icon }}
											>
												<ZoomOutMapOutlinedIcon fontSize="small" />
											</IconButton>
										</Stack>
									</Box>
								</Box>

								<CardContent sx={{ textAlign: "center" }}>
									<Typography component="div">
										<Box sx={{ lineHeight: 1.3 }}>{product.name}</Box>
										<Box sx={{ lineHeight: 1.3 }}>Code: Y390Z</Box>
										<Box sx={{ lineHeight: 1.3 }}>
											<strong>৳ </strong>
											{product.price}
										</Box>
									</Typography>
								</CardContent>
							</Card>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</Box>
	);
};

export default FeaturedProducts;
