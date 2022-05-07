import {
	Box,
	Typography,
	Container,
	Card,
	CardContent,
	CardMedia,
	IconButton,
} from "@mui/material";
import { useStyles } from "./styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const FeaturedCard = () => {
	const classes = useStyles();
	return (
		<Card sx={{ maxWidth: 345 }} className={classes.root}>
			<CardMedia
				component="img"
				height="200"
				image="https://k4j3j2s7.rocketcdn.me/furnob/wp-content/uploads/2022/01/banner-image-22.jpg"
				alt="image of product"
			/>
			<Box className={classes.cardActions}>
				<IconButton size="small">
					<ShoppingCartIcon fontSize="small" />
				</IconButton>
				<IconButton size="small">
					<FavoriteBorderIcon fontSize="small" />
				</IconButton>
			</Box>

			<CardContent sx={{ textAlign: "center" }}>
				<Typography variant="body1">Cantilever chair</Typography>
				<Typography variant="body1">Code: Y390Z</Typography>
				<Typography variant="body1">$42.00</Typography>
			</CardContent>
		</Card>
	);
};

export default FeaturedCard;
