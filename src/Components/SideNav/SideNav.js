import React from "react";
import { useCategories } from "../../Contexts/CategoriesContext";

import { AiOutlinePlus } from "react-icons/ai";
import classes from "./SideNav.module.scss";

const SideNav = () => {
  const categoriesContext = useCategories();
  const categories = categoriesContext.categories;

  return (
    <div className={classes.sideNav}>
      <div className={classes.sideNavContainer}>
        {/* Site title */}
        <div className={classes.sideNavTitle}>Sorted</div>

        {/* Categories */}
        <div className={classes.sideNavList}>
          <div className={classes.sideNavListTitle}>categories</div>

          {/* List of categories */}
          <ul className={classes.list}>
            {categories.map((category) => (
              <li className={classes.listItem}>{category.name}</li>
            ))}

          </ul>
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
