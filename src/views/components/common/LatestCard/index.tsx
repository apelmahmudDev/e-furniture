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
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5TgTtMlAlU2AYy4MklhZO_kF02ieWvKeqA&usqp=CAU"
				// image="https://www.picng.com/upload/sofa/png_sofa_49167.png"
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
