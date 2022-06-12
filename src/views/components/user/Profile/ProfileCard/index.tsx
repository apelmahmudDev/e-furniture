import { Avatar, Box, Card, CardContent } from "@mui/material";
import { STYLES } from "../../../../../styles/styles";

const PrfileCard = () => {
	return (
		<Box>
			<Card sx={{ ...STYLES.boxShadow2 }}>
				<CardContent sx={{ display: "flex", justifyContent: "center" }}>
					<Avatar />
				</CardContent>
			</Card>
		</Box>
	);
};

export default PrfileCard;
