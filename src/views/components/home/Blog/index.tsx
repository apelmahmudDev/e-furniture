import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useStyles } from "./styled";
import { Box, Container, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Portion from "../../common/Portion";
import { STYLES } from "../../../../styles/styles";

const Blog = () => {
	const classes = useStyles();
	return (
		<Box my={5} component="section">
			<Container>
				<Portion firstWord="Latest" lastWord="Blog" mb={4} />

				<Grid container spacing={3}>
					{[...Array(3)].map((item, idx) => (
						<Grid key={idx} item xs={12} sm={6} md={4}>
							<Card sx={{ ...STYLES.boxShadow1 }}>
								<CardMedia
									component="img"
									alt="green iguana"
									height="180"
									image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLePbdPb2_ygv31Z0OaDfcc0v8vFt3wyGAQ&usqp=CAU"
								/>
								<CardContent sx={{ padding: "16px 16px 0 16px" }}>
									<Box sx={{ mb: 1, display: "flex", gap: 2 }}>
										<Box sx={{ display: "flex" }}>
											<EditIcon fontSize="small" />
											<Typography variant="body2" color="text.secondary">
												Ava lovelace
											</Typography>
										</Box>
										<Box sx={{ display: "flex" }}>
											<EventNoteIcon fontSize="small" />
											<Typography variant="body2" color="text.secondary">
												12 Jun, 2021
											</Typography>
										</Box>
									</Box>
									<Typography
										gutterBottom
										variant="h6"
										sx={{ fontWeight: "normal" }}
										component="div"
									>
										Lizard
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species, ranging across all continents except
										Antarctica
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small">Read More</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Blog;
