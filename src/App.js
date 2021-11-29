import { useEffect, useState } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import Tickets from "./Tickets";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";
import Error from "./Error";

import "./App.css";

const API_URL = `http://localhost:5000`;

const App = () => {
	// State initilizations
	const [tickets, setTickets] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);
	const [statusCode, setStatusCode] = useState(0);

	// Asynchronously fetch ticket data from API
	const getData = async () => {
		const res = await axios.get(`${API_URL}/tickets`);
		const incomingTix = res.data.tickets;
		setStatusCode(res.status);
		// Only renderTickets & calculate pagination if statuscode === 200
		if (res.status === 200) {
			setTickets(incomingTix);
		}
	};

	// Fetch API data on initial page load
	useEffect(() => {
		getData();
	}, []);

	const renderTickets = () => {
		return currentTickets.map((t) => {
			return <Tickets key={t.id} ticket={t} />;
		});
	};

	//Get currenPosts
	const indexOfLastPost = currentPage * postsPerPage; // Page 1 * 10 posts per page --> indexOfLastPost is 10
	const indexOfFirstPost = indexOfLastPost - postsPerPage; // For Page 1 --> 10 - 10 = 0 --> indexOfFirstPost is 0
	const currentTickets = tickets.slice(indexOfFirstPost, indexOfLastPost); // slice(0,10)

	const paginate = (num) => setCurrentPage(num);

	return (
		<div className="App">
			{statusCode === 200 ? (
				<div className="app-body">
					<Sidebar />

					<div className="tickets-container">
						<h1>Ticket Viewer</h1>
						<p>
							Tickets on this page: <b>{currentTickets.length}</b> Total
							Tickets: <b>{tickets.length}</b>
						</p>
						<li className="tickets">{renderTickets()}</li>
						<Pagination
							postsPerPage={postsPerPage}
							totalPosts={tickets.length}
							paginate={paginate}
							currentPage={currentPage}
						/>
					</div>
				</div>
			) : (
				<Error statusCode={statusCode} />
			)}
		</div>
	);
};

export default App;
