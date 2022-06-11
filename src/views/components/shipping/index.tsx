import Address from "./Address";
import Summary from "../common/Summary";
import PaymentMethod from "./PaymentMethod";
import { Box, Container, Grid } from "@mui/material";

const ShippingContainer = () => {
	return (
		<Box my={5}>
			<Container>
				<Grid container spacing={3}>
					{/* shipping address */}
					<Grid item xs={12} md={8} sx={{ order: { xs: 2, md: 1 } }}>
						<Box
							component="form"
							sx={{
								"& .MuiTextField-root, & .MuiFormControl-root": { my: 1 },
							}}
							autoComplete="off"
						>
							<Address />
							<PaymentMethod />
						</Box>
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

export default ShippingContainer;
