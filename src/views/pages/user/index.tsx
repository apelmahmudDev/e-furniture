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
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { STYLES } from "../../../styles/styles";
import { useState } from "react";
import AppLogo from "../../components/common/AppLogo";
import { ReactComponent as DashboardSvg } from "../../../assets/svg/ideas.svg";
import { Link, Outlet } from "react-router-dom";
import { ROUTING_TREE } from "../../../constants/siteUrls";
import { RootState, useAppDispatch } from "../../../store";
import { useSelector } from "react-redux";
import { logout } from "../../../store/slice/authSlice";

// icons
import {
	FavoriteBorderOutlinedIcon,
	MallIcon,
	MenuIcon,
	PersonIcon,
	PowerIcon,
	SettingsIcon,
} from "../../../assets/icon";

const drawerWidth = 230;

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
}

const User = (props: Props) => {
	const dispatch = useAppDispatch();
	const auth = useSelector((state: RootState) => state.auth);

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
					src={auth.user?.avatar}
					alt={auth.user.first_name}
				/>
				<Typography color="primary" my={1} variant="h5">
					{`${auth.user?.first_name} ${auth.user?.last_name} (${auth.user?.user_type})`}
				</Typography>
			</Box>
			<Divider />
			<List>
				{userItems.map((item, index) => (
					<Link key={index} to={"/" + item.link}>
						<ListItem key={index} disablePadding>
							<ListItemButton>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText primary={item.item} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
				{/* logout item */}
				<ListItem disablePadding>
					<ListItemButton onClick={() => dispatch(logout())}>
						<ListItemIcon>
							<PowerIcon color="primary" />
						</ListItemIcon>
						<ListItemText primary="Logout" />
					</ListItemButton>
				</ListItem>
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
					<Box sx={{ flex: 1 }}>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: "none" } }}
						>
							<MenuIcon />
						</IconButton>
					</Box>
					<Link to={"/" + ROUTING_TREE.HOME}>
						<AppLogo />
					</Link>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
					<DashboardSvg />
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
					<DashboardSvg />
				</Drawer>
			</Box>
			{/* user body content */}
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,

					width: {
						xs: "100%",
						sm: `calc(100% - ${drawerWidth}px)`,
					},
				}}
			>
				<Toolbar />
				{/* route page */}
				<Outlet />
			</Box>
		</Box>
	);
};
export default User;

const userItems = [
	{
		item: "My Profile",
		icon: <PersonIcon color="primary" />,
		link: ROUTING_TREE.USER.PROFILE,
	},
	{
		item: "Orders",
		icon: <MallIcon color="primary" />,
		link: ROUTING_TREE.USER.ORDERS,
	},
	{
		item: "Wishlist",
		icon: <FavoriteBorderOutlinedIcon color="primary" />,
		link: ROUTING_TREE.USER.WISHLIST,
	},
	{
		item: "Settings",
		icon: <SettingsIcon color="primary" />,
		link: "",
	},
];
