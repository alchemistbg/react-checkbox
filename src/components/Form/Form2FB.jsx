import React, { useState } from "react";
import Checkbox2 from "./../Checkbox/Checkbox2";

const Form2FB = () => {
	const [checkboxIsLoading, setCheckboxIsLoading] = useState(false);
	const [checkboxIsSelected, setCheckboxIsSelected] = useState(false);

	const handleCheckboxChange = () => {
		setCheckboxIsLoading((prevState) => !prevState);
		setCheckboxIsSelected((prevState) => !prevState);

		setTimeout(() => {
			setCheckboxIsLoading((prevState) => !prevState);
		}, 500);
	};

	return (
		<div className="Form">
			<Checkbox2
				key="1"
				changed={handleCheckboxChange}
				isLoading={checkboxIsLoading}
				isSelected={checkboxIsSelected}
				label="Check me"
			/>
		</div>
	);
};

export default Form2FB;
