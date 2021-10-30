import React from "react";

import classes from "./Content.module.scss";

const Content = (props) => {
  const category = props.category;

  return (
    <div className={classes.contentContainer}>
      Hello world
      <p>{category}</p>
    </div>
  );
};

export default Content;
