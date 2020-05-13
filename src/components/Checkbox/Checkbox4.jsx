import "./Checkbox4.scss";

import React, { Component } from "react";
import Spinner from "../Spinner/Spinner";

class Checkbox4 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isChecked: false,
			isLoading: false,
		};
	}

	handleCheckboxCheck = () => {
		this.setState((prevState) => {
			return {
				...this.state,
				isChecked: !prevState.isChecked,
				isLoading: !prevState.isLoading,
			};
		});

		setTimeout(() => {
			this.setState((prevState) => {
				return {
					...this.state,
					isLoading: !prevState.isLoading,
				};
			});
		}, 500);
	};

	render() {
		const labelClasses = ["checkbox-label"];
		if (this.state.isLoading) {
			labelClasses.push("loading");
		} else {
			labelClasses.push("loaded");
		}

		return (
			<div className="checkbox4-wrapper">
				<input
					type="checkbox"
					name=""
					id="checkbox4"
					onChange={this.handleCheckboxCheck}
				/>

				<label className={labelClasses.join(" ")} htmlFor="checkbox4">
					{this.state.isLoading ? <Spinner /> : null}
					<span
						className={`checkbox ${
							this.state.isChecked ? "checked" : "unchecked"
						}`}
					></span>
					Check me
				</label>
			</div>
		);
	}
}

export default Checkbox4;
