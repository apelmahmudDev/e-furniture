import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { IMAGES } from "../../../../constants/themeData";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useStyles } from "./styled";
import CloseIcon from "@mui/icons-material/Close";
import { STYLES } from "../../../../styles/styles";
import StarIcon from "@mui/icons-material/Star";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { handleProductDetails } from "../../../../store/slice/productSlice";

const ProductDetails = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [productHeroImg, setProductHeroImg] = useState<string | null>(null);
	const product = useSelector((state: RootState) => state.product);
	const handleProductHeroImage = (img: string) => setProductHeroImg(img);

	return (
		<Dialog
			maxWidth="md"
			open={product.product_details_open}
			onClose={() => dispatch(handleProductDetails(false))}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogActions sx={{ position: "absolute", top: 0, right: 0 }}>
				<IconButton
					onClick={() => dispatch(handleProductDetails(false))}
					autoFocus
					sx={{ ...STYLES.icon, zIndex: "tooltip" }}
					size="small"
				>
					<CloseIcon />
				</IconButton>
			</DialogActions>
			<DialogContent>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<Grid container spacing={0.5}>
							<Grid item sm={3}>
								<ImageList className={classes.imageList} cols={3}>
									{itemData.map((item, idx) => (
										<ImageListItem
											key={item.img}
											onClick={() => handleProductHeroImage(item.img)}
										>
											<img
												src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
												srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
												alt={item.title}
												loading="lazy"
											/>
										</ImageListItem>
									))}
								</ImageList>
							</Grid>
							<Grid item sm={9}>
								<img
									className={classes.productHeroImg}
									src={productHeroImg ? productHeroImg : IMAGES.HeroThreeImg}
									alt="product"
									loading="lazy"
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box>
							<Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }}>
								Polo Green Chair
							</Typography>
							<Box display="flex" alignItems="center" gap={1}>
								<Stack spacing={1} direction="row">
									{[...Array(5)].map((item, idx) => (
										<StarIcon
											sx={{ marginLeft: "0 !important" }}
											key={idx}
											fontSize="small"
											color="primary"
										/>
									))}
								</Stack>
								<Typography sx={{ fontFamily: "Titillium Web" }}>
									(9)
								</Typography>
							</Box>
							<Typography mt={1} sx={{ fontFamily: "Titillium Web" }}>
								$45
							</Typography>
							<Typography mt={1} variant="body2" color="text.secondary">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
								accusamus iusto.
							</Typography>
							<Typography mt={1} sx={{ fontFamily: "Titillium Web" }}>
								Categories: {"Chair"}
							</Typography>
							<Box my={2}>
								<Button
									startIcon={<ShoppingCartOutlinedIcon />}
									variant="outlined"
									size="small"
								>
									Add To Cart
								</Button>
								<IconButton size="small" sx={{ ...STYLES.icon, ml: 2 }}>
									<FavoriteBorderIcon />
								</IconButton>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</DialogContent>
		</Dialog>
	);
};

export default ProductDetails;

const itemData = [
	{
		img: IMAGES.HeroOneImg,
		title: "red sofa",
	},
	{
		img: IMAGES.HeroTwoImg,
		title: "purple sofa",
	},
	{
		img: IMAGES.HeroThreeImg,
		title: "chair",
	},
];
