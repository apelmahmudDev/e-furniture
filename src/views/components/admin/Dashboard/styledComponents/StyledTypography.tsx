import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTypography = styled(Typography)(
	({ theme }) => `
  	color: ${theme.palette.text.secondary};
	text-transform: uppercase;
`
);
