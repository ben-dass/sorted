import React from "react";
import { NavLink } from "react-router-dom";
import { useCategories } from "../../../Contexts/CategoriesContext";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import classes from "./Images.module.scss";

const Images = () => {
	const categoriesContext = useCategories();
	const categories = categoriesContext.categories;

	return (
		<div>
			<div className={classes.title}>Manage images</div>
			<div className={classes.imagesContainer}>
				<div className={classes.selectCollectionContainer}>
					<div className={classes.listTitle}>Collections</div>
					<div className={classes.collectionList}>
						{categories.map((category) => (
							<NavLink
								key={Math.ceil(Math.random() * 1000)}
								to={`/${category.name}`}
								activeClassName={classes.active}
							>
								{category.name}
							</NavLink>
						))}
					</div>
				</div>
				<div className={classes.collectionContent}>
					<div className={classes.listTitle}>Images</div>

					{/* List of images */}
					<div className={classes.imagesList}>
						The images are listed here...
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
