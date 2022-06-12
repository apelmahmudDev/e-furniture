// styles
import { useStyles } from "./styled";
import { STYLES } from "../../../styles/styles";

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
import AppLogo from "../../components/common/AppLogo";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useEffect, useState } from "react";
import { ReactComponent as EncryptionSvg } from "../../../assets/svg/encryption.svg";
import { ROUTING_TREE } from "../../../constants/siteUrls";
import ButtonProgress from "../../components/common/ButtonProgress";
import Snackbar from "../../components/common/Snackbar";

// store
import { useLoginMutation } from "../../../store/api/api.users";
import { useAppDispatch } from "../../../store";
import { setAuth } from "../../../store/slice/authSlice";

import { Link, useNavigate, useLocation } from "react-router-dom";

interface State {
	email: string;
	password: string;
	showPassword: boolean;
}

export interface LoginUser {
	email: string;
	password: string;
}

const Login = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	const location: any = useLocation();
	const dispatch = useAppDispatch();
	const handleClickVariant = Snackbar();

	let from = location.state?.from?.pathname || "/";

	const [values, setValues] = useState<State>({
		email: "",
		password: "",
		showPassword: false,
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

	// login user func
	const [login, { data, error, isLoading }] = useLoginMutation();

	const handleFormSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();

		const loggedInUser: LoginUser = {
			email: values.email,
			password: values.password,
		};
		login(loggedInUser);
	};

	// display message
	useEffect(() => {
		if (data) {
			if (data.user) {
				handleClickVariant(
					"success",
					`${data.user.user_type} logged in successfully`
				);
				dispatch(setAuth(data.user));
				navigate(from, { replace: true });
			}

			if (data.status === "error") {
				handleClickVariant("error", "There is an error occurred");
			}
		}

		if (error) {
			if ("error" in error) {
				handleClickVariant("error", "There is an error occurred");
			}
			if ("data" in error) {
				if (error.data) {
					handleClickVariant("error", "Bad credentials, Please try agian");
				}
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
									Login
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
									<Link to={"/" + ROUTING_TREE.AUTH.SIGNUP}>
										<Button>Sign Up</Button>
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
										size="small"
										fullWidth
										label="Email"
										type="email"
										onChange={handleChange("email")}
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
										btnText="Login"
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

export default Login;
