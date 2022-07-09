import { Container, Typography, Box, Avatar, Button } from "@mui/material";
import { useStyles } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Portion from "../../common/Portion";
import { STYLES } from "../../../../styles/styles";
import { IMAGES } from "../../../../constants/themeData";
import { ROUTING_TREE } from "../../../../constants/siteUrls";
import { useNavigate } from "react-router-dom";

const categoriesData = [
	{
		name: "Grid 99 chair (No backpain)",
		price: 8900,
		image: IMAGES.DocgChairImg,
	},
	{
		name: "Confrotable & remove backpain",
		price: 10000,
		image: IMAGES.ChairTwoImg,
	},
	{
		name: "Simplified yellow chair",
		price: 15000,
		image: IMAGES.MinimalistChairImg,
	},
	{ name: "Box chair", price: 20000, image: IMAGES.ModerChairImg },
	{ name: "Black & kallu chair", price: 4500, image: IMAGES.ChairOneImg },
];

const TopCategories = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	return (
		<Box my={5} component="section">
			<Container>
				<Portion firstWord="Top" lastWord="categories" mb={4} />

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
					{categoriesData.map((pd, idx) => (
						<SwiperSlide key={idx}>
							<Box className={classes.CardRoot} sx={{ maxWidth: 280 }}>
								<Box
									className={classes.CardMediaWrap}
									sx={{ ...STYLES.boxShadow1 }}
								>
									<Box className={classes.CardMedia}>
										<Avatar src={pd.image} alt="image of categories" />
										<Button
											onClick={() => navigate("/" + ROUTING_TREE.SHOP)}
											size="small"
											variant="contained"
										>
											View Shop
										</Button>
									</Box>
								</Box>
								<Box mt={2}>
									<Typography variant="body1">{pd.name}</Typography>
									<Typography variant="body2">
										<strong>৳ </strong>
										{pd.price}
									</Typography>
								</Box>
							</Box>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</Box>
	);
};

export default TopCategories;
