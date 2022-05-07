import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	CardRoot: {
		// maxWidth: 220,
		textAlign: "center",

		"&:hover": {
			"& .MuiButton-root": {
				display: "block",
				position: "absolute",
				transform: "translate(55%, -100%)",
				backgroundColor: "rgba(0, 0, 255, 0.6) !important",
			},
		},
	},
	CardMedia: {
		position: "relative",
		height: 180,
		width: 180,
		backgroundColor: "#f6f7fb",
		boxShadow: "2px 3px orange",
		borderRadius: "100%",
		display: "inline-block",
		padding: 16,

		"& .MuiAvatar-root": {
			height: "100% !important",
			width: "100% !important",
			borderRadius: "0% !important",

			"& > img": {
				objectFit: "contain",
			},
		},

		"& .MuiButton-root": {
			display: "none",
		},
	},
}));
