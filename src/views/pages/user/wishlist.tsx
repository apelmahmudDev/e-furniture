import { Box } from "@mui/material";
import WishlistTable from "../../components/user/WishlistTable";

const Wishlist = () => {
	return (
		<Box component="div">
			<Box my={2}>
				<WishlistTable />
			</Box>
		</Box>
	);
};

export default Wishlist;
