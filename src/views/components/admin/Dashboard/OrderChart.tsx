import Chart from "react-apexcharts";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { STYLES } from "../../../../styles/styles";
import {
	useGetOrderByStatusQuery,
	useGetOrdersQuery,
} from "../../../../store/api/api.order";
import NoData from "../../common/NoData";

const OrderChart = () => {
	const { data: allOrders } = useGetOrdersQuery();
	const { data: pendingOrder } = useGetOrderByStatusQuery("Pending");
	const { data: deliveredOrder } = useGetOrderByStatusQuery("Done");

	const chart = {
		options: {
			chart: {
				width: 370,
				type: "donut",
			},
			legend: {
				position: "bottom",
				horizontalAlign: "center",
			},
			labels: ["Orders", "Pending", "Delivered"],
			responsive: [
				{
					breakpoint: 600,
					options: {
						chart: {
							width: "100%",
						},
					},
				},
			],
		},
		series: [
			allOrders?.data?.length || 0,
			pendingOrder?.data?.length || 0,
			deliveredOrder?.data?.length || 0,
		],
	};

	return (
		<Card
			sx={{
				...STYLES.boxShadow1,
				height: "100%",
			}}
		>
			<CardContent>
				<Typography gutterBottom>Order Status</Typography>
				<Box
					sx={{
						height: "100%",
						display: "flex",
						justifyContent: "center",
					}}
				>
					{chart.series.every((s) => s === 0) ? (
						<div>
							<NoData />
						</div>
					) : (
						<Chart
							options={chart.options}
							series={chart.series}
							type="donut"
							width={370}
						/>
					)}
				</Box>
			</CardContent>
		</Card>
	);
};

export default OrderChart;
