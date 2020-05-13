import "./Checkbox3.scss";

import React from "react";

// import Spinner from "./../Spinner/Spinner";

const Checkbox3 = (props) => {
	// const checkboxClasses = ["checkbox", props.checkboxState];
	// console.log(checkboxClasses);

	return (
		<div
			className={`checkbox3-wrapper ${
				props.checkboxState === "loading" ? "disabled" : ""
			}`}
		>
			<input
				type="checkbox"
				name=""
				id="checkbox3"
				onChange={props.changed}
				disabled={props.checkboxState === "loading"}
			/>
			<label
				className={`checkbox-label ${props.checkboxState}`}
				htmlFor="checkbox3"
			>
				<span className={`checkbox ${props.checkboxState}`}></span>
				Check me
			</label>
		</div>
	);
};

export default Checkbox3;
