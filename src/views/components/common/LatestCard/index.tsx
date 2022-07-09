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
import { useDispatch, useSelector } from "react-redux";
import ZoomOutMapOutlinedIcon from "@mui/icons-material/ZoomOutMapOutlined";
import { addToCart } from "../../../../store/slice/cartSlice";
import { addToWishlist } from "../../../../store/slice/wishlistSlice";
import { FavoriteIcon } from "../../../../assets/icon";
import { RootState } from "../../../../store";

interface ProductInterface {
	product: {
		_id: string;
		name: string;
		price: string | number;
		description: string;
		image: string;
		category: string;
		subCategory: string;
	};
}

const LatestCard = ({ product }: ProductInterface) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const whishlist = useSelector((state: RootState) => state.wishlist.wishlist);

	return (
		<Card className={classes.root}>
			<Box className={classes.cardMediaWrapper}>
				<CardMedia
					component="img"
					height="200"
					image={product.image}
					alt="product.name"
				/>
				<Box className={classes.cardActions}>
					<IconButton
						onClick={() => dispatch(addToCart(product))}
						size="small"
						sx={{ ...STYLES.icon }}
					>
						<ShoppingCartIcon fontSize="small" />
					</IconButton>
					<IconButton
						onClick={() => dispatch(addToWishlist(product))}
						size="small"
						sx={{ ...STYLES.icon }}
					>
						{whishlist.some((pd) => pd._id === product._id) ? (
							<FavoriteIcon fontSize="small" />
						) : (
							<FavoriteBorderIcon fontSize="small" />
						)}
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
					{product.name}
				</Typography>
				<Typography sx={{ textAlign: "right" }} variant="body1">
					<strong>৳</strong>
					{product.price} <span>৳65.00</span>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default LatestCard;
