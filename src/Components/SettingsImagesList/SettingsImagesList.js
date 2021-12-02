import React, { useState, useEffect } from "react";
import { useCategories } from "../../Contexts/CategoriesContext";

// import classes from "./SettingsImagesList.module.scss";

const SettingsImagesList = (props) => {
	const selectedCollection = props.collection;
	const [images, setImages] = useState([]);

	const categoriesContext = useCategories();
	const categoriesPromise =
		categoriesContext.getImagesFromCollection(selectedCollection);

	const getImages = async () => {
		setImages([]);
		const imagesObject = await categoriesPromise;
		if (imagesObject != null) {
			setImages(imagesObject);
			return;
		}
		return;
	};

	useEffect(() => {
		getImages();
		// eslint-disable-next-line
	}, [selectedCollection]);

	return (
		<>
			<div>
				{images.map((image) => (
					<span key={Math.ceil(Math.random() * 10000)}>
						<div>{image.fileName}</div>
						<div>{image.url}</div>
					</span>
				))}
			</div>
		</>
	);
};

export default SettingsImagesList;
