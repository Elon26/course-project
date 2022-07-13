import React from "react";

const BookMark = ({ status, ...rest }) => {
	return (
		< button className="btn btn-light btn-outline-dark" onClick={rest.onToggleBookMark} >
			<i className={status ? "bi bi-bookmark-heart-fill" : "bi bi-bookmark"}></i>
		</ button>
	)
}

export default BookMark;



