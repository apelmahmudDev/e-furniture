import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: "center",
		boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px !important",

		"& .MuiAvatar-root": {
			margin: "0 auto",
			marginTop: 16,
			height: "65px !important",
			width: "65px !important",
			borderRadius: "0 !important",

			"& .MuiSvgIcon-root": {
				height: 45,
				width: 45,
			},
		},
	},
}));
