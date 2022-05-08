import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	navigationRoot: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: theme.spacing(0, 0, 4, 0) + "!important",

		"& > a": {
			color: theme.palette.text.primary,
			textDecoration: "none",
			"&:hover": {
				textDecoration: "underline",
			},
		},
		"& .MuiListItem-root": {
			paddingTop: 0,
			paddingBottom: 0,
		},
	},
}));
