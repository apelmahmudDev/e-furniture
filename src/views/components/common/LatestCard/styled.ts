import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		"& .MuiCardMedia-root": {
			width: "85%",
			margin: "0 auto",
		},

		"& .MuiCardContent-root": {
			display: "flex",
			justifyContent: "space-between",
			gap: "0.442rem",
			padding: "8px 16px !important",

			"& .MuiTypography-root > span": {
				marginLeft: "0.442rem",
				fontSize: "0.742rem",
			},
		},

		"&:hover": {
			"& .MuiBox-root": {
				position: "absolute",
				top: "45%",
				left: 5,
				display: "flex",
				flexDirection: "column",
			},
		},
	},

	cardActions: {
		display: "none",
	},
}));
