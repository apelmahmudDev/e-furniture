import { Grid } from "@mui/material";
import GeneralInformation from "../../components/user/Profile/GeneralInformation";
import PrfileCard from "../../components/user/Profile/ProfileCard";

const MyProfile = () => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} sm={8}>
				<GeneralInformation />
			</Grid>
			<Grid item xs={12} sm={4}>
				<PrfileCard />
			</Grid>
		</Grid>
	);
};

export default MyProfile;
