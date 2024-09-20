import { makeStyles } from "@mui/styles";
import { IMAGES } from "../../../../constants/themeData";

export const useStyles = makeStyles((theme) => ({
	impressionArea: {
		backgroundImage: `url(${IMAGES.gradientCircle})`,
		backgroundPosition: "top right",
		backgroundRepeat: "no-repeat",

		[theme.breakpoints.down("md")]: {
			backgroundImage: "none",
		},
	},

	gradientCircle: {
		position: "relative",
		left: "100%",
		bottom: 0,
		height: 150,
		width: 150,
		borderRadius: "100%",
		background: "linear-gradient(90deg, #f1f0ff 0%, #fe9c22 100%)",
		boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",

		"&::before": {
			content: '""',
			position: "absolute",
			top: "50%",
			left: "50%",
			height: 220,
			width: 220,
			border: "2px solid #f1f0ff",
			borderRadius: "100%",
			transform: "translate(-50%, -50%)",
		},

		"&::after": {
			content: '""',
			position: "absolute",
			bottom: 0,
			left: -50,
			height: 50,
			width: 50,
			borderRadius: "100%",
			background: "linear-gradient(90deg, #fe9c22 0%, #000000 100%)",
		},
	},

	impression: {
		"& h5": {
			fontWeight: 600,
			color: theme.palette.primary.main,
		},
		"& p": {
			color: theme.palette.text.secondary,
		},
		maxWidth: 450,
		padding: 20,
		borderRadius: 10,
		boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
	},
}));
