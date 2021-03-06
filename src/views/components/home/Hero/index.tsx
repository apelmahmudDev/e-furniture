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
		image: IMAGES.HeroOneImg,
		title: "Brown realistic sofa with decorative cushions",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Veniam assumenda consequatur esse nisi dolorem repellendus,
		autem inventore eius qui eaque molestiae tempore
		perspiciatis ipsum corrupti tenetur excepturi voluptate ut
		illo.`,
	},
	{
		image: IMAGES.HeroTwoImg,
		title: "Two-seater gray sofa with two cushions",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veniam assumenda consequatur esse nisi dolorem repellendus,
					autem inventore eius qui eaque molestiae tempore
					perspiciatis ipsum corrupti tenetur excepturi voluptate ut
					illo.`,
	},
	{
		image: IMAGES.HeroThreeImg,
		title: "Chair and pillow",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veniam assumenda consequatur esse nisi dolorem repellendus,
					autem inventore eius qui eaque molestiae tempore
					perspiciatis ipsum corrupti tenetur excepturi voluptate ut
					illo.`,
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
					className={classes.mySwiper}
				>
					{heroData.map((item, idx) => (
						<SwiperSlide key={idx}>
							<Grid container spacing={3} alignItems="center">
								<Grid item xs={12} md={6}>
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
										Best Furniture For You
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
								<Grid item xs={12} md={6}>
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
