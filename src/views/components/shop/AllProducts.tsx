import { Box, Container, Grid } from "@mui/material";
import { useGetProductsQuery } from "../../../store/api/api.product";
import LatestCard from "../common/LatestCard";
import Spinner from "../common/Spinner";

const AllProducts = () => {
	const { data, isLoading } = useGetProductsQuery();
	return (
		<Box mt={5}>
			<Container>
				{isLoading ? (
					<Box textAlign="center">
						<Spinner />
					</Box>
				) : (
					<Grid container spacing={3}>
						{data?.data?.map((product, idx) => (
							<Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
								<LatestCard product={product} />
							</Grid>
						))}
					</Grid>
				)}
			</Container>
		</Box>
	);
};

export default AllProducts;
