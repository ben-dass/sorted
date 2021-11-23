import React from "react";

import classes from "./TitleBar.module.scss";

const TitleBar = (props) => {
	const category = props.category;

	return (
		<div className={classes.contentContainer}>
			<div className={classes.titleBar}>
				<div className={classes.title}>{category}</div>
			</div>
		</div>
	);
};

export default TitleBar;
