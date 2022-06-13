import {
	Box,
	Card,
	CardContent,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { STYLES } from "../../../../styles/styles";
import ButtonProgress from "../../common/ButtonProgress";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const GeneralInformation = () => {
	const [value, setValue] = useState<Date | null>(null);
	return (
		<Box>
			<Card sx={{ ...STYLES.boxShadow2 }}>
				<CardContent>
					<Typography variant="h6" sx={{ fontWeight: "600" }}>
						General Inforamation
					</Typography>
					<Box
						component="form"
						sx={{
							mt: 3,
						}}
					>
						{/* general information */}
						<Grid container spacing={3}>
							<Grid item xs={12} sm={6}>
								<TextField
									size="small"
									label="First Name"
									fullWidth
									defaultValue="Apel"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									size="small"
									label="Last Name"
									fullWidth
									defaultValue="Mahmud"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<DatePicker
										label="Birthday"
										inputFormat="dd/MM/yyyy"
										value={value}
										onChange={(newValue: Date | null) => {
											setValue(newValue);
										}}
										renderInput={(params) => (
											<TextField size="small" fullWidth {...params} />
										)}
									/>
								</LocalizationProvider>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									size="small"
									label="Email"
									fullWidth
									type="email"
									defaultValue="apelmahmud@gmail.com"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									size="small"
									label="Phone"
									fullWidth
									type="tel"
									inputMode="numeric"
									defaultValue="01739801364"
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControl>
									<FormLabel id="demo-row-radio-buttons-group-label">
										Gender
									</FormLabel>
									<RadioGroup
										row
										aria-labelledby="demo-row-radio-buttons-group-label"
										name="row-radio-buttons-group"
									>
										<FormControlLabel
											value="female"
											control={<Radio />}
											label="Female"
										/>
										<FormControlLabel
											value="male"
											control={<Radio />}
											label="Male"
										/>
										<FormControlLabel
											value="other"
											control={<Radio />}
											label="Other"
										/>
									</RadioGroup>
								</FormControl>
							</Grid>
						</Grid>

						{/* address */}
						<Typography variant="h6" sx={{ mt: 3, fontWeight: "600" }}>
							General Inforamation
						</Typography>
						<TextField
							sx={{ my: 3 }}
							size="small"
							label="Enter your home address"
							fullWidth
							defaultValue=""
						/>
						<Grid container spacing={3}>
							<Grid item xs={12} sm={6}>
								<TextField
									size="small"
									label="Area"
									fullWidth
									defaultValue=""
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									size="small"
									label="Postal Code"
									fullWidth
									defaultValue=""
								/>
							</Grid>
						</Grid>

						<Box
							sx={{
								mt: 3,
								"& .MuiButton-root": {
									color: (theme) => theme.palette.secondary.light,
								},
							}}
						>
							<ButtonProgress
								btnType="submit"
								variantType="contained"
								btnText="Update"
								isLoading={false}
							/>
						</Box>
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
};

export default GeneralInformation;
