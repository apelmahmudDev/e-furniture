import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
	gradientBg: {
		maxHeight: 350,
		position: "relative",
		"&::before": {
			content: "''",
			position: "absolute",
			top: 0,
			left: 0,
			height: "100%",
			width: "100%",
			zIndex: 5,
			backgroundImage:
				"linear-gradient(170deg, rgba(41, 41, 41, 0) 0%, #292929 100%)",
		},
	},
}));
