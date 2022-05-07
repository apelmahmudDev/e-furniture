import { Container, Typography, Box, Avatar, Button } from "@mui/material";
import FeaturedCard from "../common/FeaturedCard";
import { useStyles } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const TopCategories = () => {
	const classes = useStyles();
	return (
		<Box my={2}>
			<Container>
				<Typography variant="h5" mb={2}>
					Top categories
				</Typography>

				<Swiper
					slidesPerView={4}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					{[...Array(5)].map((item, idx) => (
						<SwiperSlide key={idx}>
							<Box className={classes.CardRoot}>
								<Box className={classes.CardMedia}>
									<Avatar
										src="https://proofmart.com/wp-content/uploads/2021/06/503-5-1.png"
										alt="image of categories"
									/>
									<Button size="small" variant="contained">
										View Shop
									</Button>
								</Box>
								<Box mt={2}>
									<Typography variant="body1">Mini LCW Chair</Typography>
									<Typography variant="body2">$54.00</Typography>
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
