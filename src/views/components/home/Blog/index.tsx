import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Portion from "../../common/Portion";
import { STYLES } from "../../../../styles/styles";
import { blogs } from "../../../pages/blogs";
import { Link } from "react-router-dom";

const Blog = () => {
	return (
		<Box my={5} component="section">
			<Container>
				<Portion firstWord="Latest" lastWord="Blog" mb={4} />

				<Grid container spacing={3}>
					{blogs.map((item, idx) => (
						<Grid key={idx} item xs={12} sm={6} md={4}>
							<Card sx={{ ...STYLES.boxShadow1 }}>
								<CardMedia
									component="img"
									alt={item.title}
									height="180"
									image={item.image}
								/>
								<CardContent sx={{ padding: "16px 16px 0 16px" }}>
									<Box sx={{ mb: 1, display: "flex", gap: 2 }}>
										<Box sx={{ display: "flex" }}>
											<EditIcon fontSize="small" />
											<Typography variant="body2" color="text.secondary">
												{item.author}
											</Typography>
										</Box>
										<Box sx={{ display: "flex" }}>
											<EventNoteIcon fontSize="small" />
											<Typography variant="body2" color="text.secondary">
												{item.date}
											</Typography>
										</Box>
									</Box>
									<Typography
										gutterBottom
										variant="h6"
										sx={{ fontWeight: "normal" }}
										component="div"
									>
										{item.title.slice(0, 70)}...
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{item.description.slice(0, 200)}...
									</Typography>
								</CardContent>
								<CardActions>
									<Link to="/blogs">
										<Button size="small">Read More</Button>
									</Link>
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
