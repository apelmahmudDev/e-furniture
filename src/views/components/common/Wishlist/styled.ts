import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	wishlist: {
		marginBottom: 16,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 8,

		"& .MuiAvatar-root": {
			width: "65px !important",
			height: "65px !important",
			borderRadius: "0 !important",

			"& > img": {
				objectFit: "contain",
			},
		},
	},
	date: {
		fontSize: 12,
		marginLeft: 8,
		fontWeight: 400,
		color: theme.palette.text.secondary,
	},
}));
