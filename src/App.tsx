import { ThemeProvider } from "@mui/material";
import { appTheme } from "./styles/theme/theme";
import Navbar from "./views/components/common/Navbar";
import FeaturedProducts from "./views/components/FeaturedProducts";
import Hero from "./views/components/Hero";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "swiper/css";
import "swiper/css/pagination";
import LatestProducts from "./views/components/LatestProducts";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UniqueProducts from "./views/components/UniqueProducts";
import TopCategories from "./views/components/TopCategories";
import Blog from "./views/components/Blog";
import Services from "./views/components/Services";
import Newsletter from "./views/components/Newsletter";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<ThemeProvider theme={appTheme}>
								<Navbar />
								<Hero />
								<FeaturedProducts />
								<LatestProducts />
								<UniqueProducts />
								<TopCategories />
								<Blog />
								<Services />
								<Newsletter />
							</ThemeProvider>
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
