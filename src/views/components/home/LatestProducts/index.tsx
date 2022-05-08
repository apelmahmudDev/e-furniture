import { Container, Typography, Box, Grid } from "@mui/material";
import { useStyles } from "./styled";
import ProductNavigation from "./ProductNavigation";
import LatestCard from "../../common/LatestCard";
import Portion from "../../common/Portion";

const LatestProducts = () => {
	const classes = useStyles();
	return (
		<Box my={5} component="section">
			<Container>
				<Portion firstWord="Latest" lastWord="Products" />
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
