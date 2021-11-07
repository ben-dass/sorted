import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { IoMdSettings } from "react-icons/io";
import classes from "./TitleBar.module.scss";

const TitleBar = (props) => {
	const category = props.category;
	const { pathname } = useLocation();

	return (
		<div className={classes.contentContainer}>
			<div className={classes.titleBar}>
				<div className={classes.title}>{category}</div>
				<NavLink
					key={Math.ceil(Math.random() * 1000)}
					to={`/Settings/General`}
					activeClassName={classes.active}
					isActive={() =>
						[
							"/Settings/General",
							"/Settings/Collections",
							"/Settings/About",
						].includes(pathname)
					}
				>
					<IoMdSettings className={classes.icon} />
				</NavLink>
			</div>
		</div>
	);
};

export default TitleBar;
