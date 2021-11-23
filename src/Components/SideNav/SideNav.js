import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useCategories } from "../../Contexts/CategoriesContext";

import { IoMdSettings } from "react-icons/io";
import classes from "./SideNav.module.scss";

const SideNav = () => {
	const categoriesContext = useCategories();
	const categories = categoriesContext.categories;

	const { pathname } = useLocation();

	return (
		<div className={classes.sideNav}>
			<div className={classes.sideNavContainer}>
				{/* Site title */}
				<div className={classes.appTitleContainer}>
					<NavLink to="/" activeClassName={classes.appTitle}>
						Sorted
					</NavLink>
				</div>

				{/* Collections */}
				<div className={classes.listTitle}>Collections</div>

				{/* List of categories */}
				<div className={classes.list}>
					{categories.map((category) => (
						<NavLink
							key={Math.ceil(Math.random() * 1000)}
							to={`/${category.name}`}
							activeClassName={classes.active}
						>
							{category.collectionName}
						</NavLink>
					))}
				</div>

				{/* Tools */}
				<div className={classes.tools}>
					<NavLink
						className={classes.settings}
						key={Math.ceil(Math.random() * 1000)}
						to={`/Settings/General`}
						activeClassName={classes.active}
						isActive={() =>
							[
								"/Settings/General",
								"/Settings/Collections",
								"/Settings/Images",
								"/Settings/About",
							].includes(pathname)
						}
					>
						<IoMdSettings className={classes.icon} /> Settings
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default SideNav;
