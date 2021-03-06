import NotFound from "../NotFound";
import { Box, Button, Avatar, Typography, IconButton } from "@mui/material";
import { useStyles } from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import {
	AddShoppingCartOutlinedIcon,
	HeartBrokenOutlinedIcon,
} from "../../../../assets/icon";
import { ROUTING_TREE } from "../../../../constants/siteUrls";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
	const classes = useStyles();
	const navigate = useNavigate();
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
						<Box sx={{ display: "flex", align: "center", gap: 3 }}>
							<Avatar src={product.image} alt={product.name} />
							<Box>
								<Typography variant="subtitle1">{product.name}</Typography>
								<Typography color="primary" variant="subtitle2">
									${product.price}{" "}
									<span className={classes.date}>{product.createdAt}</span>
								</Typography>
							</Box>
						</Box>
						<IconButton size="small">
							<AddShoppingCartOutlinedIcon fontSize="small" />
						</IconButton>
					</Box>
				))}
				{wishlist.length > 0 && (
					<Button
						onClick={() =>
							navigate(
								`/${ROUTING_TREE.USER.USER}/${ROUTING_TREE.USER.WISHLIST}`
							)
						}
						sx={{ my: 1 }}
						fullWidth
						variant="outlined"
					>
						View Wishlist
					</Button>
				)}
			</Box>
		</Box>
	);
};

export default Wishlist;
