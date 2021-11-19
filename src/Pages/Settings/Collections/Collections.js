import React, { useState } from "react";
import { useCategories } from "../../../Contexts/CategoriesContext";

import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import classes from "./Collections.module.scss";

const Collections = () => {
	const categoriesContext = useCategories();
	const categories = categoriesContext.categories;

	const [collectionName, setCollectionName] = useState("");
	
	const handleAddCategory = () => {
		categoriesContext.addCategory(collectionName);
	};

	return (
		<div className={classes.collectionsSettingsContainer}>
			<div className={classes.title}>Collections settings</div>
			<div>
				<div className={classes.sectionHeading}>Your Collections</div>
				<table className={classes.collectionsTable}>
					{categories.map((category) => (
						<tr>
							<td>
								<div className={classes.categoryName}>
									{category.name}
								</div>
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
				<div className={classes.sectionHeading}>Add a Collection</div>
				<div className={classes.addContainer}>
					<input
						type="text"
						className={classes.input}
						placeholder="Add a new collection here..."
						onChange={(e) => setCollectionName(e.target.value)}
					/>
					<div className={classes.add} onClick={handleAddCategory}>
						<BiPlus className={classes.icon} />
						&nbsp;&nbsp;Add
					</div>
				</div>
			</div>
		</div>
	);
};

export default Collections;
