import {
	Box,
	Container,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import ChairIcon from "@mui/icons-material/Chair";
import { Link } from "react-router-dom";
import { ROUTING_TREE } from "../../../../constants/siteUrls";

// icons
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const explorArr = [
	{ id: "ex_1", name: "Home", link: ROUTING_TREE.HOME },
	{ id: "ex_2", name: "Shop", link: ROUTING_TREE.SHOP },
	{ id: "ex_3", name: "About Us", link: "/about-us" },
];
const flollowArr = [
	{
		id: "fl_1",
		name: "Facebook",
		icon: <FacebookIcon sx={{ color: "text.secondary" }} />,
		link: "/",
	},
	{
		id: "fl_2",
		name: "Instagram",
		icon: <InstagramIcon sx={{ color: "text.secondary" }} />,
		link: "/",
	},
	{
		id: "fl_3",
		name: "Youtube",
		icon: <YouTubeIcon sx={{ color: "text.secondary" }} />,
		link: "/",
	},
];

const Footer = () => {
	return (
		<Box
			component="section"
			sx={{
				p: 2,
				minHeight: 300,
				maxHeight: "auto",
				bgcolor: "#1f1f21",
				mt: "auto",
			}}
		>
			<Container>
				<Grid container spacing={5}>
					<Grid item xs={12} sm={6} md={4}>
						<>
							<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
								<ChairIcon
									sx={{ color: (theme) => theme.palette.secondary.main }}
								/>
								<Typography
									variant="h6"
									noWrap
									component="a"
									href="/"
									sx={{
										fontFamily: "Titillium Web",
										fontWeight: 700,
										letterSpacing: ".1rem",
										color: (theme) => theme.palette.secondary.main,
										textDecoration: "none",
									}}
								>
									e-furniture
								</Typography>
							</Box>
							<Box mt={1.25}>
								<DateContent />
							</Box>
						</>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<FooterTitle>Explor</FooterTitle>
						<nav aria-label="footer-explor-link">
							<List
								sx={{ "& .MuiTypography-root:hover": { color: "#f1f1f1" } }}
							>
								{explorArr.map((item) => (
									<ListItem disablePadding key={item.id}>
										<Link to={item.link}>
											<ListItemText secondary={item.name} />
										</Link>
									</ListItem>
								))}
							</List>
						</nav>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<FooterTitle>Follow</FooterTitle>
						<nav aria-label="follow-us">
							<List
								sx={{ "& .MuiTypography-root:hover": { color: "#f1f1f1" } }}
							>
								{flollowArr.map((item) => (
									<Link to={item.link} key={item.id}>
										<ListItem disablePadding sx={{ my: 0.5 }}>
											<ListItemIcon>{item.icon}</ListItemIcon>
											<ListItemText secondary={item.name} />
										</ListItem>
									</Link>
								))}
							</List>
						</nav>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;

// component
const DateContent = () => {
	const passingYear = 2022;
	const currentYear = new Date().getFullYear();

	if (currentYear > passingYear) {
		return (
			<Typography sx={{ fontSize: 18 }} color="text.secondary">
				&copy; {`${passingYear}-${new Date().getFullYear()}`}
			</Typography>
		);
	} else {
		return (
			<Typography sx={{ fontSize: 18 }} color="text.secondary">
				&copy; {passingYear}
			</Typography>
		);
	}
};

const FooterTitle = ({ children }: { children: React.ReactNode }) => {
	return (
		<Typography
			sx={{
				color: "secondary.main",
				textTransform: "uppercase",
				fontWeight: "medium",
			}}
		>
			{children}
		</Typography>
	);
};
