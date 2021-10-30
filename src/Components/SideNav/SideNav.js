import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./SideNav.module.scss";
import { AiOutlinePlus } from "react-icons/ai";

const SideNav = () => {
  // TODO: Add connection to Firebase. Collection of Categories, ...
  // TODO: ... each account will always start with a 'General' ...
  // TODO: ... category. There will be 2 collections: 'categories' and ...
  // TODO: ... 'images'. Each Image will have an additional property ...
  // TODO: ... array of strings 'tags', of its associated tags.

  return (
    <div className={classes.sideNav}>
      <div className={classes.sideNavContainer}>
        {/* Site title */}
        <div className={classes.sideNavTitle}>Sorted</div>

        {/* Categories */}
        <div className={classes.sideNavListTitle}>categories</div>

        {/* List of categories */}
        <div className={classes.list}>
          <NavLink to="/General" activeClassName={classes.listItem}>
            General
          </NavLink>
          <NavLink to="/Wallpapers" activeClassName={classes.listItem}>
            Wallpapers
          </NavLink>
          <NavLink to="/Trips" activeClassName={classes.listItem}>
            Trips
          </NavLink>
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
