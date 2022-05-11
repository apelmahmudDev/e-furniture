import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Grid,
	TextField,
	FormControl,
	OutlinedInput,
	InputAdornment,
	IconButton,
	InputLabel,
	Typography,
} from "@mui/material";
import { useStyles } from "./styled";
import AppLogo from "../../components/common/AppLogo";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { ReactComponent as EncryptionSvg } from "../../../assets/svg/encryption.svg";
import { STYLES } from "../../../styles/styles";

interface State {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
	showPassword: boolean;
	acceptedTermsAndCondition: boolean;
}

const SignUp = () => {
	const classes = useStyles();
	const [values, setValues] = useState<State>({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		showPassword: false,
		acceptedTermsAndCondition: false,
	});

	console.log(values);

	const handleChange =
		(prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
			setValues({ ...values, [prop]: event.target.value });
		};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	return (
		<Container maxWidth="sm">
			<Card sx={{ ...STYLES.boxShadow2 }} className={classes.root}>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={5}>
							<Typography variant="h5" sx={{ fontWeight: 600 }}>
								Sign Up
							</Typography>
							<EncryptionSvg className={classes.authAvatar} />
						</Grid>
						<Grid item xs={12} sm={7}>
							<Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
								<Box sx={{ flexGrow: 1 }}>
									<AppLogo />
								</Box>
								<Button>Login</Button>
							</Box>
							{/* form */}
							<Box
								component="form"
								sx={{
									"& .MuiTextField-root, & .MuiFormControl-root": { my: 1 },
								}}
								noValidate
								autoComplete="off"
							>
								<TextField
									size="small"
									fullWidth
									label="First Name"
									type="text"
									required
									// helperText="Incorrect entry."
								/>
								<TextField
									size="small"
									fullWidth
									label="Last Name"
									type="text"
									required
									// helperText="Incorrect entry."
								/>
								<TextField
									size="small"
									fullWidth
									label="Phone"
									type="tel"
									required
									// helperText="Incorrect entry."
								/>
								<TextField
									size="small"
									fullWidth
									label="Email"
									type="email"
									required
									// helperText="Incorrect entry."
								/>
								<FormControl required size="small" fullWidth variant="outlined">
									<InputLabel htmlFor="outlined-adornment-password">
										Password
									</InputLabel>
									<OutlinedInput
										id="outlined-adornment-password"
										type={values.showPassword ? "text" : "password"}
										value={values.password}
										onChange={handleChange("password")}
										endAdornment={
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowPassword}
													onMouseDown={handleMouseDownPassword}
													edge="end"
												>
													{values.showPassword ? (
														<VisibilityOff />
													) : (
														<Visibility />
													)}
												</IconButton>
											</InputAdornment>
										}
										label="Password"
									/>
								</FormControl>
								<Button type="submit">Sign Up</Button>
							</Box>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Container>
	);
};

export default SignUp;
