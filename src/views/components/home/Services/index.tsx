import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useStyles } from "./styled";
import { Avatar, Box, Container, Grid, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EventNoteIcon from "@mui/icons-material/EventNote";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import CallIcon from "@mui/icons-material/Call";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Portion from "../../common/Portion";

const Services = () => {
	const classes = useStyles();
	return (
		<Box my={5} component="section">
			<Container>
				<Portion mb={4} firstWord="Our" lastWord="Services" />

				<Grid container spacing={3}>
					{[...Array(4)].map((item, idx) => (
						<Grid key={idx} item xs={12} sm={6} md={3}>
							<Card className={classes.root}>
								<Avatar>
									<MarkChatUnreadIcon />
								</Avatar>
								<CardContent>
									<Typography
										gutterBottom
										variant="h6"
										sx={{ fontWeight: "normal" }}
										component="div"
									>
										24/7 Support
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species,
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
