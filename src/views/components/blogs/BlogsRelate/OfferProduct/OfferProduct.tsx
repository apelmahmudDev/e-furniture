import { Box, Typography } from "@mui/material";

const OfferProduct = () => {
	return (
		<div>
			<Box
				sx={{
					mb: 1,
					// width: 95,
					// height: 65,
					"& > img": {
						width: "100%",
						height: "100%",
						display: "block",
						objectFit: "cover",
					},
				}}
			>
				<img
					src="https://images.unsplash.com/photo-1550226891-ef816aed4a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
					alt="offer product"
					loading="lazy"
				/>
			</Box>
			<Typography variant="body1">Sed placerat.</Typography>
			<Typography variant="body2" color="text.secondary">
				৳ 1200.00
			</Typography>
		</div>
	);
};

export default OfferProduct;
