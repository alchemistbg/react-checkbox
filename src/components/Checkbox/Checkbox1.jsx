import "./Checkbox1.scss";

import React from "react";

const checkbox1 = (props) => {
	let checkbox = (
		<div className={`checkbox ${props.isSelected ? "selected" : ""}`}></div>
	);

	if (props.isLoading) {
		checkbox = (
			<div
				className={`checkbox ${props.isLoading ? "loading" : ""}`}
			></div>
		);
	}

	return (
		<div className="checkbox1-wrapper" onClick={props.changed}>
			{checkbox}
			<p className="checkbox-label">{props.label}</p>
		</div>
	);
};

export default checkbox1;
