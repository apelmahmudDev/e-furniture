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
import { useEffect, useState } from "react";
import { ReactComponent as EncryptionSvg } from "../../../assets/svg/encryption.svg";
import { STYLES } from "../../../styles/styles";
import { ROUTING_TREE } from "../../../constants/siteUrls";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../../../store/api/api.users";
import Snackbar from "../../components/common/Snackbar";
import ButtonProgress from "../../components/common/ButtonProgress";
interface State {
	first_name: string;
	last_name: string;
	phone: string;
	email: string;
	password: string;
	confirmPassword: string;
	showPassword: boolean;
	acceptedTermsAndCondition: boolean;
}
export interface User {
	first_name: string;
	last_name: string;
	phone: string;
	email: string;
	password: string;
	user_type: string;
	avatar: string;
}

const SignUp = () => {
	const navigate = useNavigate();
	const classes = useStyles();
	const handleClickVariant = Snackbar();

	const [values, setValues] = useState<State>({
		first_name: "",
		last_name: "",
		phone: "",
		email: "",
		password: "",
		confirmPassword: "",
		showPassword: false,
		acceptedTermsAndCondition: false,
	});

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

	// add new user
	const [signUp, { data, error, isLoading }] = useSignUpMutation();

	const handleFormSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		const newUser: User = {
			first_name: values.first_name,
			last_name: values.last_name,
			phone: values.phone,
			email: values.email,
			password: values.password,
			user_type: "user",
			avatar: "",
		};
		signUp(newUser);
	};

	useEffect(() => {
		if (data) {
			handleClickVariant("success", "New user created");
			setTimeout(() => {
				navigate("/" + ROUTING_TREE.AUTH.LOGIN);
			}, 3000);
		}
		if (error) {
			if ("status" in error) {
				handleClickVariant("error", "Email already exists");
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, error]);

	return (
		<Box
			sx={{
				...STYLES.auth,
			}}
		>
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
										<Link to={ROUTING_TREE.HOME}>
											<AppLogo />
										</Link>
									</Box>

									<Link to={"/" + ROUTING_TREE.AUTH.LOGIN}>
										<Button>Login</Button>
									</Link>
								</Box>
								{/* form */}
								<Box
									component="form"
									sx={{
										"& .MuiTextField-root, & .MuiFormControl-root": { my: 1 },
									}}
									autoComplete="off"
									onSubmit={handleFormSubmit}
								>
									<TextField
										onChange={handleChange("first_name")}
										size="small"
										fullWidth
										label="First Name"
										type="text"
										required
										// helperText="Incorrect entry."
									/>
									<TextField
										onChange={handleChange("last_name")}
										size="small"
										fullWidth
										label="Last Name"
										type="text"
										required
										// helperText="Incorrect entry."
									/>
									<TextField
										onChange={handleChange("phone")}
										size="small"
										fullWidth
										label="Phone"
										type="tel"
										required
										// helperText="Incorrect entry."
									/>
									<TextField
										onChange={handleChange("email")}
										size="small"
										fullWidth
										label="Email"
										type="email"
										required
										// helperText="Incorrect entry."
									/>
									<FormControl
										required
										size="small"
										fullWidth
										variant="outlined"
									>
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
									<ButtonProgress
										btnType="submit"
										btnText="Sign Up"
										isLoading={isLoading}
									/>
								</Box>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Container>
		</Box>
	);
};

export default SignUp;
