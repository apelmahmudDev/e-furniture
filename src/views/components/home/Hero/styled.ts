import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	mySwiper: {
		paddingTop: 40,
		paddingBottom: 40,
		"& .swiper-pagination": {
			"& .swiper-pagination-bullet-active": {
				background: "#fe9c22",
			},
		},
	},

	heroAvatar: {
		position: "relative",
		height: 550,
		width: "100% !important",
		borderRadius: "100%",

		[theme.breakpoints.down("lg")]: {
			height: 400,
		},
		[theme.breakpoints.down("md")]: {
			height: 450,
			width: "450px !important",
		},
		[theme.breakpoints.down("sm")]: {
			height: 300,
			width: "100% !important",
		},
	},

	"@keyframes float": {
		"0%": {
			transform: "translateY(0) rotate(130deg)",
		},
		"50%": {
			transform: "translateY(-20px) rotate(130deg)",
		},
		"100%": {
			transform: "translateY(0) rotate(130deg)",
		},
	},

	propertyOne: {
		position: "absolute",
		top: -80,
		height: 35,
		width: 80,
		background: "#fe9c22",
		borderRadius: 30,
		animation: "$float 5s ease-in-out infinite",

		[theme.breakpoints.down("md")]: {
			top: 400,
		},
	},
	propertyTwo: {
		position: "absolute",
		right: 30,
		top: -5,
		height: 35,
		width: 80,
		background: "#d9d9d9",
		borderRadius: 30,
		transform: "rotate(130deg)",
		animation: "$float 5.5s ease-in-out infinite",
		zIndex: 0,

		[theme.breakpoints.down("md")]: {
			top: 30,
		},
	},
	propertyThree: {
		position: "absolute",
		bottom: -100,
		left: "40%",
		height: 35,
		width: 80,
		background: "#9e9e9e",
		borderRadius: 30,
		transform: "rotate(130deg)",
		animation: "$float 5s ease-in-out infinite",
		[theme.breakpoints.down("md")]: {
			bottom: -400,
			right: 0,
			left: "auto",
		},
		[theme.breakpoints.down("sm")]: {
			bottom: -350,
			right: 0,
			left: "auto",
		},
	},
}));
