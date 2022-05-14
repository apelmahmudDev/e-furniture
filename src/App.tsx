import { ThemeProvider } from "@mui/material";
import { appTheme } from "./styles/theme/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "swiper/css";
import "swiper/css/pagination";
import { useRoutes } from "react-router-dom";
import Admin from "./views/pages/admin";
import routes from "./routes";

function App() {
	const content = useRoutes(routes);
	return <ThemeProvider theme={appTheme}>{content}</ThemeProvider>;
}

export default App;
