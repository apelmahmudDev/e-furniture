import React, { Suspense } from "react";
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
import LinearProgress from "@mui/material/LinearProgress";
import ScrollTopOnTransitionPage from "./utils/helper/ScrollTopOnTransitionPage";

const PageLinearProgress = () => {
	return <LinearProgress />;
};

function App() {
	const content = useRoutes(routes);
	return (
		<SnackbarProvider anchorOrigin={{ horizontal: "right", vertical: "top" }}>
			<ThemeProvider theme={appTheme}>
				{/* scroll to top every page transition */}
				<ScrollTopOnTransitionPage />
				<Suspense fallback={<PageLinearProgress />}>{content}</Suspense>
			</ThemeProvider>
		</SnackbarProvider>
	);
}

export default App;
