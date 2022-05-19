import { ThemeProvider } from "@mui/material";
import { appTheme } from "./styles/theme/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "swiper/css";
import "swiper/css/pagination";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { SnackbarProvider } from "notistack";

function App() {
	const content = useRoutes(routes);
	return (
		<SnackbarProvider anchorOrigin={{ horizontal: "right", vertical: "top" }}>
			<ThemeProvider theme={appTheme}>{content}</ThemeProvider>
		</SnackbarProvider>
	);
}

export default App;
