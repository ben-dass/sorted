import React from "react";

import { AiFillDelete } from "react-icons/ai";
import classes from "./SettingsImageEntry.module.scss";

const SettingsImageEntry = (props) => {
	const image = props.image;

	return (
		<div className={classes.settingsCollectionEntryContainer}>
			<div className={classes.categoryName}>{image}</div>

			<span className={classes.tools}>
				<div className={classes.rowTools}>
					<div className={classes.rowToolDelete}>
						<AiFillDelete className={classes.icon} />
						&nbsp;Delete
					</div>
				</div>
			</span>
		</div>
	);
};

export default SettingsImageEntry;
