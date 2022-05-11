import { ThemeProvider } from "@mui/material";
import { appTheme } from "./styles/theme/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "swiper/css";
import "swiper/css/pagination";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/pages/home";
import Auth from "./views/pages/auth";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<ThemeProvider theme={appTheme}>
								<Home />
								{/* <Auth /> */}
							</ThemeProvider>
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
