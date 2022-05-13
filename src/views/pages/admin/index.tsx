import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/GridViewRounded";
import MallIcon from "@mui/icons-material/LocalMallRounded";
import InventoryIcon from "@mui/icons-material/Inventory2";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerIcon from "@mui/icons-material/PowerSettingsNew";
import { Avatar } from "@mui/material";
import { STYLES } from "../../../styles/styles";
import { useState } from "react";
import Dashboard from "./dashboard";

const drawerWidth = 230;

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
}

const Admin = (props: Props) => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Box my={2} sx={{ textAlign: "center" }}>
				<Avatar
					sx={{ height: 70, width: 70, margin: "0 auto" }}
					src="/ApelMahmud.png"
					alt="Apel Mahmud"
				/>
				<Typography color="primary" my={1} variant="h5">
					Apel Mahmud
				</Typography>
			</Box>
			<Divider />
			<List>
				{[
					{ item: "Dashboard", icon: <DashboardIcon color="primary" /> },
					{ item: "Orders", icon: <MallIcon color="primary" /> },
					{ item: "Products", icon: <InventoryIcon color="primary" /> },
					{ item: "Earning Status", icon: <AutorenewIcon color="primary" /> },
					{ item: "Settings", icon: <SettingsIcon color="primary" /> },
					{ item: "Logout", icon: <PowerIcon color="primary" /> },
				].map((item, index) => (
					<ListItem key={index} disablePadding>
						<ListItemButton>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
					bgcolor: "common.white",
					...STYLES.boxShadow1,
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Responsive drawer
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
							minWidth: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
							minWidth: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				<Dashboard />
			</Box>
		</Box>
	);
};
export default Admin;
