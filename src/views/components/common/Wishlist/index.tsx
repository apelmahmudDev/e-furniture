import NotFound from "../NotFound";
import HeartBrokenOutlinedIcon from "@mui/icons-material/HeartBrokenOutlined";
import { Box, Button, Avatar, Typography, IconButton } from "@mui/material";
import { IMAGES } from "../../../../constants/themeData";
import { useStyles } from "./styled";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const Wishlist = () => {
	const classes = useStyles();

	return (
		<Box>
			{/* not found */}
			{false && (
				<Box my={4} textAlign="center">
					<NotFound
						message="No products in the wishlist."
						icon={<HeartBrokenOutlinedIcon />}
					/>
				</Box>
			)}
			{/* wishlist product*/}
			<Box>
				{[...Array(3)].map((item, idx) => (
					<Box key={idx} className={classes.wishlist}>
						<Avatar src={IMAGES.HeroOneImg} alt="product" />
						<Box>
							<Typography variant="subtitle1">CH24 Wishbone Chair</Typography>
							<Typography color="primary" variant="subtitle2">
								$452.00 <span className={classes.date}>Date: 21 jun 2021</span>
							</Typography>
						</Box>
						<IconButton size="small">
							<AddShoppingCartOutlinedIcon fontSize="small" />
						</IconButton>
					</Box>
				))}
				<Button sx={{ my: 1 }} fullWidth variant="outlined">
					View Cart
				</Button>
			</Box>
		</Box>
	);
};

export default Wishlist;
