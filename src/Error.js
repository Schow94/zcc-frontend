import React from "react";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import "./Error.css";

const Error = (statusCode) => {
	return (
		<Stack sx={{ width: "100%" }} spacing={2}>
			<Alert variant="filled" severity="error">
				Error detected — We're working on it!
			</Alert>
		</Stack>
	);
};

export default Error;
