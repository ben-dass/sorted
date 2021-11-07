import React from "react";
import { useCategories } from "../../../Contexts/CategoriesContext";

import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import {BiPlus} from "react-icons/bi"
import classes from "./Collections.module.scss";

const Collections = () => {
	const categoriesContext = useCategories();
	const categories = categoriesContext.categories;

	return (
		<div className={classes.collectionsSettingsContainer}>
			<div className={classes.title}>Collections settings</div>
			<div>
				<div className={classes.sectionHeading}>Your Collections</div>
				<table className={classes.collectionsTable}>
					{categories.map((category) => (
						<tr>
							<td>
								<div>{category.name}</div>
								<span className={classes.tools}>
									<div className={classes.rowTools}>
										<div className={classes.rowToolEdit}>
											<AiTwotoneEdit
												className={classes.icon}
											/>
											&nbsp;Edit
										</div>
										<div className={classes.rowToolDelete}>
											<AiFillDelete
												className={classes.icon}
											/>
											&nbsp;Delete
										</div>
									</div>
								</span>
							</td>
						</tr>
					))}
				</table>
				{/* Add a category */}
				<div className={classes.add}>
					<BiPlus className={classes.icon} />
					&nbsp;&nbsp;Add category
				</div>
			</div>
		</div>
	);
};

export default Collections;
