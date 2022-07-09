import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box, Container } from "@mui/material";
import { Theme } from "@mui/system";

// icons
import { HomeIcon, MenuBookIcon, GrainIcon } from "../../../../assets/icon";
import { useLocation, useNavigate } from "react-router-dom";

const styles = {
	background: (theme: Theme) => theme.palette.secondary.light,
	height: 200,
	display: "flex",
	alignItems: "center",
};

const AppBreadcrumbs = () => {
	function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		event.preventDefault();
		console.info("You clicked a breadcrumb.");
	}

	const navigate = useNavigate();
	const { pathname } = useLocation();
	console.log();
	console.log(navigate("/"));

	// const {
	// 	history,
	// 	location: { pathname },
	// } = props;
	const pathnames = pathname.split("/").filter((x: any) => x);

	return (
		<Box sx={{ ...styles }} role="presentation" onClick={handleClick}>
			<Container>
				<Typography variant="h4" sx={{ mb: 1 }}>
					Shop
				</Typography>
				<Breadcrumbs aria-label="breadcrumb">
					<Link
						underline="hover"
						sx={{ display: "flex", alignItems: "center" }}
						color="inherit"
						href="/"
					>
						<HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
						Home
					</Link>
					<Link
						underline="hover"
						sx={{ display: "flex", alignItems: "center" }}
						color="inherit"
						href="/material-ui/getting-started/installation/"
					>
						<MenuBookIcon sx={{ mr: 0.5 }} fontSize="inherit" />
						Page
					</Link>
					<Typography
						sx={{ display: "flex", alignItems: "center" }}
						color="text.primary"
					>
						<GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
						Shop
					</Typography>
				</Breadcrumbs>
			</Container>
		</Box>
		// <Breadcrumbs aria-label="breadcrumb">
		// 	{pathnames.length > 0 ? (
		// 		<Link onClick={() => navigate("/")}>Home</Link>
		// 	) : (
		// 		<Typography> Home </Typography>
		// 	)}
		// 	{pathnames.map((name: any, index: any) => {
		// 		const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
		// 		const isLast = index === pathnames.length - 1;
		// 		return isLast ? (
		// 			<Typography key={name}>{name}</Typography>
		// 		) : (
		// 			<Link key={name} onClick={() => navigate(routeTo)}>
		// 				{name}
		// 			</Link>
		// 		);
		// 	})}
		// </Breadcrumbs>
	);
};

export default AppBreadcrumbs;
