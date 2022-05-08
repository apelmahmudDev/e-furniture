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

const pages = ["Home", "Products", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = (props: any) => {
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
							<Typography
								variant="h6"
								noWrap
								component="a"
								href="/"
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
									{pages.map((page) => (
										<MenuItem key={page} onClick={handleCloseNavMenu}>
											<Typography textAlign="center">{page}</Typography>
										</MenuItem>
									))}
								</Menu>
							</Box>
							<ChairIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
							<Typography
								variant="h5"
								noWrap
								component="a"
								href=""
								sx={{
									mr: 2,
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
							<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
								{pages.map((page) => (
									<Button
										key={page}
										onClick={handleCloseNavMenu}
										sx={{
											my: 2,
											color: (theme) => theme.palette.text.primary,
											display: "block",
										}}
									>
										{page}
									</Button>
								))}
							</Box>

							<Box sx={{ flexGrow: 0 }}>
								<Tooltip title="Open settings">
									<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
										<Avatar
											alt="Remy Sharp"
											src="/static/images/avatar/2.jpg"
										/>
									</IconButton>
								</Tooltip>
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
									{settings.map((setting) => (
										<MenuItem key={setting} onClick={handleCloseUserMenu}>
											<Typography textAlign="center">{setting}</Typography>
										</MenuItem>
									))}
								</Menu>
							</Box>
						</Toolbar>
					</Container>
				</AppBar>
			</ElevationScroll>
			<Toolbar id="back-to-top-anchor" />

			{/* scroll Back to Top */}
			<ScrollTopTrigger {...props}>
				<Fab color="secondary" size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTopTrigger>
		</>
	);
};

export default Navbar;