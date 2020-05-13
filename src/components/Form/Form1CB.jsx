import React, { Component } from "react";

import Checkbox1 from "../Checkbox/Checkbox1";

class Form1CB extends Component {
	constructor(props) {
		super(props);

		this.state = {
			checkboxIsLoading: false,
			checkboxIsSelected: false,
		};
	}

	handleCheckboxChange = () => {
		this.setState((prevState) => {
			return {
				...this.state,
				checkboxIsLoading: !prevState.checkboxIsLoading,
				checkboxIsSelected: !prevState.checkboxIsSelected,
			};
		});

		setTimeout(() => {
			this.setState((prevState) => {
				return {
					...this.state,
					checkboxIsLoading: !prevState.checkboxIsLoading,
				};
			});
		}, 500);
	};

	render() {
		return (
			<div className="Form">
				<Checkbox1
					key="1"
					changed={this.handleCheckboxChange}
					isLoading={this.state.checkboxIsLoading}
					isSelected={this.state.checkboxIsSelected}
					label="Check me"
				/>
			</div>
		);
	}
}

export default Form1CB;
