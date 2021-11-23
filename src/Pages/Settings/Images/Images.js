import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCategories } from "../../../Contexts/CategoriesContext";
import SettingsImagesList from "../../../Components/SettingsImagesList/SettingsImagesList";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import classes from "./Images.module.scss";

const Images = () => {
	const categoriesContext = useCategories();
	const categories = categoriesContext.categories;

	const [selectedCollectionName, setSelectedCollectionName] = useState("");

	const handleClickedCategory = (e) => {
		// categoriesContext.getImagesFromCollection(selectedCollectionName);
		setSelectedCollectionName(e.target.textContent);
	};

	return (
		<div>
			<div className={classes.title}>Manage images</div>
			<div className={classes.imagesContainer}>
				<div className={classes.selectCollectionContainer}>
					<div className={classes.listTitle}>Collections</div>
					<div className={classes.collectionList}>
						{categories.map((category) => (
							<NavLink
								key={Math.ceil(Math.random() * 10000)}
								to={`/Settings/addImages/${category.collectionName}`}
								activeClassName={classes.active}
								onClick={(e) => handleClickedCategory(e)}
							>
								{category.collectionName}
							</NavLink>
						))}
					</div>
				</div>
				<div className={classes.collectionContent}>
					<div className={classes.listTitle}>Images</div>

					{/* List of images */}
					<div className={classes.imagesList}>
						<SettingsImagesList
							collection={selectedCollectionName}
						/>
					</div>

					{/* Image tools */}
					<div className={classes.imagesTools}>
						<div className={classes.iconAdd}>
							<BsPlusLg className={classes.icon} />
							&nbsp; Add
						</div>
						<div className={classes.iconEdit}>
							<AiFillEdit className={classes.icon} />
							&nbsp; Edit
						</div>
						<div className={classes.iconDelete}>
							<AiFillDelete className={classes.icon} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Images;
