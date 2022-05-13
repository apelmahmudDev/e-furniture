import Chart from "react-apexcharts";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { STYLES } from "../../../../styles/styles";

const OrderChart = () => {
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
		series: [44, 55, 13],
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
					<Chart
						options={chart.options}
						series={chart.series}
						type="donut"
						width={370}
					/>
				</Box>
			</CardContent>
		</Card>
	);
};

export default OrderChart;
