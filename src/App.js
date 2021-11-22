import { useEffect, useState } from "react";
import axios from "axios";

import Tickets from "./Tickets";
import Pages from "./Pages";

import "./App.css";

// const URL = `https://cors-anywhere.herokuapp.com`;
// const API_URL = `${URL}/https://zccschow.zendesk.com/api/v2/tickets`;
const API_URL = `http://localhost:5000`;

const App = () => {
	const [tickets, setTickets] = useState([]);
	const getData = async () => {
		const res = await axios.get(API_URL);
		const tickets = res.data.tickets;
		console.log("DATA: ", tickets);
		setTickets(tickets);
	};

	useEffect(() => {
		getData();
	}, []);

	const renderTickets = () => {
		return tickets.map((t) => {
			console.log(t);
			return <Tickets ticket={t} />;
		});
	};

	return (
		<div className="App">
			<div className="app-body">
				<div className="tickets-container">
					<h1>Ticket Viewer</h1>
					<div>{renderTickets()}</div>
				</div>
				<Pages />
			</div>
		</div>
	);
};

export default App;
