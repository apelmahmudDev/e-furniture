import NotFound from "../NotFound";
import { Box, Button, Avatar, Typography, IconButton } from "@mui/material";
import { useStyles } from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { format } from "date-fns";
import {
	AddShoppingCartOutlinedIcon,
	HeartBrokenOutlinedIcon,
} from "../../../../assets/icon";

const Wishlist = () => {
	const classes = useStyles();
	const wishlist = useSelector((state: RootState) => state.wishlist.wishlist);

	return (
		<Box>
			{/* no whish*/}
			{!wishlist.length && (
				<Box my={4} textAlign="center">
					<NotFound
						message="No products in the wishlist."
						icon={<HeartBrokenOutlinedIcon />}
					/>
				</Box>
			)}
			{/* wishlist product*/}
			<Box>
				{wishlist.map((product) => (
					<Box key={product._id} className={classes.wishlist}>
						<Avatar src={product.image} alt={product.name} />
						<Box>
							<Typography variant="subtitle1">{product.name}</Typography>
							<Typography color="primary" variant="subtitle2">
								${product.price}{" "}
								<span className={classes.date}>
									{product.createdAt
										? format(product.createdAt, "dd MMM, yyyy")
										: undefined}
								</span>
							</Typography>
						</Box>
						<IconButton size="small">
							<AddShoppingCartOutlinedIcon fontSize="small" />
						</IconButton>
					</Box>
				))}
				{wishlist.length > 0 && (
					<Button sx={{ my: 1 }} fullWidth variant="outlined">
						View Cart
					</Button>
				)}
			</Box>
		</Box>
	);
};

export default Wishlist;
