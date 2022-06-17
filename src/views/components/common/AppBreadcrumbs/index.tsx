import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box, Container } from "@mui/material";
import { Theme } from "@mui/system";

// icons
import { HomeIcon, MenuBookIcon, GrainIcon } from "../../../../assets/icon";

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
	);
};

export default AppBreadcrumbs;
