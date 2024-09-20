import { Box, Container, Grid, Pagination } from "@mui/material";
import Blog from "../components/blogs/Blog/Blog";
import BlogsRelative from "../components/blogs/BlogsRelate/BlogsRelative";
import { IMAGES } from "../../constants/themeData";

export const blogs = [
	{
		id: "001",
		title: "Regal Furniture Is a Bangladeshi Leader in Life at Home.",
		description:
			"Regal Furniture Is a Bangladeshi Leader in Life at Home. Create a Home with Regal That Is Perfect for You. Cash on Delivery. Free Home Delivery. Brands: Regal Furniture, 6 Months 0% EMI, Free Home Delivery.",
		author: "Apel Mahud",
		date: "Aug 28, 2022",
		image: IMAGES.blogOneImg,
	},
	{
		id: "002",
		title:
			"A chair is a type of seat, typically designed for one person and consisting of one or",
		description:
			"A chair is a type of seat, typically designed for one person and consisting of one or more legs, a flat seat and a back-rest. They may be made of wood, metal, or synthetic materials, and may be padded or upholstered in various colors and fabrics.",
		author: "Habibulla Al Madani",
		date: "Sep 01, 2022",
		image: IMAGES.blogTwoImg,
	},
	{
		id: "003",
		title:
			"Furniture refers to movable objects intended to support various human activities",
		description:
			"A chair is a type of seat, typically designed for one person and consisting of one or more legs, a flat seat and a back-rest. They may be made of wood, metal, or synthetic materials, and may be padded or upholstered in various colors and fabrics.",
		author: "Habibulla Al Madani",
		date: "Sep 01, 2022",
		image: IMAGES.HeroFiveImg,
	},
];

const Blogs = () => {
	return (
		<Box my={5} component="section">
			<Container>
				<Grid container spacing={5}>
					<Grid item xs={12} sm={8}>
						{/* blog */}
						{blogs.map((blog) => {
							const { id, title, description, date, author, image } = blog;
							return (
								<Blog
									key={id}
									title={title}
									description={description}
									image={image}
									date={date}
									author={author}
								/>
							);
						})}

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
