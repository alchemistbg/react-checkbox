import React, { Component } from "react";
import Checkbox4 from "../Checkbox/Checkbox4";

class Form4CB extends Component {
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
				<Checkbox4
					changed={this.handleCheckboxChange}
					checkboxState={this.state.checkboxState}
				/>
			</div>
		);
	}
}

export default Form4CB;
