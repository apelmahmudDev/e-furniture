import { Box, Typography, Breadcrumbs, Container } from "@mui/material";
import Link, { LinkProps } from "@mui/material/Link";
import { Theme } from "@mui/system";

// icons
import { HomeIcon, MenuBookIcon, GrainIcon } from "../../../../assets/icon";

import {
	Link as RouterLink,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";

const breadcrumbNameMap: { [key: string]: string } = {
	"/shop": "Shop",
	"/blogs": "Blogs",
};

interface LinkRouterProps extends LinkProps {
	to: string;
	replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => (
	<Link {...props} component={RouterLink as any} />
);

const Page = () => {
	const location = useLocation();
	const pathnames = location.pathname.split("/").filter((x) => x);

	return (
		<Breadcrumbs aria-label="breadcrumb">
			<LinkRouter
				style={{ display: "flex", alignItems: "center" }}
				underline="hover"
				color="inherit"
				to="/"
			>
				<HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
				Home
			</LinkRouter>

			<div style={{ display: "flex", alignItems: "center" }}>
				<MenuBookIcon sx={{ mr: 0.5 }} fontSize="inherit" />
				Page
			</div>
			{pathnames.map((value, index) => {
				const last = index === pathnames.length - 1;
				const to = `/${pathnames.slice(0, index + 1).join("/")}`;

				return last ? (
					<Typography
						color="text.primary"
						key={to}
						style={{ display: "flex", alignItems: "center" }}
					>
						<GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
						{breadcrumbNameMap[to]}
					</Typography>
				) : (
					<LinkRouter
						underline="hover"
						color="inherit"
						to={to}
						key={to}
						style={{ display: "flex", alignItems: "center" }}
					>
						<GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
						{breadcrumbNameMap[to]}
					</LinkRouter>
				);
			})}
		</Breadcrumbs>
	);
};

const styles = {
	background: (theme: Theme) => theme.palette.secondary.light,
	height: 200,
	display: "flex",
	alignItems: "center",
};

export default function RouterBreadcrumbs() {
	const location = useLocation();
	const pathnames = location.pathname.split("/").filter((x) => x);

	return (
		<Box sx={{ ...styles }}>
			<Container>
				{pathnames.map((value, index) => {
					const to = `/${pathnames.slice(0, index + 1).join("/")}`;
					return (
						<Typography key={to} variant="h4" sx={{ mb: 1 }}>
							{breadcrumbNameMap[to]}
						</Typography>
					);
				})}
				<Routes>
					<Route path="*" element={<Page />} />
				</Routes>
			</Container>
		</Box>
	);
}
