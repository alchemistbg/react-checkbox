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
							pseudo elements.
						</p>
					</div>
				</div>
			</Section>
			<Section
				header="Checkbox in Class-based container"
				introText="This component uses React classes-based component. Its state is managed using state object and setState method to change the state."
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
							This <strong>checkbox</strong> component does use
							standard HTML checkbox input element. Its 'checked'
							attribute set the state of the parent element.
						</p>
					</div>
				</div>
			</Section>
			<Section
				header="Checkbox in Class-based container"
				introText="123456789"
			>
				<div className="FormContainer">
					<Form3CB />
					<div className="formDescription">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Atque, molestiae, voluptate est cupiditate a
							blanditiis similique vitae laudantium quos impedit
							maiores totam voluptates sit ex reiciendis sint
							natus libero quas?
						</p>
					</div>
				</div>
			</Section>
			<Section
				header="Checkbox in Class-based container"
				introText="123456789"
			>
				<div className="FormContainer">
					<Form4CB />
					<div className="formDescription">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Atque, molestiae, voluptate est cupiditate a
							blanditiis similique vitae laudantium quos impedit
							maiores totam voluptates sit ex reiciendis sint
							natus libero quas?
						</p>
					</div>
				</div>
			</Section>
		</div>
	);
};

export default Main;
