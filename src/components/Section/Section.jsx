import "./Section.scss";

import React from "react";

const Section = (props) => {
	return (
		<section className="Section">
			<header>
				<h3>{props.header}</h3>
			</header>
			<main>
				<p>
					{props.introText}{" "}
					<a
						href={props.ghLink}
						target="_blank"
						rel="noreferrer noopener"
					>
						Click to open the source code of this{" "}
						<strong>container</strong>
					</a>
					.
				</p>
				{props.children}
			</main>
		</section>
	);
};

export default Section;
