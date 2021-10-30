import React from "react";
import { NavLink } from "react-router-dom";
import { useCategories } from "../../Contexts/CategoriesContext";

import { AiOutlinePlus } from "react-icons/ai";
import classes from "./SideNav.module.scss";
import { AiOutlinePlus } from "react-icons/ai";

const SideNav = () => {
  const categoriesContext = useCategories();
  const categories = categoriesContext.categories;

  return (
    <div className={classes.sideNav}>
      <div className={classes.sideNavContainer}>
        {/* Site title */}
        <div className={classes.sideNavTitle}>Sorted</div>

        {/* Categories */}
        <div className={classes.sideNavListTitle}>categories</div>

        {/* List of categories */}
        <div className={classes.list}>
        {categories.map((category) => (
              <NavLink to={`/${category.name}`} activeClassName={classes.listItem}>
                {category.name}
              </NavLink>
            ))}


        </div>

        {/* Add a category */}
        <div className={classes.add}>
          <AiOutlinePlus className={classes.icon} />
          &nbsp; Add category &nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
};

export default SideNav;
