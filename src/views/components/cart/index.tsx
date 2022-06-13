import Summary from "../common/Summary";
import { Box, Container, Grid } from "@mui/material";
import CartProduct from "./CartProduct";
const CartContainer = () => {
	return (
		<Box my={5}>
			<Container>
				<Grid container spacing={3}>
					{/* cart porduct */}
					<Grid item xs={12} md={8} sx={{ order: { xs: 2, md: 1 } }}>
						<CartProduct />
					</Grid>
					{/* checkout summery */}
					<Grid item xs={12} md={4} sx={{ order: { xs: 1, md: 2 } }}>
						<Summary />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default CartContainer;
