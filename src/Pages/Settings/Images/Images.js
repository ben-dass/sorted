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
	const [selectedCollectionId, setSelectedCollectionId] = useState("");
	const [addState, setAddState] = useState(false);
	const [file, setFile] = useState(null);

	const handleClickedCategory = (e) => {
		setSelectedCollectionName(e.target.textContent);
		setSelectedCollectionId(
			categories.find(
				(element) => element.collectionName === e.target.textContent
			).collectionId
		);
	};

	const addHandler = () => {
		setAddState(!addState);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const fileName = e.target.fileName.value;
		await categoriesContext.addImage(file, fileName, selectedCollectionId);
		addHandler();
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
								to={`/Settings/Images/${category.collectionName}`}
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

					{!addState && (
						<>
							{/* List of images */}
							<div className={classes.imagesList}>
								<SettingsImagesList
									collection={selectedCollectionName}
								/>
							</div>

							{/* Image tools */}
							<div className={classes.imagesTools}>
								<div
									className={classes.add}
									onClick={addHandler}
								>
									<BsPlusLg className={classes.icon} />
									&nbsp; Add
								</div>
								<div className={classes.edit}>
									<AiFillEdit className={classes.icon} />
									&nbsp; Edit
								</div>
								<div className={classes.delete}>
									<AiFillDelete className={classes.icon} />
								</div>
							</div>
						</>
					)}

					{addState && (
						<div className={classes.formContainer}>
							<form
								onSubmit={onSubmit}
								className={classes.addFileForm}
							>
								<div>Select a file</div>
								<input
									type="file"
									onChange={(e) => setFile(e.target.files[0])}
								/>
								<input
									type="text"
									placeholder="Filename"
									name="fileName"
								/>
								<div className={classes.actionButtons}>
									<button
										className={classes.submit}
										type="submit"
									>
										Submit
									</button>
									<div
										className={classes.back}
										onClick={addHandler}
									>
										Back
									</div>
								</div>
							</form>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Images;
