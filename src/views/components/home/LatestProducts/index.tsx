import { Container, Box, Grid } from "@mui/material";
import { useStyles } from "./styled";
import TabPanel from "./TabPanel";
import LatestCard from "../../common/LatestCard";
import Portion from "../../common/Portion";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const LatestProducts = () => {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box my={5} component="section">
			<Container>
				<Portion firstWord="Latest" lastWord="Products" />
				{/* <Grid container spacing={3}>
					{[...Array(6)].map((item, idx) => (
						<Grid key={idx} item xs={12} md={3} lg={4}>
							<LatestCard />
						</Grid>
					))}
				</Grid>  */}

				<Box sx={{ width: "100%" }}>
					<Box className={classes.tabsWrapper}>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label="basic tabs example"
						>
							<Tab label="New Arrival" {...a11yProps(0)} />
							<Tab label="Best Seller" {...a11yProps(1)} />
							<Tab label="Featured" {...a11yProps(2)} />
							<Tab label="Special Offer" {...a11yProps(3)} />
						</Tabs>
					</Box>
					<TabPanel value={value} index={0}>
						<Grid container spacing={3}>
							{[...Array(6)].map((item, idx) => (
								<Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
									<LatestCard />
								</Grid>
							))}
						</Grid>
					</TabPanel>
					<TabPanel value={value} index={1}>
						Best Seller
					</TabPanel>
					<TabPanel value={value} index={2}>
						Featured
					</TabPanel>
					<TabPanel value={value} index={3}>
						Special Offer
					</TabPanel>
				</Box>
			</Container>
		</Box>
	);
};

export default LatestProducts;
