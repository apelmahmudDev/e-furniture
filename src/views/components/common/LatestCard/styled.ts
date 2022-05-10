import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		boxShadow:
			"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",
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
				bottom: 16,
				left: 5,
				display: "flex",
				flexDirection: "column",
				gap: 16,
			},
		},
	},
}));
