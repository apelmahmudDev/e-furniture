import { Box, Container, Grid } from "@mui/material";
import Blog from "../components/blogs/Blog/Blog";
import BlogsRelative from "../components/blogs/BlogsRelate/BlogsRelative";

const Blogs = () => {
	return (
		<Box my={10} component="section">
			<Container>
				<Grid container spacing={5}>
					<Grid item xs={12} sm={8}>
						{/* blog */}
						<Blog />
					</Grid>
					<Grid item xs={12} sm={4}>
						{/* blogs related activities */}
						<BlogsRelative />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Blogs;
