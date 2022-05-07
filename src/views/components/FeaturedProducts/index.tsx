import { Container, Typography, Box } from "@mui/material";
import FeaturedCard from "../common/FeaturedCard";
import { useStyles } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const FeaturedProducts = () => {
	const classes = useStyles();
	return (
		<Box my={2}>
			<Container>
				<Typography variant="h5" mb={2}>
					Featured Products
				</Typography>

				<Swiper
					slidesPerView={3}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					<SwiperSlide>
						<FeaturedCard />
					</SwiperSlide>
					<SwiperSlide>
						<FeaturedCard />
					</SwiperSlide>
					<SwiperSlide>
						<FeaturedCard />
					</SwiperSlide>
					<SwiperSlide>
						<FeaturedCard />
					</SwiperSlide>
					<SwiperSlide>
						<FeaturedCard />
					</SwiperSlide>
				</Swiper>
			</Container>
		</Box>
	);
};

export default FeaturedProducts;
