import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: "center",
		boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px !important",

		"& .MuiAvatar-root": {
			margin: "0 auto",
			marginTop: 16,
			height: "95px !important",
			width: "95px !important",

			"& .MuiSvgIcon-root": {
				height: 45,
				width: 45,
			},
		},
	},
}));
