import NotFound from "../NotFound";
import { Box } from "@mui/material";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";

const DrawerCart = () => {
	return (
		<Box>
			{/* not found */}
			<Box my={4} textAlign="center">
				<NotFound
					message="No products in the cart."
					icon={<ProductionQuantityLimitsOutlinedIcon />}
				/>
			</Box>
		</Box>
	);
};

export default DrawerCart;
