import React from "react";
import { GrAdd } from 'react-icons/gr';

import classes from "./SideNav.module.scss";

const SideNav = () => {
    // TODO: Add connection to Firebase. Collection of Categories, ...
    // TODO: ... each account will always start with a 'General' ...
    // TODO: ... category. There will be 2 collections: 'categories' and ...
    // TODO: ... 'images'. Each Image will have an additional property ...
    // TODO: ... array of strings 'tags', of its associated tags.

  return (
    <div className={classes.sideNav}>
      <div className={classes.sideNavContainer}>
        <div className={classes.sideNavTitle}>Sorted</div>
      </div>
      <div className={classes.sideNavList}>
      </div>
    </div>
  );
};

export default SideNav;
