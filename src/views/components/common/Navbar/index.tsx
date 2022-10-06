import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ElevationScroll from "../../../../utils/helper/ElevationScroll";
import ChairIcon from "@mui/icons-material/Chair";
import ScrollTopTrigger from "../../../../utils/helper/ScrollTopTrigger";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { ROUTING_TREE } from "../../../../constants/siteUrls";
import { Link, useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../../../store";
import { useSelector } from "react-redux";
import { logout } from "../../../../store/slice/authSlice";
import { ShoppingCartOutlinedIcon } from "../../../../assets/icon";
import { STYLES } from "../../../../styles/styles";
import { StyledBadge } from "../StyledComponent";

const navbarData = [
	{ page: "Home", link: ROUTING_TREE.HOME },
	{ page: "Shop", link: ROUTING_TREE.SHOP },
	{ page: "About Us", link: ROUTING_TREE.SHOP },
	{ page: "Blog", link: ROUTING_TREE.BLOGS },
];

const Navbar = (props: any) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const auth = useSelector((state: RootState) => state.auth);
	const cart = useSelector((state: RootState) => state.cart);

	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<>
			<ElevationScroll {...props}>
				<AppBar
					sx={{
						bgcolor: (theme) => theme.palette.secondary.main,
					}}
				>
					<Container>
						<Toolbar disableGutters>
							<ChairIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
							<Link to={"/" + ROUTING_TREE.HOME}>
								<Typography
									variant="h6"
									noWrap
									sx={{
										mr: 2,
										display: { xs: "none", md: "flex" },
										fontFamily: "Titillium Web",
										fontWeight: 700,
										letterSpacing: ".1rem",
										color: "inherit",
										textDecoration: "none",
									}}
								>
									e-furniture
								</Typography>
							</Link>

							{/* menu for small device */}
							<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
								<IconButton
									size="large"
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleOpenNavMenu}
									color="inherit"
								>
									<MenuIcon />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorElNav}
									anchorOrigin={{
										vertical: "bottom",
										horizontal: "left",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "left",
									}}
									open={Boolean(anchorElNav)}
									onClose={handleCloseNavMenu}
									sx={{
										display: { xs: "block", md: "none" },
									}}
								>
									{navbarData.map((page, idx) => (
										<Link key={idx} to={"/" + page.link}>
											<MenuItem key={idx}>
												<Typography textAlign="center">{page.page}</Typography>
											</MenuItem>
										</Link>
									))}

									{/* cart menu */}
									<MenuItem
										onClick={() => {
											handleCloseNavMenu();
											navigate("/" + ROUTING_TREE.CART);
										}}
									>
										<IconButton size="small" sx={{ mr: 2, ...STYLES.icon }}>
											<StyledBadge
												badgeContent={cart.cart.length}
												color="secondary"
											>
												<ShoppingCartOutlinedIcon fontSize="small" />
											</StyledBadge>
										</IconButton>
									</MenuItem>
								</Menu>
							</Box>
							<ChairIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
							<Link to={"/" + ROUTING_TREE.HOME}>
								<Typography
									variant="h5"
									noWrap
									sx={{
										mr: 2,
										fontSize: { xs: "1rem" },
										display: { xs: "flex", md: "none" },
										flexGrow: 1,
										fontFamily: "monospace",
										fontWeight: 700,
										letterSpacing: ".1rem",
										color: "inherit",
										textDecoration: "none",
									}}
								>
									e-furniture
								</Typography>
							</Link>

							{/* menu for large device */}
							<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
								{navbarData.map((page) => (
									<Link to={"/" + page.link} key={page.page}>
										<Button
											onClick={handleCloseNavMenu}
											sx={{
												my: 2,
												color: (theme) => theme.palette.text.primary,
												display: "block",
											}}
										>
											{page.page}
										</Button>
									</Link>
								))}
							</Box>

							<Box sx={{ flexGrow: 0 }}>
								{/* cart */}
								<Box sx={{ display: { xs: "none", md: "inline" } }}>
									<IconButton
										size="small"
										sx={{
											mr: 2,
											...STYLES.icon,
										}}
										onClick={() => navigate("/" + ROUTING_TREE.CART)}
									>
										<StyledBadge
											badgeContent={cart.cart.length}
											color="secondary"
										>
											<ShoppingCartOutlinedIcon fontSize="small" />
										</StyledBadge>
									</IconButton>
								</Box>

								{auth.isAuthenticated ? (
									<Tooltip title="Open settings">
										<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
											<Typography
												variant="h6"
												sx={{
													fontWeight: "bold",
													mr: 1,
													display: { xs: "none", sm: "block" },
												}}
											>
												{auth.user.first_name}
											</Typography>
											<Avatar
												alt={auth.user.first_name}
												src={auth.user.avatar}
											/>
										</IconButton>
									</Tooltip>
								) : (
									<Link to={`/${ROUTING_TREE.AUTH.LOGIN}`}>
										<Button
											sx={{ color: (theme) => theme.palette.text.primary }}
											endIcon={<PermIdentityOutlinedIcon />}
										>
											Login
										</Button>
									</Link>
								)}
								<Menu
									sx={{ mt: "45px" }}
									id="menu-appbar"
									anchorEl={anchorElUser}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									open={Boolean(anchorElUser)}
									onClose={handleCloseUserMenu}
								>
									<Link
										to={`/${ROUTING_TREE.USER.USER}/${ROUTING_TREE.USER.PROFILE}`}
									>
										<MenuItem onClick={handleCloseUserMenu}>
											<Typography textAlign="center">My Profile</Typography>
										</MenuItem>
									</Link>
									<Link
										to={`/${ROUTING_TREE.USER.USER}/${ROUTING_TREE.USER.ORDERS}`}
									>
										<MenuItem onClick={handleCloseUserMenu}>
											<Typography textAlign="center">My Orders</Typography>
										</MenuItem>
									</Link>
									<Link
										to={`/${ROUTING_TREE.USER.USER}/${ROUTING_TREE.USER.WISHLIST}`}
									>
										<MenuItem onClick={handleCloseUserMenu}>
											<Typography textAlign="center">My Wishlist</Typography>
										</MenuItem>
									</Link>
									{auth.user.user_type === "admin" && (
										<Link
											to={`/${ROUTING_TREE.ADMIN.ADMIN}/${ROUTING_TREE.ADMIN.DASHBOARD}`}
										>
											<MenuItem onClick={handleCloseUserMenu}>
												<Typography textAlign="center">Dashboard</Typography>
											</MenuItem>
										</Link>
									)}

									<MenuItem
										onClick={() => {
											dispatch(logout());
											handleCloseUserMenu();
										}}
									>
										<Typography textAlign="center">Logout</Typography>
									</MenuItem>
								</Menu>
							</Box>
						</Toolbar>
					</Container>
				</AppBar>
			</ElevationScroll>
			<Toolbar id="back-to-top-anchor" />

			{/* scroll Back to Top */}
			<ScrollTopTrigger {...props}>
				<Tooltip title="Scroll To Top">
					<Fab color="secondary" size="small" aria-label="scroll back to top">
						<KeyboardArrowUpIcon />
					</Fab>
				</Tooltip>
			</ScrollTopTrigger>
		</>
	);
};

export default Navbar;
