import {
	Box,
	Grid,
	Avatar,
	Typography,
	Container,
	Button,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { useStyles } from "./styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import { IMAGES } from "../../../../constants/themeData";
import { Link } from "react-router-dom";
import { ROUTING_TREE } from "../../../../constants/siteUrls";

// heroData
const heroData = [
	{
		image: IMAGES.HeroSevenImg,
		title: "Dream Big with Our Large Beds",
		subtitle: "Luxury Furniture for You",
		description: `Unwind in the luxury of spacious comfort. Our large beds are crafted to deliver both elegance and ultimate relaxation, making every night feel like a retreat.`,
	},
	{
		image: IMAGES.HeroFiveImg,
		title: "Digital-Lavender Dream",
		subtitle: "New Arrival",
		description: `Step into the future of relaxation with our Digital-Lavender Pillow Chair. Combining ergonomic design and chic interior aesthetics, it’s the perfect blend of comfort and contemporary style.`,
	},
	{
		image: IMAGES.HeroSixImg,
		title: "Luxurious Sofas for Every Living Space",
		subtitle: "Elevate Your Home",
		description: `Indulge in the perfect blend of comfort and elegance with our premium sofas. Designed to elevate your living space, these stylish pieces offer plush seating and timeless appeal, creating a cozy retreat for relaxation and gatherings.`,
	},
	{
		image: IMAGES.HeroFourImg,
		title: "Laptop Desks for Modern Living",
		subtitle: "Upgrade Your Workspace",
		description: `Upgrade your workspace with our stylish laptop desks. Designed to balance function and elegance, these desks enhance your productivity while complementing your home’s aesthetic.`,
	},
];

const Hero = () => {
	const classes = useStyles();
	return (
		<Box
			component="section"
			sx={{ background: (theme) => theme.palette.secondary.main }}
		>
			<Container maxWidth="lg">
				<Swiper
					modules={[Pagination, Autoplay]}
					pagination={{
						clickable: true,
					}}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					spaceBetween={100}
					className={classes.mySwiper}
				>
					{heroData.map((item, idx) => (
						<SwiperSlide key={idx}>
							<Grid container spacing={3} alignItems="center">
								<Grid item xs={12} md={6} sx={{ position: "relative" }}>
									{/*  */}
									<div className={classes.propertyOne}></div>
									<div className={classes.propertyTwo}></div>
									<div className={classes.propertyThree}></div>
									{/*  */}
									<Typography
										gutterBottom
										variant="body1"
										sx={{
											fontFamily: "Titillium Web",
											display: "flex",
											alignItems: "center",
											gap: 1,
										}}
									>
										<StarIcon
											fontSize="small"
											sx={{
												color: (theme) => theme.palette.primary.main,
											}}
										/>
										{item.subtitle}
									</Typography>
									<Typography
										gutterBottom
										variant="h4"
										sx={{ fontFamily: "Titillium Web" }}
									>
										{item.title}
									</Typography>

									<Typography
										variant="body1"
										sx={{ display: { xs: "none", sm: "block" } }}
									>
										{item.description}
									</Typography>
									<Link to={"/" + ROUTING_TREE.SHOP}>
										<Button
											endIcon={<ArrowForwardIcon />}
											sx={{ mt: 2 }}
											variant="outlined"
										>
											Shop Collection
										</Button>
									</Link>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}
									sx={{ display: "flex", justifyContent: "center" }}
								>
									<Avatar
										className={classes.heroAvatar}
										src={item.image}
										alt="image of hero"
									/>
								</Grid>
							</Grid>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</Box>
	);
};

export default Hero;
