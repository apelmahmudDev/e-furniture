import { Container, Box, Grid } from "@mui/material";
import { useStyles } from "./styled";
import TabPanel from "./TabPanel";
import LatestCard from "../../common/LatestCard";
import Portion from "../../common/Portion";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { useGetFilteredProductsQuery } from "../../../../store/api/api.product";
import Spinner from "../../common/Spinner";
import ServerError from "../../common/ServerError";

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const LatestProducts = () => {
	const classes = useStyles();

	const [value, setValue] = useState(0);
	const [category, setCategory] = useState("new_arrival");

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
		switch (newValue) {
			case 0:
				setCategory("new_arrival");
				break;
			case 1:
				setCategory("best_seller");
				break;
			case 2:
				setCategory("featured");
				break;
			default:
				break;
		}
	};

	// get filtered products
	const { data, error, isFetching } = useGetFilteredProductsQuery({
		category: category,
	});

	return (
		<Box my={5} component="section">
			<Container>
				<Portion firstWord="Latest" lastWord="Products" />

				<Box sx={{ width: "100%" }}>
					{/* if server side error */}
					{error ? (
						<ServerError />
					) : (
						<>
							<Box className={classes.tabsWrapper}>
								<Tabs
									value={value}
									onChange={handleChange}
									aria-label="basic tabs example"
								>
									<Tab label="New Arrival" {...a11yProps(0)} />
									<Tab label="Best Seller" {...a11yProps(1)} />
									<Tab label="Featured" {...a11yProps(2)} />
								</Tabs>
							</Box>
							<TabPanel value={value} index={0}>
								{isFetching ? (
									<Box textAlign="center">
										<Spinner />
									</Box>
								) : (
									<Grid container spacing={3}>
										{data?.data?.map((product, idx) => (
											<Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
												<LatestCard product={product} />
											</Grid>
										))}
									</Grid>
								)}
							</TabPanel>
							<TabPanel value={value} index={1}>
								{isFetching ? (
									<Box textAlign="center">
										<Spinner />
									</Box>
								) : (
									<Grid container spacing={3}>
										{data?.data?.map((product, idx) => (
											<Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
												<LatestCard product={product} />
											</Grid>
										))}
									</Grid>
								)}
							</TabPanel>
							<TabPanel value={value} index={2}>
								{isFetching ? (
									<Box textAlign="center">
										<Spinner />
									</Box>
								) : (
									<Grid container spacing={3}>
										{data?.data?.map((product, idx) => (
											<Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
												<LatestCard product={product} />
											</Grid>
										))}
									</Grid>
								)}
							</TabPanel>
						</>
					)}
				</Box>
			</Container>
		</Box>
	);
};

export default LatestProducts;
