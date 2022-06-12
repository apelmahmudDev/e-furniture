import {
	Box,
	Card,
	CardContent,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { STYLES } from "../../../../styles/styles";
import ButtonProgress from "../../common/ButtonProgress";

const GeneralInformation = () => {
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
								<TextField
									size="small"
									label="Birthday"
									fullWidth
									type="date"
									defaultValue=""
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									size="small"
									label="Gender"
									fullWidth
									defaultValue="Male"
								/>
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
								display: "flex",
								justifyContent: "flex-end",
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
