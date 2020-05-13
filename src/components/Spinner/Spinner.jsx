import "./Spinner.scss";

import React from "react";

const Spinner = (props) => {
	const spinnerClasses = ["Spinner"];
	if (props.isLoading) {
		spinnerClasses.push("loading");
	}

	return <div className={spinnerClasses.join(" ")}></div>;
};

export default Spinner;
