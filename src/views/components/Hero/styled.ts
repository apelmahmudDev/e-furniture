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
		width: "100% !important",
		height: "100% !important",
		borderRadius: "0 !important",
	},
}));
