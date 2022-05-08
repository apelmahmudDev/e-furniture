import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	uniqueAvatar: {
		height: "100% !important",
		width: "100% !important",
		borderRadius: "0 !important",
	},
	disc: {
		height: 8,
		width: 8,
		background: "#ddd",
		borderRadius: "100%",
	},
	list: {
		fontFamily: "Roboto",
		"& > li": {
			"&::marker": {
				fontSize: 24,
			},
			"&:nth-child(odd)::marker": {
				color: theme.palette.primary.main,
			},
		},
	},
}));
