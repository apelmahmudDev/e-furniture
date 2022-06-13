import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	profileAvatarBg: {
		display: "flex",
		justifyContent: "center",
		width: "100%",
		height: 180,
		background: theme.palette.secondary.light,
	},
	profileAvatar: {
		height: "145px !important",
		width: "145px !important",
		transform: "translateY(50%)",
	},
}));
