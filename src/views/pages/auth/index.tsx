import { Box } from "@mui/material";
import SignUp from "./signUp";

const Auth = () => {
	return (
		<Box
			sx={{
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<SignUp />
		</Box>
	);
};

export default Auth;
