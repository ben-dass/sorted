import React, { useState, useEffect } from "react";
import { useCategories } from "../../Contexts/CategoriesContext";

const Content = (props) => {
	const currentCollection = props.category;
	const [images, setImages] = useState([]);

	const categoriesContext = useCategories();

	const getImages = async () => {
		setImages([]);
		const categoriesPromise =
			await categoriesContext.getImagesFromCollection(currentCollection);
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
	}, []);

	return (
		<>
			<div>
				{images.map((image) => (
					<span key={Math.ceil(Math.random() * 10000)}>
						<div>{image.fileName}</div>
						<img
							src={image.url}
							alt={image.fileName}
							width="100px"
							height="100px"
						/>
					</span>
				))}
			</div>
		</>
	);
};

export default Content;
