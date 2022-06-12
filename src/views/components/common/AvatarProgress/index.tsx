import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { Avatar } from "@mui/material";

const AvatarProgress = ({
	isLoading,
	imgSrc,
}: {
	isLoading: boolean;
	imgSrc: string;
}) => {
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Box sx={{ m: 1, position: "relative" }}>
				<Avatar src={imgSrc} alt="avatar" />
				{isLoading && (
					<CircularProgress
						size={52}
						color="primary"
						sx={{
							position: "absolute",
							top: -6,
							left: -6,
							zIndex: 1,
						}}
					/>
				)}
			</Box>
		</Box>
	);
};

export default AvatarProgress;
