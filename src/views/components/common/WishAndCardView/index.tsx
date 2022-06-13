import { Box, IconButton } from "@mui/material";
import { useStyles } from "./styled";
import { STYLES } from "../../../../styles/styles";
import { RootState, useAppDispatch } from "../../../../store";
import { toggleDrawer } from "../../../../store/slice/cartSlice";
import { useSelector } from "react-redux";
import { StyledBadge } from "../StyledComponent";

// icons
import {
	FavoriteBorderOutlinedIcon,
	ShoppingCartOutlinedIcon,
} from "../../../../assets/icon";

const WishAndCardView = () => {
	const classes = useStyles();

	const cart = useSelector((state: RootState) => state.cart);
	const wishlist = useSelector((state: RootState) => state.wishlist.wishlist);
	const dispatch = useAppDispatch();

	return (
		<Box classes={5} className={classes.root}>
			{/* cart */}
			<IconButton
				onClick={() => dispatch(toggleDrawer({ open: true, isCart: true }))}
				aria-label="cart"
				sx={{ ...STYLES.icon }}
				size="small"
			>
				<StyledBadge badgeContent={cart.cart.length} color="secondary">
					<ShoppingCartOutlinedIcon />
				</StyledBadge>
			</IconButton>
			{/* whishlist */}
			<IconButton
				onClick={() => dispatch(toggleDrawer({ open: true }))}
				aria-label="wish"
				sx={{ ...STYLES.icon }}
				size="small"
			>
				<StyledBadge badgeContent={wishlist.length} color="secondary">
					<FavoriteBorderOutlinedIcon />
				</StyledBadge>
			</IconButton>
		</Box>
	);
};

export default WishAndCardView;
