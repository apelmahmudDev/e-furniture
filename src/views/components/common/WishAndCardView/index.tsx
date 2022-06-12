import { Box, IconButton } from "@mui/material";
import { useStyles } from "./styled";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { STYLES } from "../../../../styles/styles";
import { RootState, useAppDispatch } from "../../../../store";
import { toggleDrawer } from "../../../../store/slice/cartSlice";
import { useSelector } from "react-redux";

// icons
import {
	FavoriteBorderOutlinedIcon,
	ShoppingCartOutlinedIcon,
} from "../../../../assets/icon";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
	"& .MuiBadge-badge": {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
	},
}));

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
