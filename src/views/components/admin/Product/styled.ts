import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	uploadBtn: {
		marginTop: "8px !important",
		backgroundColor: theme.palette.secondary.main + "!important",

		"& .MuiCircularProgress-root": {
			height: "24px !important",
			width: "24px !important",
		},
	},
}));
