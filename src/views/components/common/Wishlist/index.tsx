import NotFound from "../NotFound";
import { Box } from "@mui/material";
import HeartBrokenOutlinedIcon from "@mui/icons-material/HeartBrokenOutlined";

const Wishlist = () => {
	return (
		<Box>
			{/* not found */}
			<Box my={4} textAlign="center">
				<NotFound
					message="No products in the wishlist."
					icon={<HeartBrokenOutlinedIcon />}
				/>
			</Box>
		</Box>
	);
};

export default Wishlist;
