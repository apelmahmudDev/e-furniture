import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";
import { STYLES } from "../../../../../styles/styles";
import { useStyles } from "./styled";

const PrfileCard = () => {
	const classes = useStyles();
	const auth = useSelector((state: RootState) => state.auth);

	return (
		<Box>
			<Card sx={{ ...STYLES.boxShadow2 }}>
				<Box className={classes.profileAvatarBg}>
					<Avatar
						src={auth.user.avatar}
						className={classes.profileAvatar}
						alt={auth.user.first_name}
					/>
				</Box>
				<CardContent
					sx={{
						pt: 6,
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<Typography variant="h5" sx={{ my: 1, fontWeight: "600" }}>
						{auth.user.user_type}
					</Typography>
					<Typography variant="h6">{auth.user.email}</Typography>
					<Typography variant="h6" color="text.secondary">
						New York, USA
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default PrfileCard;
