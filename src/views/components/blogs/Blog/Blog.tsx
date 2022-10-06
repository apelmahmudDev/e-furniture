import { Avatar, Box, Button, Typography } from "@mui/material";
import { CalendarTodayIcon, EditIcon } from "../../../../assets/icon";
import { useStyles } from "./styled";

const Blog = () => {
	const classes = useStyles();
	return (
		<div>
			{/* image */}
			<Box
				className={classes.gradientBg}
				sx={{
					"& > img": {
						width: "100%",
						height: 450,
						display: "block",
						objectFit: "cover",
					},
					borderRadius: 1,
					overflow: "hidden",
				}}
			>
				<img
					src={`https://www.isho.com/storage/media/4gZoB3RMuCZrLhqc8PdLb22IAPb84fcvZ1eFrRen.jpeg`}
					alt={"furniture name"}
					loading="lazy"
				/>
			</Box>

			{/* date & author */}
			<Box sx={{ my: 2.5, display: "flex", align: "center", gap: 1.25 }}>
				<Box sx={{ display: "flex", align: "center", gap: 1.25 }}>
					<Avatar sx={{ width: 25, height: 25 }}>
						<EditIcon sx={{ fontSize: 16 }} />
					</Avatar>
					<Typography>Apel Mahmud</Typography>
				</Box>
				<Box sx={{ display: "flex", align: "center", gap: 1.25 }}>
					<Avatar sx={{ width: 25, height: 25 }}>
						<CalendarTodayIcon sx={{ fontSize: 16 }} />
					</Avatar>
					<Typography>Aug 08 2019</Typography>
				</Box>
			</Box>

			{/* description */}
			<Box>
				<Typography sx={{ mb: 1, fontWeight: "medium" }} variant="h5">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				</Typography>
				<Typography color="text.secondary">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
					reprehenderit maxime laboriosam atque repellendus enim voluptate optio
				</Typography>

				<Button sx={{ mt: 1, px: 0 }}>Read More *</Button>
			</Box>
		</div>
	);
};

export default Blog;
