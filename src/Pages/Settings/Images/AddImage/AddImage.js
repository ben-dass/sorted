import React, { useState, useRef } from "react";
import { useCategories } from "../../../../Contexts/CategoriesContext";

import { BsPlusLg } from "react-icons/bs";
import classes from "./AddImage.module.scss";

const AddImage = (props) => {
	const categoriesContext = useCategories();

	const [file, setFile] = useState("");
	const [filename, setFilename] = useState("");
	const [error, setError] = useState("");
	const [isDisabled, setIsDisabled] = useState(false);
	const [className, setClassName] = useState(classes.submit);

	const fileRef = useRef();

	const addImageHandler = async (e) => {
		setIsDisabled(true);
		setClassName(classes.submitDisabled);
		e.preventDefault();
		setError("");

		if (filename === "") {
			setError("Please enter a filename to upload an image");
			setIsDisabled(false);
			setClassName(classes.submit);
			return;
		}

		if (file.length === 0) {
			setError("Please select a file to upload an image ");
			setIsDisabled(false);
			setClassName(classes.submit);
			return;
		}

		await categoriesContext.addImage(
			file[0],
			filename,
			props.selectedCollectionId
		);

		props.setTrigger(!props.trigger);
		setFilename("");
		fileRef.current.value = "";
		setIsDisabled(false);
		setClassName(classes.submit);
	};

	return (
		<form className={classes.addImageContainer} onSubmit={addImageHandler}>
			<span className={classes.inputs}>
				<input
					className={classes.textInput}
					type="text"
					placeholder="Filename"
					value={filename}
					onChange={(e) => setFilename(e.target.value)}
				/>
				<input
					className={classes.fileInput}
					type="file"
					ref={fileRef}
					onChange={(e) => setFile(e.target.files)}
				/>
				<button
					className={className}
					type="submit"
					disabled={isDisabled}
				>
					<BsPlusLg />
				</button>
			</span>
			<div className={classes.messages}>
				<div className={classes.error}>{error}</div>
				{!error && (
					<div className={classes.processingFileUpload}>
						{categoriesContext.fileUploadStage}
					</div>
				)}
			</div>
		</form>
	);
};

export default AddImage;
