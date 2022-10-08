import { Avatar, Typography, Box } from "@mui/material";

const PostItem = () => {
	return (
		<Box sx={{ display: "flex", gap: 1.25, mt: 1.25 }}>
			{/* post image */}
			<Avatar
				variant="square"
				src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80"
				alt="post-image"
			/>
			{/* post details */}
			<div>
				<Typography variant="body1">It's a post details</Typography>
				<Typography color="text.secondary" variant="body2">
					Oct 08 2022
				</Typography>
			</div>
		</Box>
	);
};

export default PostItem;
