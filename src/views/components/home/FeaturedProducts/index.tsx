import { Container, Typography, Box, Stack } from "@mui/material";
import { useStyles } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Portion from "../../common/Portion";
import { Card, CardContent, CardMedia, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { STYLES } from "../../../../styles/styles";
import { useDispatch } from "react-redux";
import { handleProductDetails } from "../../../../store/slice/productSlice";

const FeaturedProducts = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	return (
		<Box py={5} component="section">
			<Container>
				<Portion firstWord="Featured" lastWord="Products" mb={4} />

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
					{[...Array(5)].map((item, idx) => (
						<SwiperSlide key={idx}>
							<Card
								sx={{ maxWidth: 280 }}
								className={classes.root}
								onClick={() => dispatch(handleProductDetails(true))}
							>
								<Box sx={{ bgcolor: (theme) => theme.palette.secondary.light }}>
									<CardMedia
										component="img"
										height="200"
										image="https://www.pngplay.com/wp-content/uploads/2/Modern-Chair-PNG-HD-Quality.png"
										alt="image of product"
									/>
									<Box className={classes.cardActions}>
										<Stack direction="row" spacing={1}>
											<IconButton
												size="small"
												sx={{
													...STYLES.icon,
												}}
											>
												<ShoppingCartIcon fontSize="small" />
											</IconButton>
											<IconButton
												size="small"
												sx={{
													...STYLES.icon,
												}}
											>
												<FavoriteBorderIcon fontSize="small" />
											</IconButton>
										</Stack>
									</Box>
								</Box>

								<CardContent sx={{ textAlign: "center" }}>
									<Typography component="div">
										<Box sx={{ lineHeight: 1.3 }}>Cantilever chair</Box>
										<Box sx={{ lineHeight: 1.3 }}>Code: Y390Z</Box>
										<Box sx={{ lineHeight: 1.3 }}>$42.00</Box>
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
