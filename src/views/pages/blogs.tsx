import { Box, Container, Grid, Pagination } from "@mui/material";
import Blog from "../components/blogs/Blog/Blog";
import BlogsRelative from "../components/blogs/BlogsRelate/BlogsRelative";

const Blogs = () => {
	return (
		<Box my={5} component="section">
			<Container>
				<Grid container spacing={5}>
					<Grid item xs={12} sm={8}>
						{/* blog */}
						<Blog />
						<Blog />
						<Blog />

						<Box
							component="section"
							my={5}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Pagination count={5} variant="outlined" shape="rounded" />
						</Box>
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
