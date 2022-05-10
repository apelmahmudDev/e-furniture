import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
	root: {
		position: "fixed",
		right: 16,
		top: "50%",
		zIndex: 5,
		opacity: 0.8,
		padding: 5,

		display: "flex",
		gap: 5,
		flexDirection: "column",
		backdropFilter: "blur(2px)",
		border: "1px solid #ddd",
		borderRadius: 35,
		boxShadow: "rgb(149 157 165 / 20%) 0px 8px 24px !important",
	},
});
