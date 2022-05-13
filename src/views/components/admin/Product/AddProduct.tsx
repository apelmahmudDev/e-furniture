import {
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

const categories = [
	{
		value: "Chair",
		label: "Chair",
	},
	{
		value: "Sofa",
		label: "Sofa",
	},
	{
		value: "Bed",
		label: "Bed",
	},
	{
		value: "book_shelf",
		label: "Book Self",
	},
];

const Input = styled("input")({
	display: "none",
});

const AddProduct = () => {
	const [category, setCategory] = useState("Chair");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCategory(event.target.value);
	};

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
						<label htmlFor="contained-button-file">
							<Input
								required
								accept="image/*"
								id="contained-button-file"
								multiple
								type="file"
							/>
							<Button
								sx={{ mt: 1 }}
								fullWidth
								variant="contained"
								component="span"
							>
								Upload Product Image
							</Button>
						</label>
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
