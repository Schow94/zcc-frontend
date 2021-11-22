import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

// const URL = `https://cors-anywhere.herokuapp.com`;
// const API_URL = `${URL}/https://zccschow.zendesk.com/api/v2/tickets`;
const API_URL = `http://localhost:5000`;

const App = () => {
	const getData = async () => {
		const res = await axios.get(API_URL);
		const tickets = res.data.tickets;
		console.log("DATA: ", tickets);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="App">
			<div>
				<h1>This is the App component</h1>
			</div>
		</div>
	);
};

export default App;
