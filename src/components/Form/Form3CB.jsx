import React, { Component } from "react";
import Checkbox3 from "../Checkbox/Checkbox3";

class Form3CB extends Component {
	constructor(props) {
		super(props);

		this.state = {
			checkboxState: "unchecked",
		};
	}

	handleCheckboxChange = () => {
		let checkboxPrevState = null;
		this.setState((prevState) => {
			checkboxPrevState = prevState.checkboxState;
			return {
				...this.state,
				checkboxState: "loading",
			};
		});

		setTimeout(() => {
			this.setState((prevState) => {
				if (checkboxPrevState === "checked") {
					return {
						...this.state,
						checkboxState: "unchecked",
					};
				} else {
					return {
						...this.state,
						checkboxState: "checked",
					};
				}
			});
		}, 500);
	};

	render() {
		return (
			<div className="Form">
				<Checkbox3
					changed={this.handleCheckboxChange}
					checkboxState={this.state.checkboxState}
				/>
			</div>
		);
	}
}

export default Form3CB;
