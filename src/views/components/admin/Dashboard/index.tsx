import { Box, Card, Grid, Typography } from "@mui/material";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { STYLES } from "../../../../styles/styles";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import { StyledCardContent } from "./styledComponents/StyledCardContent";
import { FlexBox } from "./styledComponents/FlexBox";
import { StyledTypography } from "./styledComponents/StyledTypography";
import ProductSalesChart from "./ProductSalesChart";
import OrderChart from "./OrderChart";
import CustomerTable from "./CustomerTable";
import {
	useGetOrderByStatusQuery,
	useGetOrdersQuery,
} from "../../../../store/api/api.order";
import { useGetUsersQuery } from "../../../../store/api/api.users";

const Dashboard = () => {
	const { data: orders } = useGetOrdersQuery();
	const { data: users } = useGetUsersQuery();
	const { data: completeOrders } = useGetOrderByStatusQuery("Done");

	const totalEarnings = completeOrders?.data?.reduce(
		(acc, order) => acc + order.checkoutSummary.total,
		0
	);

	return (
		<>
			{/* dashboard top section - card*/}
			<Box>
				<Grid container spacing={2}>
					{[
						{ title: "Order Receive", amount: orders?.data?.length || 0 },
						{ title: "Total Customers", amount: users?.data?.length || 0 },
						{
							title: "Total Earning",
							amount: Math.ceil(Number(totalEarnings)) || 0,
						},
					].map((item, idx) => (
						<Grid key={idx} item xs={12} sm={6} md={4}>
							<Card sx={{ ...STYLES.boxShadow1 }}>
								<StyledCardContent>
									<Box>
										<FlexBox>
											<Typography variant="h5" color="primary">
												{item.amount}
											</Typography>
											<HourglassEmptyIcon
												sx={{ height: 16, width: 16 }}
												color="primary"
												fontSize="small"
											/>
										</FlexBox>
										<StyledTypography noWrap variant="body2">
											{item.title}
										</StyledTypography>
									</Box>
									<Box>
										<EnergySavingsLeafIcon
											sx={{ height: 35, width: 35 }}
											color="primary"
										/>
									</Box>
								</StyledCardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>

			{/* dashboard middle section - chart*/}
			<Box my={2}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={7}>
						<ProductSalesChart />
					</Grid>
					<Grid item xs={12} md={5}>
						<OrderChart />
					</Grid>
				</Grid>
			</Box>

			{/* dashboard footer section - customer data*/}
			<Box>
				<CustomerTable />
			</Box>
		</>
	);
};

export default Dashboard;
