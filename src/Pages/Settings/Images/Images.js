import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCategories } from "../../../Contexts/CategoriesContext";
import SettingsImagesList from "../../../Components/SettingsImagesList/SettingsImagesList";
import AddImage from "./AddImage/AddImage";

import classes from "./Images.module.scss";

const Images = () => {
	const categoriesContext = useCategories();
	const categories = categoriesContext.categories;

	const [selectedCollectionName, setSelectedCollectionName] = useState(null);
	const [selectedCollectionId, setSelectedCollectionId] = useState("");
	const [trigger, setTrigger] = useState(false);

	const handleClickedCategory = async (e) => {
		setSelectedCollectionName(e.target.textContent);
		setSelectedCollectionId(
			categories.find(
				(element) => element.collectionName === e.target.textContent
			).collectionId
		);
		await categoriesContext.getImagesFromCollection(e.target.textContent);
	};

	return (
		<div>
			<div className={classes.title}>Manage images</div>
			<div className={classes.imagesContainer}>
				{/* List of categories */}
				<div className={classes.selectCollectionContainer}>
					<div className={classes.listTitle}>Collections</div>
					<div className={classes.collectionList}>
						{categories.map((category) => (
							<NavLink
								key={Math.ceil(Math.random() * 10000)}
								to={`/Settings/Images/${category.collectionName}`}
								activeClassName={classes.active}
								onClick={(e) => handleClickedCategory(e)}
							>
								{category.collectionName}
							</NavLink>
						))}
					</div>
				</div>

				{/* Images */}
				<div className={classes.collectionContent}>
					<div className={classes.listTitle}>Your Images</div>

					{/* List of images */}
					<div className={classes.imagesList}>
						{!selectedCollectionName && (
							<div className={classes.selectAContainerPlease}>
								Please select a collection to view its images...
							</div>
						)}

						{selectedCollectionName && (
							<>
								{/* List of images */}
								<SettingsImagesList
									collectionName={selectedCollectionName}
									trigger={trigger}
								/>

								{/* Add an image */}
								<div className={classes.sectionHeading}>
									Add an image
								</div>

								<AddImage
									selectedCollectionId={selectedCollectionId}
									selectedCollectionName={
										selectedCollectionName
									}
									setTrigger={setTrigger}
									trigger={trigger}
								/>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Images;
