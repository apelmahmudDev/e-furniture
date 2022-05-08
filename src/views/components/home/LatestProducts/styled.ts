import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	tabsWrapper: {
		"& .MuiTabs-root": {
			"& .MuiTabs-flexContainer": {
				justifyContent: "center",
				"& .MuiButtonBase-root": {
					textTransform: "capitalize",
				},
			},
		},
	},
}));
