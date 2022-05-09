import { Box, IconButton } from "@mui/material";
import { useStyles } from "./styled";
import Badge, { BadgeProps } from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { styled } from "@mui/material/styles";
import { STYLES } from "../../../../styles/styles";

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

	return (
		<Box classes={5} className={classes.root}>
			<IconButton aria-label="cart" sx={{ ...STYLES.icon }} size="small">
				<StyledBadge badgeContent={4} color="secondary">
					<ShoppingCartOutlinedIcon />
				</StyledBadge>
			</IconButton>
			<IconButton aria-label="wish" sx={{ ...STYLES.icon }} size="small">
				<StyledBadge badgeContent={1} color="secondary">
					<FavoriteBorderOutlinedIcon />
				</StyledBadge>
			</IconButton>
		</Box>
	);
};

export default WishAndCardView;
