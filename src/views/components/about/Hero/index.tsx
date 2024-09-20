import { useStyles } from "./styled";
import { IMAGES } from "../../../../constants/themeData";
import { Box, Grid, Typography, Container } from "@mui/material";

const Hero = () => {
	const classes = useStyles();
	return (
		<Box component="section">
			<Container maxWidth="lg">
				<Grid container spacing={3}>
					<Grid
						item
						xs={12}
						md={6}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						}}
					>
						<Typography
							variant="h3"
							sx={{ mt: { xs: 5, md: 0 }, fontWeight: 600 }}
						>
							<span>Designing Spaces</span> <br />{" "}
							<span>excellent quality</span>
						</Typography>
						<Typography sx={{ my: 2 }}>
							We are a team of talented designers making furniture that is
							unique and easy on your pocket. We have a passion for furniture
							design.
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<img
							className={classes.heroImg}
							// src={IMAGES.AboutHelloImg}
							src={IMAGES.furnisher}
							alt="greetings"
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Hero;
