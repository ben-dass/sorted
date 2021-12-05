import React, { useEffect, useState } from "react";
import { useCategories } from "../../Contexts/CategoriesContext";
import SettingsImageEntry from "../SettingsImageEntry/SettingsImageEntry";

import classes from "./SettingsImagesList.module.scss";

const SettingsImagesList = (props) => {
	const collectionName = props.collectionName;
	const trigger = props.trigger;
	const categoriesContext = useCategories();

	const [isLoading, setIsLoading] = useState(true);
	const [images, setImages] = useState({});

	const getImages = async () => {
		setImages(
			await categoriesContext.getImagesFromCollection(collectionName)
		);
		setIsLoading(false);
	};

	useEffect(() => {
		getImages();
		// eslint-disable-next-line
	}, [collectionName, trigger]);

	if (isLoading) {
		return <div className={classes.userInfoMessage}>Loading images...</div>;
	}

	if (typeof images === 'undefined') {
		return (
			<div className={classes.userInfoMessage}>
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
							<SettingsImageEntry image={image.fileName} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default SettingsImagesList;
