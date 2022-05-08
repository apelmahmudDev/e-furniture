import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiCardMedia-root": {
			width: "85%",
			margin: "0 auto",
			objectFit: "contain",
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
	},

	cardActions: {
		display: "none",
	},

	cardMediaWrapper: {
		position: "relative",
		background: theme.palette.secondary.light,

		"&:hover": {
			background: theme.palette.common.white,
			"& .MuiBox-root": {
				position: "absolute",
				top: "45%",
				left: 5,
				display: "flex",
				flexDirection: "column",
				gap: 16,
			},
		},
	},
}));
