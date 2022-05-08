import { Theme } from "@mui/material/styles";
export const STYLES = {
	icon: {
		bgcolor: (theme: Theme) => theme.palette.secondary.light,
		color: (theme: Theme) => theme.palette.primary.main,
	},
	boxShadow1: {
		boxShadow: "rgb(149 157 165 / 20%) 0px 8px 24px !important",
	},
	boxShadow2: {
		boxShadow:
			"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",
	},
};
