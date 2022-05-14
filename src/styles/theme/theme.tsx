import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";
declare module "@mui/styles/defaultTheme" {
	interface DefaultTheme extends Theme {}
}

let theme = createTheme({
	typography: {
		fontFamily: ["Roboto", "Titillium Web", "sans-serif"].join(","),
		h1: {
			fontFamily: "Titillium Web",
		},
		h2: {
			fontFamily: "Titillium Web",
		},
		h3: {
			fontFamily: "Titillium Web",
		},
		h4: {
			fontFamily: "Titillium Web",
		},
		h5: {
			fontFamily: "Titillium Web",
		},
		h6: {
			fontFamily: "Titillium Web",
		},
	},
	palette: {
		mode: "light",
		primary: {
			main: "#fe9c22",
			light: "#feb054",
			dark: "#f08e10",
		},
		secondary: {
			main: "#f1f0ff",
			light: "#f6f7fb",
		},
		text: {
			primary: "#333333",
			secondary: "#5f6368",
		},
	},
});

export let appTheme = createTheme(theme, {
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "capitalize",
				},
			},
		},
		MuiDialog: {
			styleOverrides: {
				root: {
					"& .MuiPaper-root": {
						margin: 16,
						"& .MuiDialogTitle-root": {
							padding: theme.spacing(2, 2, 1, 2),
						},
						"& .MuiDialogContent-root": {
							padding: theme.spacing(2),
						},
					},
				},
			},
		},
		MuiDrawer: {
			styleOverrides: {
				root: {
					"& .MuiDrawer-paper": {
						minWidth: 345,
						[theme.breakpoints.down(367)]: {
							width: "100%",
							minWidth: "100%",
						},
					},
				},
			},
		},
		MuiFilledInput: {
			styleOverrides: {
				root: {
					border: `1px solid ${theme.palette.primary.main}`,
					borderRadius: 4,
					"&:hover:not(.Mui-disabled):before": {
						borderBottom: 0,
					},
					"&::before": {
						borderBottom: 0,
					},
					"&::after": {
						borderBottom: 0,
					},
				},
			},
		},
	},
});
appTheme = responsiveFontSizes(appTheme);
