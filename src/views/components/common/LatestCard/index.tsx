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

const LatestCard = () => {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
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
				<Typography variant="body1">Comfort Handy Craft</Typography>
				<Typography variant="body1">
					$42.00 <span>$65.00</span>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default LatestCard;
