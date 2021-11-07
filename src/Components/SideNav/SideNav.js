import React from "react";
import { NavLink } from "react-router-dom";
import { useCategories } from "../../Contexts/CategoriesContext";

import classes from "./SideNav.module.scss";

const SideNav = () => {
	const categoriesContext = useCategories();
	const categories = categoriesContext.categories;

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
							{category.name}
						</NavLink>
					))}
				</div>
			</div>
		</div>
	);
};

export default SideNav;
