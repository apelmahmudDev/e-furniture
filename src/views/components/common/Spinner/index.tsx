import Box from "@mui/material/Box";
import CircularProgress, {
	circularProgressClasses,
	CircularProgressProps,
} from "@mui/material/CircularProgress";
import { ChairIcon } from "../../../../assets/icon";

// Inspired by the former Facebook spinners.
function EfurnitureCircularSpinner(props: CircularProgressProps) {
	return (
		<Box sx={{ display: "inline-block", position: "relative" }}>
			<CircularProgress
				variant="determinate"
				sx={{
					color: (theme) =>
						theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
				}}
				size={40}
				thickness={4}
				{...props}
				value={100}
			/>
			<CircularProgress
				variant="indeterminate"
				disableShrink
				sx={{
					animationDuration: "550ms",
					position: "absolute",
					left: 0,
					[`& .${circularProgressClasses.circle}`]: {
						strokeLinecap: "round",
					},
				}}
				size={40}
				thickness={4}
				{...props}
			/>
			<ChairIcon
				color="primary"
				sx={{
					position: "absolute",
					top: "44%",
					left: " 50%",
					transform: "translate(-50%, -50%)",
				}}
			/>
		</Box>
	);
}

const Spinner = () => {
	return <EfurnitureCircularSpinner />;
};

export default Spinner;
