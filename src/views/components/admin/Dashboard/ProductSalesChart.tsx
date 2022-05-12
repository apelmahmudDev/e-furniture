import Chart from "react-apexcharts";
import { Card, CardContent } from "@mui/material";
import { STYLES } from "../../../../styles/styles";

const ProductSalesChart = () => {
	const chart = {
		series: [
			{
				name: "Sales",
				data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
			},
		],
		options: {
			chart: {
				height: 300,
				type: "line",
			},
			forecastDataPoints: {
				count: 7,
			},
			stroke: {
				width: 5,
				curve: "smooth",
			},
			xaxis: {
				type: "datetime",
				categories: [
					"1/11/2000",
					"2/11/2000",
					"3/11/2000",
					"4/11/2000",
					"5/11/2000",
					"6/11/2000",
					"7/11/2000",
					"8/11/2000",
					"9/11/2000",
					"10/11/2000",
					"11/11/2000",
					"12/11/2000",
					"1/11/2001",
					"2/11/2001",
					"3/11/2001",
					"4/11/2001",
					"5/11/2001",
					"6/11/2001",
				],
				tickAmount: 10,
				labels: {
					formatter: function (value: any, timestamp: any, opts: any) {
						return opts.dateFormatter(new Date(timestamp), "dd MMM");
					},
				},
			},
			title: {
				text: "Forecast",
				align: "left",
				style: {
					fontSize: "16px",
					color: "#666",
				},
			},
			fill: {
				type: "gradient",
				gradient: {
					shade: "dark",
					gradientToColors: ["#fe9c22"],
					shadeIntensity: 1,
					type: "horizontal",
					opacityFrom: 1,
					opacityTo: 1,
					stops: [0, 100, 100, 100],
				},
			},
			yaxis: {
				min: -10,
				max: 40,
			},
		},
	};

	return (
		<Card sx={{ ...STYLES.boxShadow1 }}>
			<CardContent>
				<Chart
					options={chart.options}
					series={chart.series}
					type="line"
					height={300}
				/>
			</CardContent>
		</Card>
	);
};

export default ProductSalesChart;
