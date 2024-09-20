import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useStyles } from "./styled";
import { Avatar, Box, Container, Grid } from "@mui/material";
import Portion from "../Portion";
import { IMAGES } from "../../../../constants/themeData";

const serviceData = [
	{
		icon: IMAGES.FastDeliveryIcon,
		title: "Fast Delivery",
		// write a real description for the service not lorem
		description:
			"We are providing fast delivery service to our customers and committed to deliver your product within 24 hours.",
	},
	{
		icon: IMAGES.ChatIcon,
		title: "24 / 7 Support",
		description:
			"We are providing 24/7 support to our customers. You can contact us anytime for any query.",
	},
	{
		icon: IMAGES.CashBackIcon,
		title: "Cash back",
		description:
			"If you are not satisfied with our product, we will give you cash back. within 7 days.",
	},
	{
		icon: IMAGES.GiftIcon,
		title: "Best Offer",
		description:
			"We are providing best offer to our customers. Keep visiting our website to get the best offer.",
	},
];

const Services = () => {
	const classes = useStyles();
	return (
		<Box my={5} component="section">
			<Container>
				<Portion mb={4} firstWord="Our" lastWord="Services" />

				<Grid container spacing={3}>
					{serviceData.map((item, idx) => (
						<Grid key={idx} item xs={12} sm={6} md={3}>
							<Card className={classes.root}>
								<Avatar src={item.icon} alt="delivery" />
								<CardContent>
									<Typography
										gutterBottom
										variant="h6"
										sx={{ fontWeight: "normal" }}
										component="div"
									>
										{item.title}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{item.description}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Services;
