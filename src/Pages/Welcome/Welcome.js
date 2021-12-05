import React from "react";

import classes from "./Welcome.module.scss";

const Welcome = () => {
	return (
		<div className={classes.userInfoMessage}>
			Please select from one of the collections on the left to start
			viewing its images
		</div>
	);
};

export default Welcome;
