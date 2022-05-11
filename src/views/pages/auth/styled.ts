import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		margin: "16px 0",
		backdropFilter: "blur(1000px)",
		opacity: 0.876,
		border: " 1px solid #fff",
		background:
			"linear-gradient(230deg, rgb(255 255 255) 5%, rgb(216 214 214) 100%)",
	},
	authAvatar: {
		[theme.breakpoints.down("sm")]: {
			height: 170,
		},
	},
}));
