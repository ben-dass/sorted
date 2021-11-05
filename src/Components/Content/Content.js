import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";

import classes from "./Content.module.scss";

const Content = (props) => {
	const category = props.category;

	return (
		<div className={classes.contentContainer}>
			<div className={classes.titleBar}>
				<div className={classes.title}>{category}</div>
				<NavLink
					key={Math.ceil(Math.random() * 1000)}
					to={`/Settings`}
					activeClassName={classes.active}
				>
					<IoMdSettings className={classes.icon} />
				</NavLink>
			</div>
			<div className={classes.content}></div>
		</div>
	);
};

export default Content;
