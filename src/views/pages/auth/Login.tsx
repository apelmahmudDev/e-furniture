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
import { STYLES } from "../../../styles/styles";
import { useStyles } from "./styled";
import AppLogo from "../../components/common/AppLogo";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { ReactComponent as EncryptionSvg } from "../../../assets/svg/encryption.svg";
import { Link } from "react-router-dom";
import { ROUTING_TREE } from "../../../constants/siteUrls";

interface State {
	email: string;
	password: string;
	showPassword: boolean;
}

const Login = () => {
	const classes = useStyles();
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
										<Link to={ROUTING_TREE.HOME.HOME}>
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
									noValidate
									autoComplete="off"
								>
									<TextField
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
									<Button type="submit">Login</Button>
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
