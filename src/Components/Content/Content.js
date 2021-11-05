import React from "react";
import { IoMdSettings } from "react-icons/io";

import classes from "./Content.module.scss";

const Content = (props) => {
	const category = props.category;

	return (
		<div className={classes.contentContainer}>
			<div className={classes.titleBar}>
				<div className={classes.title}>{category}</div>
				<IoMdSettings className={classes.icon} />
			</div>
			<div className={classes.content}></div>
		</div>
	);
};

export default Content;
