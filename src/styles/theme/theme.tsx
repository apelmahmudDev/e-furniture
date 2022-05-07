import { createTheme, responsiveFontSizes } from "@mui/material/styles";

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
			main: "#f1f0ff", // will be change
			light: "#f1f0ff",
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
	},
});
appTheme = responsiveFontSizes(appTheme);
