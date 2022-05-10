import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Grid,
	Typography,
	TextField,
} from "@mui/material";
import { STYLES } from "../../../../styles/styles";
import { useStyles } from "./styled";
import AppLogo from "../../../components/common/AppLogo";

const SignUp = () => {
	const classes = useStyles();

	return (
		<Container maxWidth="sm">
			<Card sx={{ ...STYLES.boxShadow2 }}>
				<CardContent>
					<Grid container>
						<Grid item xs md={7}>
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<Box sx={{ flexGrow: 1 }}>
									<AppLogo />
								</Box>
								<Button>Login</Button>
							</Box>
							{/* form */}
							<Box
								component="form"
								sx={{
									"& .MuiTextField-root": { my: 1 },
								}}
								noValidate
								autoComplete="off"
							>
								<TextField
									fullWidth
									error
									id="outlined-error"
									label="Error"
									defaultValue="Hello World"
								/>
								<TextField
									fullWidth
									error
									id="outlined-error-helper-text"
									label="Error"
									defaultValue="Hello World"
									helperText="Incorrect entry."
								/>
							</Box>
						</Grid>
						<Grid item xs md={4}>
							<Avatar
								className={classes.authAvatar}
								src={
									"https://img.freepik.com/free-vector/workroom-interior-flat-design-concept_1308-99979.jpg?t=st=1652164892~exp=1652165492~hmac=62d3143aab73aef6c353d5ae847c225b98e5c37e7f07c4bf94980a3088010e1f&w=996"
								}
								alt="Sign up"
							/>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Container>
	);
};

export default SignUp;
