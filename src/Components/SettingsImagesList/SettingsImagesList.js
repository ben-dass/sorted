import React, { useState, useEffect } from "react";
import { useCategories } from "../../Contexts/CategoriesContext";
import SettingsImageEntry from "../SettingsImageEntry/SettingsImageEntry";

import classes from "./SettingsImagesList.module.scss";

const SettingsImagesList = (props) => {
	const selectedCollection = props.collection;
	const [images, setImages] = useState(null);

	const categoriesContext = useCategories();
	const categoriesPromise =
		categoriesContext.getImagesFromCollection(selectedCollection);

	const getImages = async () => {
		setImages(null);
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

	if (images === null) {
		return (
			<div className={classes.noImages}>
				No images in this collection...
			</div>
		);
	}

	return (
		<table className={classes.imagesTable}>
			<tbody>
				{images.map((image) => (
					<tr key={Math.ceil(Math.random() * 10000)}>
						<td>
							<SettingsImageEntry
								image={image.fileName}
								collectionId={selectedCollection}
							/>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default SettingsImagesList;
