import React, { useState, useRef, useEffect } from "react";
import { useCategories } from "../../Contexts/CategoriesContext";

import { AiTwotoneEdit, AiFillDelete, AiFillSave } from "react-icons/ai";
import { TiCancel } from "react-icons/ti";
import classes from "./SettingsCollectionEntry.module.scss";

const SettingsCollectionEntry = (props) => {
	const category = props.category;
	const categoriesContext = useCategories();

	const inactiveEdit = classes.settingsCollectionEntryContainer;
	const activeEdit = classes.settingsCollectionEntryContainerActive;

	const currentInputEdit = useRef(null);
	const [editState, setEditState] = useState(false);
	const [className, setClassName] = useState(inactiveEdit);
	const [tempCategoryName, setTempCategoryName] = useState(category.name);

	const handleDeleteCategory = async (categoryId) => {
		await categoriesContext.deleteCategory(categoryId);
	};

	const handleSaveEdit = async (id) => {
		await categoriesContext.setNewCategoryName(id, tempCategoryName);
	};

	const toggleEditState = () => {
		setEditState(!editState);
		setClassName(className === inactiveEdit ? activeEdit : inactiveEdit);
	};

	useEffect(() => {
		if (editState) {
			currentInputEdit.current.focus();
		}
	}, [editState]);

	return (
		<div className={className}>
			{!editState && (
				<div className={classes.categoryName}>
					{category.collectionName}
				</div>
			)}

			{editState && (
				<input
					ref={currentInputEdit}
					type="text"
					className={classes.input}
					defaultValue={category.name}
					onChange={(e) => setTempCategoryName(e.target.value)}
				/>
			)}

			<span className={classes.tools}>
				<div className={classes.rowTools}>
					{!editState && (
						<>
							<div
								className={classes.rowToolEdit}
								onClick={toggleEditState}
							>
								<AiTwotoneEdit className={classes.icon} />
								&nbsp;Edit
							</div>

							<div
								className={classes.rowToolDelete}
								onClick={() =>
									handleDeleteCategory(category.id)
								}
							>
								<AiFillDelete className={classes.icon} />
								&nbsp;Delete
							</div>
						</>
					)}

					{editState && (
						<>
							<div
								className={classes.rowToolSave}
								onClick={() => handleSaveEdit(category.id)}
							>
								<AiFillSave className={classes.icon} />
								&nbsp;Save
							</div>

							<div
								className={classes.rowToolCancel}
								onClick={toggleEditState}
							>
								<TiCancel className={classes.icon} />
								&nbsp;Cancel
							</div>
						</>
					)}
				</div>
			</span>
		</div>
	);
};

export default SettingsCollectionEntry;
