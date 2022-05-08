import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	CardRoot: {
		margin: "0 auto",
		textAlign: "center",
		"&:hover": {
			"& .MuiButton-root": {
				color: "#fff",
				borderRadius: 0,
				display: "block",
				position: "absolute",
				transform: "translate(60%, -100%)",
				backgroundColor: "rgba(254, 156, 34, 0.6) !important",
			},
		},
	},
	CardMediaWrap: {
		borderRadius: "100%",
		display: "inline-block",
	},
	CardMedia: {
		position: "relative",
		height: 180,
		width: 180,
		backgroundColor: "#f6f7fb",
		boxShadow: `2px 3px ${theme.palette.primary.dark}`,
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

	mySwiper: {
		margin: "0 auto",
		textAlign: "center",

		padding: theme.spacing(0, 0, 5, 0),
		"& .swiper-pagination-bullet": {
			borderRadius: 0,
			height: 3,
		},
		"& .swiper-pagination-bullet-active": {
			background: theme.palette.primary.main,
			width: 30,
			transition: "all 0.3s easy",
		},
	},
}));
