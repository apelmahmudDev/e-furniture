import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	sectionBg: {
		"& .MuiContainer-root": {
			margin: "0 16px",
			padding: 16,
			backdropFilter: "blur(2px)",
			border: "1px solid #ddd",
			borderRadius: 16,
			boxShadow:
				"rgb(255 255 255 / 10%) 0px 1px 1px 0px inset, rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px !important",
		},

		display: "flex",
		alignItems: "center",
		justifyContent: "center",

		backgroundImage:
			"url(https://img.freepik.com/free-photo/bright-cozy-modern-living-room-interior-have-sofa-lamp-with-white-wall_41470-1045.jpg?w=1060)",
		height: 350,
		backgroundAttachment: "fixed",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	},
}));
