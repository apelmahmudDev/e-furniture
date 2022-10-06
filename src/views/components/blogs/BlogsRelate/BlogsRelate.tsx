import { Box, InputLabel, Stack, TextField, Typography } from "@mui/material";
import { StyledChip } from "../../common/StyledComponent";

const BlogsRelate = () => {
	const handleClickOnChip = () => {
		//
	};
	return (
		<div>
			{/* search input */}
			<Box my={5}>
				<InputLabel
					sx={{
						mb: 1.25,
						fontFamily: "Titillium Web",
						fontSize: 24,
						fontWeight: "medium",
						color: "text.primary",
					}}
				>
					Search
				</InputLabel>
				<TextField type="search" fullWidth size="small" />
			</Box>

			{/* Categories */}
			<Box my={5}>
				<Typography variant="h5">Categories</Typography>
				<Stack
					direction="row"
					spacing={1}
					sx={{ flexWrap: "wrap", gap: 1.25, mt: 1.25 }}
				>
					<StyledChip label="Chair" onClick={handleClickOnChip} />
					<StyledChip label="Table" onClick={handleClickOnChip} />
					<StyledChip label="Sofa" onClick={handleClickOnChip} />
					<StyledChip label="Desk" onClick={handleClickOnChip} />
				</Stack>
			</Box>

			{/* Recent post */}
			<Box my={5}>
				<Typography variant="h5">Recent Post</Typography>
			</Box>
		</div>
	);
};

export default BlogsRelate;
