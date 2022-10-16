import { Avatar, Box, Button, Typography } from "@mui/material";
import { CalendarTodayIcon, EditIcon } from "../../../../assets/icon";
import { useStyles } from "./styled";

// types
interface BlogProps {
	title: string;
	description: string;
	author: string;
	date: string;
	image: string;
}

const Blog = ({ title, description, author, date, image }: BlogProps) => {
	const classes = useStyles();

	return (
		<Box my={5}>
			{/* image */}
			<Box
				className={classes.gradientBg}
				sx={{
					"& > img": {
						width: "100%",
						height: "auto",
						display: "block",
						objectFit: "cover",
					},
					borderRadius: 1,
					overflow: "hidden",
				}}
			>
				<img src={image} alt={"title"} loading="lazy" />
			</Box>

			{/* date & author */}
			<Box sx={{ my: 2.5, display: "flex", align: "center", gap: 1.25 }}>
				<Box sx={{ display: "flex", align: "center", gap: 1.25 }}>
					<Avatar sx={{ width: 25, height: 25 }}>
						<EditIcon sx={{ fontSize: 16 }} />
					</Avatar>
					<Typography>{author}</Typography>
				</Box>
				<Box sx={{ display: "flex", align: "center", gap: 1.25 }}>
					<Avatar sx={{ width: 25, height: 25 }}>
						<CalendarTodayIcon sx={{ fontSize: 16 }} />
					</Avatar>
					<Typography>{date}</Typography>
				</Box>
			</Box>

			{/* description */}
			<Box>
				<Typography sx={{ mb: 1, fontWeight: "medium" }} variant="h5">
					{title}
				</Typography>
				<Typography color="text.secondary">{description}</Typography>

				<Button sx={{ mt: 1, px: 0 }}>Read More *</Button>
			</Box>
		</Box>
	);
};

export default Blog;
