import { Container, Typography, Box, Avatar, Button } from "@mui/material";
import { useStyles } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Portion from "../../common/Portion";
import { STYLES } from "../../../../styles/styles";

const TopCategories = () => {
	const classes = useStyles();
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
					{[...Array(5)].map((item, idx) => (
						<SwiperSlide key={idx}>
							<Box className={classes.CardRoot} sx={{ maxWidth: 280 }}>
								<Box
									className={classes.CardMediaWrap}
									sx={{ ...STYLES.boxShadow1 }}
								>
									<Box className={classes.CardMedia}>
										<Avatar
											src="https://proofmart.com/wp-content/uploads/2021/06/503-5-1.png"
											alt="image of categories"
										/>
										<Button size="small" variant="contained">
											View Shop
										</Button>
									</Box>
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
