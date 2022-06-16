import { Box, Typography } from "@mui/material";
import { ReactComponent as NotDataSvg } from "../../../assets/svg/no_data.svg";

// specially this NoData component for TableCell
const NoData = () => {
	return (
		<Box my={2}>
			<NotDataSvg />
			<Typography
				textAlign="center"
				sx={{
					my: 1,
				}}
			>
				No data!
			</Typography>
		</Box>
	);
};

export default NoData;
