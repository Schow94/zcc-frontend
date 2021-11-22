import React, { useState } from "react";
import "./Tickets.css";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Tickets = ({ ticket }) => {
	const [open, setOpen] = useState(false);

	const toggleTicket = () => {
		return setOpen(!open);
	};

	const bull = (
		<Box
			component="span"
			sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
			•
		</Box>
	);

	const card = (
		<React.Fragment>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					Subject
				</Typography>
				<Typography variant="h5" component="div">
					{ticket.subject}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					Status: {ticket.status}
				</Typography>
				<Typography variant="body2">
					Description: {ticket.description}
				</Typography>
				<br />
				<Typography variant="body2">
					Created: {ticket.created_at}
					<br />
					Last Updated: {ticket.updated_at}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">
					<a href={ticket.url}>Learn More</a>
				</Button>
				<Button size="small" onClick={() => toggleTicket()}>
					Show Less
				</Button>
			</CardActions>
		</React.Fragment>
	);
	const Closed = (
		<React.Fragment>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					Subject: {ticket.subject} Status: {ticket.status} Created:
					{ticket.created_at}
					<Button size="small" onClick={() => toggleTicket()}>
						Show More
					</Button>
				</Typography>
			</CardContent>
		</React.Fragment>
	);

	return (
		<Box sx={{ minWidth: 275 }}>
			{open ? (
				<Card variant="outlined">{card}</Card>
			) : (
				<Card variant="outlined">{Closed}</Card>
			)}
		</Box>
	);
};

export default Tickets;
