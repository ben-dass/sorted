import React, { useState } from "react";
import { useCategories } from "../../../../Contexts/CategoriesContext";

import { BsPlusLg } from "react-icons/bs";
import classes from "./AddImage.module.scss";

const AddImage = (props) => {
	const categoriesContext = useCategories();

	const [file, setFile] = useState("");
	const [filename, setFilename] = useState("");

	const addImageHandler = async () => {
		await categoriesContext.addImage(
			file,
			filename,
			props.selectedCollectionId
		);
	};

	return (
		<div className={classes.addImageContainer}>
			<span className={classes.inputs}>
				<input
					className={classes.textInput}
					type="text"
					placeholder="Filename"
					onChange={(e) => setFilename(e.target.value)}
				/>
				<input
					className={classes.fileInput}
					type="file"
					onChange={(e) => setFile(e.target.files[0])}
				/>
				<button className={classes.submit} onClick={addImageHandler}>
					<BsPlusLg />
				</button>
			</span>
		</div>
	);
};

export default AddImage;
