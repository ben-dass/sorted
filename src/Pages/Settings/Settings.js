import React from "react";
import { NavLink } from "react-router-dom";
import General from "./General/General";
import Collections from "./Collections/Collections";
import About from "./About/About";

import classes from "./Settings.module.scss";

const Settings = (props) => {
	const category = props.category;
	return (
		<div className={classes.settingsContainer}>
			<div className={classes.categoriesContainer}>
				<NavLink
					key={Math.ceil(Math.random() * 1000)}
					to={`/Settings/General`}
					className={classes.navLink}
					activeClassName={classes.active}
				>
					General
				</NavLink>
				<NavLink
					key={Math.ceil(Math.random() * 1000)}
					to={`/Settings/Collections`}
					className={classes.navLink}
					activeClassName={classes.active}
				>
					Collections
				</NavLink>
				<NavLink
					key={Math.ceil(Math.random() * 1000)}
					to={`/Settings/About`}
					className={classes.navLink}
					activeClassName={classes.active}
				>
					About
				</NavLink>
			</div>
			<div className={classes.propertiesContainer}>
				{category === "General" && <General />}
				{category === "Collections" && <Collections />}
				{category === "About" && <About />}
			</div>
		</div>
	);
};

export default Settings;
