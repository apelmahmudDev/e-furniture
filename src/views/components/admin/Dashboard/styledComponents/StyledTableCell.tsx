import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTableCell = styled(Box)(
	({ theme }) => `
	width: 70px;
	padding: 1px 5px;
	border-radius: 3px;
	text-align: center;
  	color: ${theme.palette.secondary.light};
`
);
