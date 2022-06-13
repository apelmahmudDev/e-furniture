import { CardContent, Grid, TextField } from "@mui/material";
import { useAppDispatch } from "../../../store";
import { updateShippingForm } from "../../../store/slice/shippingSlice";
import { AppCard } from "../common/StyledComponent";
import Header from "../common/Header";

const Address = () => {
	const dispatch = useAppDispatch();

	return (
		<AppCard>
			<CardContent>
				<Header headerText="Shipping Address" />

				<TextField
					size="small"
					fullWidth
					label="Name"
					required
					onChange={(e) =>
						dispatch(
							updateShippingForm({ field: "name", value: e.target.value })
						)
					}
				/>
				<Grid container spacing={{ xs: 0, sm: 3 }}>
					<Grid item xs={12} sm={6}>
						<TextField
							size="small"
							fullWidth
							label="Email"
							type="email"
							required
							onChange={(e) =>
								dispatch(
									updateShippingForm({ field: "email", value: e.target.value })
								)
							}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							size="small"
							fullWidth
							label="Phone No"
							type="tel"
							inputMode="numeric"
							required
							onChange={(e) =>
								dispatch(
									updateShippingForm({ field: "phone", value: e.target.value })
								)
							}
						/>
					</Grid>
				</Grid>
				<Grid container spacing={{ xs: 0, sm: 3 }}>
					<Grid item xs={12} sm={6}>
						<TextField
							size="small"
							fullWidth
							label="Country"
							required
							onChange={(e) =>
								dispatch(
									updateShippingForm({
										field: "country",
										value: e.target.value,
									})
								)
							}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							size="small"
							fullWidth
							label="District"
							required
							onChange={(e) =>
								dispatch(
									updateShippingForm({
										field: "district",
										value: e.target.value,
									})
								)
							}
						/>
					</Grid>
				</Grid>
				<Grid container spacing={{ xs: 0, sm: 3 }}>
					<Grid item xs={12} sm={6}>
						<TextField
							size="small"
							fullWidth
							label="Area"
							required
							onChange={(e) =>
								dispatch(
									updateShippingForm({
										field: "area",
										value: e.target.value,
									})
								)
							}
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
							required
							onChange={(e) =>
								dispatch(
									updateShippingForm({
										field: "postCode",
										value: e.target.value,
									})
								)
							}
						/>
					</Grid>
				</Grid>
				<TextField
					size="small"
					fullWidth
					label="Address (Optional)"
					multiline
					rows={3}
					onChange={(e) =>
						dispatch(
							updateShippingForm({ field: "address", value: e.target.value })
						)
					}
				/>
			</CardContent>
		</AppCard>
	);
};

export default Address;
