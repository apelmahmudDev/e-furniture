import { useStyles } from "./styled";
import { Box, Grid, Typography, Container } from "@mui/material";

const Details = () => {
	const classes = useStyles();
	return (
		<Box component="section" className={classes.impressionArea} sx={{ py: 10 }}>
			<Container maxWidth="lg">
				<Grid container spacing={10}>
					<Grid item xs={12} md={6}>
						<Box display="flex" flexDirection="column" gap={3}>
							<div className={classes.impression}>
								<Typography variant="h5" gutterBottom>
									Crafted with Passion
								</Typography>
								<Typography>
									Every piece of furniture is thoughtfully designed with
									craftsmanship and creativity, blending form and function.
								</Typography>
							</div>
							<div
								style={{ marginLeft: "auto" }}
								className={classes.impression}
							>
								<Typography variant="h5" gutterBottom>
									Affordable Luxury
								</Typography>
								<Typography>
									We believe great design shouldn’t come at a high cost. Enjoy
									premium quality furniture at prices that fit your budget.
								</Typography>
							</div>
							<div className={classes.impression}>
								<Typography variant="h5" gutterBottom>
									Sustainable Style
								</Typography>
								<Typography>
									Our commitment to sustainability means using eco-friendly
									materials, ensuring that your furniture is as good for the
									planet as it is for your home.
								</Typography>
							</div>
						</Box>
					</Grid>

					<Grid item xs={12} md={6}>
						<Typography>- About Us</Typography>
						<Typography
							variant="h3"
							sx={{ mt: { xs: 5, md: 0 }, fontWeight: 600 }}
						>
							We are the best furniture store in the town
						</Typography>
						<Typography sx={{ mt: 5 }}>
							Discover premium-quality, stylish furniture that elevates your
							home without the high price tag. Experience why we’re the top
							choice for furniture in town, and let our expert team help you
							find the perfect pieces to express your unique style!
						</Typography>
						<Box mt={5} display="flex" justifyContent="space-between" gap="3">
							<div>
								<Typography sx={{ fontWeight: "600" }} variant="h5">
									2342+
								</Typography>
								<Typography>Happy Customers</Typography>
							</div>
							<div>
								<Typography sx={{ fontWeight: "600" }} variant="h5">
									12+
								</Typography>
								<Typography>Years of Experience</Typography>
							</div>
							<div>
								<Typography sx={{ fontWeight: "600" }} variant="h5">
									100%
								</Typography>
								<Typography>Satisfaction</Typography>
							</div>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Details;
