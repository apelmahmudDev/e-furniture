import { Card, CardContent } from "@mui/material";
import { STYLES } from "../../../../styles/styles";

// calender
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import { useState } from "react";

const Calender = () => {
	const [date, setDate] = useState<Date | null>(new Date());
	return (
		<Card sx={{ ...STYLES.boxShadow2 }}>
			<CardContent sx={{ "& .MuiCalendarPicker-root": { width: "100%" } }}>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<CalendarPicker
						date={date}
						onChange={(newDate) => setDate(newDate)}
					/>
				</LocalizationProvider>
			</CardContent>
		</Card>
	);
};

export default Calender;
