import React, { useState } from "react";
import { useCategories } from "../../../Contexts/CategoriesContext";

import { BiPlus } from "react-icons/bi";
import classes from "./Collections.module.scss";
import SettingsCollectionEntry from "../../../Components/SettingsCollectionEntry/SettingsCollectionEntry";

const Collections = () => {
	const categoriesContext = useCategories();
	const categories = categoriesContext.categories;

	const [collectionName, setCollectionName] = useState("");

	const handleAddCategory = async () => {
		await categoriesContext.addCategory(collectionName);
		setCollectionName("");
	};

	return (
		<div className={classes.collectionsSettingsContainer}>
			<div className={classes.title}>Collections settings</div>
			<div>
				<div className={classes.sectionHeading}>Your Collections</div>
				<table className={classes.collectionsTable}>
					<tbody>
						{categories.map((category) => (
							<tr key={Math.ceil(Math.random() * 10000)}>
								<td>
									<SettingsCollectionEntry
										category={category}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>

				{/* Add a category */}
				<div className={classes.sectionHeading}>Add a Collection</div>
				<div className={classes.addContainer}>
					<input
						type="text"
						className={classes.input}
						placeholder="Add a new collection ..."
						onChange={(e) => setCollectionName(e.target.value)}
						value={collectionName}
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
