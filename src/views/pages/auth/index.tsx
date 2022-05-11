import { Box } from "@mui/material";
import { IMAGES } from "../../../constants/themeData";
import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
	return (
		<Box
			sx={{
				backgroundImage: `url(${IMAGES.AuthBg})`,
				minHeight: "100vh",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{/* <Login /> */}
			<SignUp />
		</Box>
	);
};

export default Auth;
