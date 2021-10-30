import React from "react";
import SideNav from "../Components/SideNav/SideNav";
import Content from '../Components/Content/Content';

const SortedBody = (props) => {
  return (
    <div>
      <SideNav />
      <Content category={props.category} />
    </div>
  );
};

export default SortedBody;
