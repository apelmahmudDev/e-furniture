import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useStyles } from "./styled";
import { Avatar, Box, Container, Grid } from "@mui/material";
import Portion from "../../common/Portion";
import { IMAGES } from "../../../../constants/themeData";

const serviceData = [
	{
		icon: IMAGES.FastDeliveryIcon,
		title: "Fast Delivery",
		description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic impedit inventore enim.`,
	},
	{
		icon: IMAGES.ChatIcon,
		title: "24 / 7 Support",
		description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic impedit inventore enim.`,
	},
	{
		icon: IMAGES.CashBackIcon,
		title: "Cash back",
		description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic impedit inventore enim.`,
	},
	{
		icon: IMAGES.GiftIcon,
		title: "Best Offer",
		description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic impedit inventore enim.`,
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
