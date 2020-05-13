import "./Checkbox2.scss";

import React from "react";
import Spinner from "../Spinner/Spinner";

const Checkbox2 = (props) => {
	const labelClasses = ["checkbox-label"];
	if (props.isLoading) {
		labelClasses.push("loading");
	}

	return (
		<div className="checkbox2-wrapper">
			<input
				type="checkbox"
				name=""
				id="checkbox2"
				onChange={props.changed}
			/>
			<label className={labelClasses.join(" ")} htmlFor="checkbox2">
				{props.isLoading ? (
					<Spinner isLoading={props.isLoading} />
				) : (
					<span className="checkbox"></span>
				)}
				Check me
			</label>
		</div>
	);
};

export default Checkbox2;
