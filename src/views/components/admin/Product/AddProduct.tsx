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
		value: "sofa",
		label: "Sofa",
	},
	{
		value: "chairs",
		label: "Chairs",
	},
	{
		value: "desks",
		label: "Desks",
	},
	{
		value: "dressers",
		label: "Dressers",
	},
	{
		value: "cupboards",
		label: "Cupboards",
	},
	{
		value: "book_self",
		label: "Book self",
	},
];
const subCategories = [
	{
		value: "new_arrival",
		label: "New Arrival",
	},
	{
		value: "best_seller",
		label: "Best Seller",
	},
	{
		value: "featured",
		label: "Featured",
	},
	{
		value: "special_offer",
		label: "Special Offer",
	},
];

const Input = styled("input")({
	display: "none",
});

const AddProduct = () => {
	const classes = useStyles();
	const [imgUploading, setImgUploading] = useState(false);
	const [productImg, setProductImg] = useState();
	const [values, setValues] = useState({
		name: "",
		price: "",
		description: "",
		category: "",
		subCategory: "",
	});

	// handle input change
	const handleOnChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		prop: string
	) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	console.log(values);

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
				<Grid container spacing={{ xs: 0, md: 2 }}>
					<Grid item xs={12} md={6}>
						<TextField
							fullWidth
							required
							margin="dense"
							size="small"
							variant="filled"
							label="Name"
							onChange={(event) => handleOnChange(event, "name")}
						/>
						<TextField
							fullWidth
							required
							margin="dense"
							size="small"
							type="number"
							inputMode="numeric"
							variant="filled"
							label="Price"
							onChange={(event) => handleOnChange(event, "price")}
						/>
						<TextField
							fullWidth
							required
							margin="dense"
							size="small"
							multiline
							variant="filled"
							label="Descriptions"
							onChange={(event) => handleOnChange(event, "description")}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							fullWidth
							required
							select
							size="small"
							variant="filled"
							margin="dense"
							label="Categories"
							value={values.category}
							onChange={(event) => handleOnChange(event, "category")}
						>
							{categories.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
						<TextField
							fullWidth
							select
							size="small"
							variant="filled"
							margin="dense"
							label="Sub Categories"
							value={values.subCategory}
							onChange={(event) => handleOnChange(event, "subCategory")}
						>
							{subCategories.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
						<Box my={1}>
							<Grid container spacing={1}>
								<Grid item xs={12} sm={3}>
									<Avatar
										sx={{ borderRadius: 1, mt: 0.5 }}
										src={productImg && productImg}
										alt="product-image"
									/>
								</Grid>
								<Grid item xs={12} sm={9}>
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
				<Button sx={{ mt: 1 }} type="submit" variant="outlined">
					Add Product
				</Button>
			</Box>
		</Paper>
	);
};

export default AddProduct;
