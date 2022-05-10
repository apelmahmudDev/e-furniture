import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		margin: "0 auto",
		borderRadius: "0 !important",
		boxShadow: "rgb(149 157 165 / 20%) 0px 8px 24px !important",

		"& .MuiCardMedia-root": {
			width: "85%",
			margin: "0 auto",
		},
		"& .MuiCardContent-root": {
			padding: theme.spacing(2) + "!important",
		},
		"&:hover": {
			"& .MuiCardContent-root": {
				color: theme.palette.common.white,
				backgroundColor: theme.palette.primary.main,
			},

			"& .MuiBox-root": {
				display: "block",
			},
			transition: "all 0.5s easy",
		},
	},

	cardActions: {
		position: "absolute",
		top: 5,
		left: 5,
		display: "none",
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
