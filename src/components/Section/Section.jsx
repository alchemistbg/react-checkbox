import "./Section.scss";

import React from "react";

const Section = (props) => {
	return (
		<section className="Section">
			<header>
				<h3>{props.header}</h3>
			</header>
			<main>
				<p>{props.introText}</p>
				{props.children}
			</main>
		</section>
	);
};

export default Section;
