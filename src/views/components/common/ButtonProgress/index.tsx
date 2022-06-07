import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";

const ButtonProgress = ({
	btnType,
	btnText,
	isLoading,
}: {
	btnType?: "button" | "submit" | "reset" | undefined;
	btnText: string;
	isLoading: boolean;
}) => {
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Box sx={{ position: "relative" }}>
				<Button type={btnType} variant="text" disabled={isLoading}>
					{btnText}
				</Button>
				{isLoading && (
					<CircularProgress
						size={24}
						sx={{
							color: green[500],
							position: "absolute",
							top: "50%",
							left: "50%",
							marginTop: "-12px",
							marginLeft: "-12px",
						}}
					/>
				)}
			</Box>
		</Box>
	);
};

export default ButtonProgress;
