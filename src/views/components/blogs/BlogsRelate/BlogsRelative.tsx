import {
	Box,
	InputLabel,
	Stack,
	TextField,
	Typography,
	Grid,
	IconButton,
} from "@mui/material";
import {
	FacebookIcon,
	InstagramIcon,
	TwitterIcon,
} from "../../../../assets/icon";
import { StyledChip } from "../../common/StyledComponent";
import OfferProduct from "./OfferProduct/OfferProduct";
import PostItem from "./PostItem/PostItem";

const BlogsRelate = () => {
	const handleClickOnChip = () => {
		//
	};
	return (
		<div>
			{/* search input */}
			<Box mb={5} component="section">
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
			<Box my={5} component="section">
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
			<Box my={5} component="section">
				<Typography variant="h5">Recent Post</Typography>
				{[...Array(3)].map((_, idx) => (
					<PostItem key={idx} />
				))}
			</Box>

			{/* Sale product */}
			<Box my={5} component="section">
				<Typography variant="h5">Sale Product</Typography>
				{[...Array(3)].map((_, idx) => (
					<PostItem key={idx} />
				))}
			</Box>

			{/* offer products */}
			<Box my={5} component="section">
				<Grid container spacing={2.5}>
					{[...Array(4)].map((_, idx) => (
						<Grid key={idx} item xs={6}>
							<OfferProduct />
						</Grid>
					))}
				</Grid>
			</Box>

			{/* follow */}
			<Box my={5} component="section">
				<Typography variant="h5">Follow</Typography>
				<Stack direction="row" spacing={1}>
					<IconButton color="primary">
						<FacebookIcon />
					</IconButton>
					<IconButton color="primary">
						<InstagramIcon />
					</IconButton>
					<IconButton color="primary">
						<TwitterIcon />
					</IconButton>
				</Stack>
			</Box>

			{/* tags */}
			<Box my={5} component="section">
				<Typography variant="h5">Tags</Typography>
				<Box
					sx={{
						mt: 1,
						display: "flex",
						flexWrap: "wrap",
						gap: 1.25,
						"& > a:hover": { textDecoration: "underline" },
					}}
				>
					<a href="/#" target="_blank" rel="noopener noreferrer">
						Chair
					</a>
					<a href="/#" target="_blank" rel="noopener noreferrer">
						Table
					</a>
					<a href="/#" target="_blank" rel="noopener noreferrer">
						Desk
					</a>
					<a href="/#" target="_blank" rel="noopener noreferrer">
						Sofa
					</a>
				</Box>
			</Box>
		</div>
	);
};

export default BlogsRelate;
