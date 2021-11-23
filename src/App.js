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

import "./App.css";

const API_URL = `http://localhost:5000`;

const App = () => {
	// State initilizations
	const [tickets, setTickets] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	// Asynchronously fetch ticket data from API
	const getData = async () => {
		const res = await axios.get(`${API_URL}/tickets`);
		const incomingTix = res.data.tickets;
		// console.log("tickets: ", incomingTix);
		setTickets(incomingTix);
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
			<div className="app-body">
				<Sidebar />
				<Box className="side-info-container">
					<Card variant="outlined">
						<CardContent>
							<Typography
								sx={{ fontSize: 14 }}
								color="text.secondary"
								gutterBottom>
								THis is a dialog with adiitional information about the ticket
							</Typography>
							<Button size="small">Show More</Button>
						</CardContent>
					</Card>

					<Card variant="outlined">
						<CardContent>
							<Typography
								sx={{ fontSize: 14 }}
								color="text.secondary"
								gutterBottom>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Rhoncus dolor purus non enim praesent elementum facilisis leo
								vel. Risus at ultrices mi tempus imperdiet. Semper risus in
								hendrerit gravida rutrum quisque non tellus. Convallis convallis
								tellus id interdum velit laoreet id donec ultrices. Odio morbi
								quis commodo odio aenean sed adipiscing. Amet nisl suscipit
								adipiscing bibendum est ultricies integer quis. Cursus euismod
								quis viverra nibh cras. Metus vulputate eu scelerisque felis
								imperdiet proin fermentum leo. Mauris commodo quis imperdiet
								massa tincidunt. Cras tincidunt lobortis feugiat vivamus at
								augue. At augue eget arcu dictum varius duis at consectetur
								lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
								sapien faucibus et molestie ac.
							</Typography>
							<Button size="small">Show More</Button>
						</CardContent>
					</Card>

					<Card variant="outlined">
						<CardContent>
							<Typography
								sx={{ fontSize: 14 }}
								color="text.secondary"
								gutterBottom>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Rhoncus dolor purus non enim praesent elementum facilisis leo
								vel. Risus at ultrices mi tempus imperdiet. Semper risus in
								hendrerit gravida rutrum quisque non tellus. Convallis convallis
								tellus id interdum velit laoreet id donec ultrices. Odio morbi
								quis commodo odio aenean sed adipiscing. Amet nisl suscipit
								adipiscing bibendum est ultricies integer quis. Cursus euismod
								quis viverra nibh cras. Metus vulputate eu scelerisque felis
								imperdiet proin fermentum leo. Mauris commodo quis imperdiet
								massa tincidunt. Cras tincidunt lobortis feugiat vivamus at
								augue. At augue eget arcu dictum varius duis at consectetur
								lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
								sapien faucibus et molestie ac.
							</Typography>
							<Button size="small">Show More</Button>
						</CardContent>
					</Card>
				</Box>
				<div className="tickets-container">
					<h1>Ticket Viewer</h1>
					<li className="tickets">{renderTickets()}</li>
					<Pagination
						postsPerPage={postsPerPage}
						totalPosts={tickets.length}
						paginate={paginate}
						currentPage={currentPage}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
