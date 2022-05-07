import { Container, Typography, Box, Grid } from "@mui/material";
import { useStyles } from "./styled";
import LatestCard from "../common/LatestCard";
import ProductNavigation from "../common/ProductNavigation";

const LatestProducts = () => {
	const classes = useStyles();
	return (
		<Box my={2}>
			<Container>
				<Typography variant="h5" mb={2}>
					Latest Products
				</Typography>
				<ProductNavigation />
				<Grid container spacing={3}>
					{[...Array(6)].map((item, idx) => (
						<Grid key={idx} item xs={12} md={3} lg={4}>
							<LatestCard />
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default LatestProducts;
