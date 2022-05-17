import {
	Avatar,
	Box,
	Button,
	Grid,
	MenuItem,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { STYLES } from "../../../../styles/styles";
import { styled } from "@mui/material/styles";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import CircularProgress from "@mui/material/CircularProgress";
import { useStyles } from "./styled";

const categories = [
	{
		value: "Sofa",
		label: "Sofa",
	},
	{
		value: "Chairs",
		label: "Chairs",
	},
	{
		value: "Desks",
		label: "Desks",
	},
	{
		value: "Dressers",
		label: "Dressers",
	},
	{
		value: "Cupboards",
		label: "Cupboards",
	},
	{
		value: "Book_self",
		label: "Book self",
	},
];

const Input = styled("input")({
	display: "none",
});

const AddProduct = () => {
	const classes = useStyles();
	const [category, setCategory] = useState("Chair");
	const [imgUploading, setImgUploading] = useState(false);
	const [productImg, setProductImg] = useState();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCategory(event.target.value);
	};

	// handle product image upload
	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const formData = new FormData();
			formData.append("image", event.target.files[0]);

			setImgUploading(true);
			fetch(
				`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_API_KEY}`,
				{
					method: "POST",
					body: formData,
				}
			)
				.then((res) => res.json())
				.then((res) => {
					setImgUploading(false);
					setProductImg(res.data.image.url);
				})
				.catch((error) => console.log("error", error));
		}
	};
	console.log(productImg);
	return (
		<Paper sx={{ p: 2, ...STYLES.boxShadow1 }}>
			<Typography variant="h6" gutterBottom>
				Add new product
			</Typography>
			<Box component="form" autoComplete="off">
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<TextField
							fullWidth
							required
							margin="dense"
							size="small"
							variant="filled"
							label="Product name"
						/>
						<TextField
							fullWidth
							required
							margin="dense"
							size="small"
							type="number"
							inputMode="numeric"
							variant="filled"
							label="Product price"
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							fullWidth
							required
							margin="dense"
							size="small"
							multiline
							variant="filled"
							label="Product descriptions"
						/>
						<TextField
							fullWidth
							required
							select
							size="small"
							variant="filled"
							margin="dense"
							label="Product Categories"
							value={category}
							onChange={handleChange}
						>
							{categories.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
						<Box>
							<Grid container spacing={1}>
								<Grid item xs={12} sm={2}>
									<Avatar
										sx={{ borderRadius: 0, mt: 0.8 }}
										src={productImg && productImg}
										alt="product-image"
									/>
								</Grid>
								<Grid item xs={12} sm={10}>
									<label htmlFor="contained-button-file">
										<Input
											onChange={handleImageUpload}
											required
											disabled={imgUploading}
											accept="image/*"
											id="contained-button-file"
											multiple
											type="file"
										/>
										<Button
											className={classes.uploadBtn}
											startIcon={<PhotoCameraIcon />}
											disabled={imgUploading}
											endIcon={imgUploading && <CircularProgress />}
											fullWidth
											variant="contained"
											component="span"
										>
											Upload Image
										</Button>
									</label>
								</Grid>
							</Grid>
						</Box>
					</Grid>
				</Grid>
				<Button sx={{ mt: { xs: 1, md: 0 } }} type="submit" variant="outlined">
					Add Product
				</Button>
			</Box>
		</Paper>
	);
};

export default AddProduct;
