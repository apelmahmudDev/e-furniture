import {
	Box,
	Typography,
	Card,
	CardContent,
	CardMedia,
	IconButton,
} from "@mui/material";
import { useStyles } from "./styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { STYLES } from "../../../../styles/styles";
import { handleProductDetails } from "../../../../store/slice/productSlice";
import { useDispatch } from "react-redux";
import ZoomOutMapOutlinedIcon from "@mui/icons-material/ZoomOutMapOutlined";

const LatestCard = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	return (
		<Card className={classes.root}>
			<Box className={classes.cardMediaWrapper}>
				<CardMedia
					component="img"
					height="200"
					image="https://www.freeiconspng.com/thumbs/chair-png/classic-chair-png-3.png"
					alt="image of product"
				/>
				<Box className={classes.cardActions}>
					<IconButton size="small" sx={{ ...STYLES.icon }}>
						<ShoppingCartIcon fontSize="small" />
					</IconButton>
					<IconButton size="small" sx={{ ...STYLES.icon }}>
						<FavoriteBorderIcon fontSize="small" />
					</IconButton>
					<IconButton
						onClick={() => dispatch(handleProductDetails(true))}
						size="small"
						sx={{ ...STYLES.icon }}
					>
						<ZoomOutMapOutlinedIcon fontSize="small" />
					</IconButton>
				</Box>
			</Box>

			<CardContent>
				<Typography sx={{ textAlign: "left" }} variant="body1">
					Comfort Handy Craft
				</Typography>
				<Typography sx={{ textAlign: "right" }} variant="body1">
					$42.00 <span>$65.00</span>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default LatestCard;
