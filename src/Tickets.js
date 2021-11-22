import React from "react";
import "./Tickets.css";

const Tickets = ({ ticket }) => {
	return (
		<div className="tickets" key={ticket.id}>
			<h3>Subject: {ticket.subject}</h3>
			<p>Status: {ticket.status}</p>
			<p>Description: {ticket.description}</p>
			<p>Created At: {ticket.created_at} </p>
			<p> Updated At: {ticket.updated_at}</p>
			<p>
				<a href={ticket.url}>More Info: </a>
			</p>
			<hr />
		</div>
	);
};

export default Tickets;
