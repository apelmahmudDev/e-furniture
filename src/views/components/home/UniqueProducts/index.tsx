import {
	Container,
	Typography,
	Box,
	Grid,
	Avatar,
	Button,
} from "@mui/material";
import { useStyles } from "./styled";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const UniqueProducts = () => {
	const classes = useStyles();
	return (
		<Box
			my={5}
			py={5}
			component="section"
			sx={{ bgcolor: (theme) => theme.palette.secondary.light }}
		>
			<Container>
				<Grid container spacing={3} alignItems="center">
					<Grid item xs={12} md={6}>
						<Avatar
							className={classes.uniqueAvatar}
							src="https://k4j3j2s7.rocketcdn.me/furnob/wp-content/uploads/2022/01/banner-image-22.jpg"
							alt="unique products"
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography variant="h5" gutterBottom>
							Unique Features Of latest & Trending Products
						</Typography>
						<ul className={classes.list}>
							<li>All frames constructed with hardwood solids and laminates</li>
							<li>
								Reinforced with double wood dowels, glue, screw - nails corner
								blocks and machine nails
							</li>
							<li>Arms, blacks and seats are structurally reinforced</li>
						</ul>
						<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
							<Button
								variant="contained"
								sx={{ color: (theme) => theme.palette.secondary.light }}
								endIcon={<ShoppingCartOutlinedIcon />}
							>
								Add To Cart
							</Button>
							<Typography variant="body2">
								B&B China Safa <br /> $32.00
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default UniqueProducts;
