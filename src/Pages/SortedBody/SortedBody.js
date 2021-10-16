import React from "react";
import SideNav from "../../Components/SideNav/SideNav";
import Content from '../../Components/Content/Content';

import classes from './SortedBody.module.scss';

const SortedBody = () => {
  return (
    <div className={classes.sortedBodyContainer}>
      <SideNav></SideNav>
      <Content></Content>
    </div>
  );
};

export default SortedBody;
