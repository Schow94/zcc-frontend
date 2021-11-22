import { useEffect, useState } from "react";
import axios from "axios";

import Tickets from "./Tickets";
import Pagination from "./Pagination";

import "./App.css";

const API_URL = `http://localhost:5000`;

const App = () => {
	const [tickets, setTickets] = useState([]);
	const getData = async () => {
		const res = await axios.get(API_URL);
		const tickets = res.data.tickets;
		setTickets(tickets);
	};

	useEffect(() => {
		getData();
	}, []);

	const renderTickets = () => {
		return tickets.map((t) => {
			return <Tickets key={t.id} ticket={t} />;
		});
	};

	return (
		<div className="App">
			<div className="app-body">
				<div className="tickets-container">
					<h1>Ticket Viewer</h1>
					<div>{renderTickets()}</div>
				</div>
				<Pagination />
			</div>
		</div>
	);
};

export default App;
