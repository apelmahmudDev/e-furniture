import {
	Container,
	Typography,
	Box,
	Grid,
	Avatar,
	MenuList,
	ListItem,
	ListItemText,
	Button,
} from "@mui/material";
import { useStyles } from "./styled";

const UniqueProducts = () => {
	const classes = useStyles();
	return (
		<Box my={2}>
			<Container>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<Avatar
							className={classes.uniqueAvatar}
							src="https://k4j3j2s7.rocketcdn.me/furnob/wp-content/uploads/2022/01/banner-image-22.jpg"
							alt="unique products"
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography variant="h4">
							Unique Features Of latest & Trending Products
						</Typography>
						<MenuList>
							<ListItem>
								<ListItemText>
									all frames constructed with hardwood solids and laminates
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Reinforced with double wood dowels, glue, screw - nails corner
									blocks and machine nails
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Arms, blacks and seats are structurally reinforced
								</ListItemText>
							</ListItem>
						</MenuList>
						<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
							<Button variant="contained">Add To Cart</Button>
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
