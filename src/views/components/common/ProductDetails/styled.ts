import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	imageList: {
		display: "flex !important",
		flexDirection: "column",
		margin: 0,

		[theme.breakpoints.down("sm")]: {
			flexDirection: "row",
		},

		"& .MuiImageListItem-root": {
			cursor: "pointer",
			border: `1px solid ${theme.palette.divider}`,
			// borderRadius: 5,
			background: theme.palette.secondary.light,
		},
	},
	productHeroImg: {
		width: "100%",
		height: "100%",
		objectFit: "contain",
	},
}));
