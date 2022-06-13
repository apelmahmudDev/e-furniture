import { Box, Grid } from "@mui/material";
import Calender from "../../components/user/Profile/Calender";
import GeneralInformation from "../../components/user/Profile/GeneralInformation";
import PrfileCard from "../../components/user/Profile/ProfileCard";

const MyProfile = () => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={7} lg={8} xl={9} sx={{ order: { xs: 2, md: 1 } }}>
				<GeneralInformation />
			</Grid>
			<Grid item xs={12} md={5} lg={4} xl={3} sx={{ order: { xs: 1, md: 2 } }}>
				<PrfileCard />
				<Box mt={3}>
					<Calender />
				</Box>
			</Grid>
		</Grid>
	);
};

export default MyProfile;
