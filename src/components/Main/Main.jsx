import "./Main.scss";

import React from "react";

import Section from "./../Section/Section";
import Form1CB from "../Form/Form1CB";
import Form1FB from "../Form/Form1FB";
import Form2FB from "../Form/Form2FB";
import Form3CB from "../Form/Form3CB";
import Form4CB from "../Form/Form4CB";

const Main = () => {
	return (
		<div className="Main">
			<Section
				header="Checkbox in Functional container"
				introText="The container of the checkbox is a functional component. Its state is managed by the checkbox using useState hook."
			>
				<div className="FormContainer">
					<Form1FB />
					<div className="formDescription">
						<p>
							This <strong>checkbox</strong> component doesn't use
							standard HTML checkbox input element. It mimics the
							behavior of HTML checkbox by using the state of its
							container. Visual effects of the checkbox component
							is achieved by using mainly CSS styling. For the
							tick mark one symbol from Dingbats unicode subset is
							used. Loading effects were achieved by playing with
							some{" "}
							<strong>
								<i>before</i>
							</strong>{" "}
							and{" "}
							<strong>
								<i>after</i>
							</strong>{" "}
							pseudo elements.{" "}
							<a
								href="https://github.com/alchemistbg/react-checkbox/blob/master/src/components/Checkbox/Checkbox1.jsx"
								target="_blank"
								rel="noreferrer noopener"
							>
								Here is the source code of the{" "}
								<strong>checkbox</strong>
							</a>
							.
						</p>
					</div>
				</div>
			</Section>
			<Section
				header="Checkbox in Class-based container"
				introText="This component uses React class-based component. Its state is managed using state object and setState method to change the state."
			>
				<div className="FormContainer">
					<Form1CB />
					<div className="formDescription">
						<p>
							The <strong>checkbox</strong> used here is
							completely the same as the above.
						</p>
					</div>
				</div>
			</Section>
			<Section
				header="Checkbox in Functional container"
				introText="The container of the checkbox is a functional component. Its state is managed by the checkbox using useState hook."
			>
				<div className="FormContainer">
					<Form2FB />
					<div className="formDescription">
						<p>
							This <strong>checkbox</strong> component uses the
							standard HTML checkbox input element. Its 'checked'
							attribute set the state of the parent element. When
							checkbox is in <strong>loading</strong> state this
							is indicated by using preloader component. An icon
							from FontAwesome were used to indicate{" "}
							<strong>
								<i>checked</i>
							</strong>{" "}
							state of the input.{" "}
							<a
								href="https://github.com/alchemistbg/react-checkbox/blob/master/src/components/Checkbox/Checkbox2.jsx"
								target="_blank"
								rel="noreferrer noopener"
							>
								Here is the source code of the{" "}
								<strong>checkbox</strong>
							</a>
							.
						</p>
					</div>
				</div>
			</Section>
			<Section
				header="Checkbox in Class-based container"
				introText="This component uses React class-based component. Its state is managed using state object and setState method to change the state."
			>
				<div className="FormContainer">
					<Form3CB />
					<div className="formDescription">
						<p>
							This <strong>checkbox</strong> functionality is
							basically the same as the above. The difference is
							in the used loading animation. Here an icon from
							FontAwesome were used. Another difference is that
							when checkbox is in <strong>loading</strong> state,
							the HTML input element is disabled and the cursor is
							set to{" "}
							<strong>
								<i>not allowed</i>
							</strong>
							. This prevent the user to use the checkbox when it
							is in <strong>loading</strong> state.{" "}
							<a
								href="https://github.com/alchemistbg/react-checkbox/blob/master/src/components/Checkbox/Checkbox3.jsx"
								target="_blank"
								rel="noreferrer noopener"
							>
								Here is the source code of the{" "}
								<strong>checkbox</strong>
							</a>
							.
						</p>
					</div>
				</div>
			</Section>
			<Section
				header="Checkbox in Class-based container"
				introText="This component uses React class-based component. Its state is managed using state object and setState method to change the state."
			>
				<div className="FormContainer">
					<Form4CB />
					<div className="formDescription">
						<p>
							This <strong>checkbox</strong> functionality is
							basically the same as the above. The difference is
							that loading animation is played above both the
							checkbox and its label. Another difference is that
							the checkbox is square shaped.{" "}
							<a
								href="https://github.com/alchemistbg/react-checkbox/blob/master/src/components/Checkbox/Checkbox4.jsx"
								target="_blank"
								rel="noreferrer noopener"
							>
								Here is the source code of the{" "}
								<strong>checkbox</strong>
							</a>
							.
						</p>
					</div>
				</div>
			</Section>
		</div>
	);
};

export default Main;
