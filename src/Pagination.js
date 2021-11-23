import * as React from "react";
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		// <Stack spacing={2}>
		// 	{/* <Pagination count={10} color="primary" /> */}
		// </Stack>
		<nav className="pagination-container">
			<ul className="pagination">
				{pageNumbers.map((num) => {
					return (
						<li
							onClick={() => paginate(num)}
							key={num}
							className={`page-item ${num === currentPage ? `active` : ""}`}>
							<a href="!#" className="page-link">
								{num}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
export default Pagination;
