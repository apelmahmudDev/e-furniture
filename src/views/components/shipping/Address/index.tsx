import { Box, CardContent, Grid, TextField, Typography } from "@mui/material";
import { AppCard } from "../../common/StyledComponent";

const Address = () => {
	return (
		<AppCard>
			<CardContent>
				<Typography variant="h5" sx={{ mb: 1 }}>
					Shipping Address
				</Typography>

				<Box
					component="form"
					sx={{
						"& .MuiTextField-root, & .MuiFormControl-root": { my: 1 },
					}}
					autoComplete="off"
				>
					<TextField
						size="small"
						fullWidth
						label="Name"
						// onChange={handleChange("name")}
						required
					/>
					<Grid container spacing={{ xs: 0, sm: 3 }}>
						<Grid item xs={12} sm={6}>
							<TextField
								size="small"
								fullWidth
								label="Email"
								type="email"
								// onChange={handleChange("email")}
								required
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								size="small"
								fullWidth
								label="Phone No"
								type="tel"
								inputMode="numeric"
								// onChange={handleChange("phone")}
								required
							/>
						</Grid>
					</Grid>
					<Grid container spacing={{ xs: 0, sm: 3 }}>
						<Grid item xs={12} sm={6}>
							<TextField
								size="small"
								fullWidth
								label="Country"
								// onChange={handleChange("country")}
								required
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								size="small"
								fullWidth
								label="District"
								// onChange={handleChange("district")}
								required
							/>
						</Grid>
					</Grid>
					<Grid container spacing={{ xs: 0, sm: 3 }}>
						<Grid item xs={12} sm={6}>
							<TextField
								size="small"
								fullWidth
								label="Area"
								// onChange={handleChange("area")}
								required
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								size="small"
								fullWidth
								label="Post Code"
								type="number"
								inputMode="numeric"
								inputProps={{ min: "0", minLength: "4" }}
								// onChange={handleChange("postCode")}
								required
							/>
						</Grid>
					</Grid>
					<TextField
						size="small"
						fullWidth
						label="Address"
						multiline
						rows={3}
						// onChange={handleChange("address")}
						required
					/>
				</Box>
			</CardContent>
		</AppCard>
	);
};

export default Address;
