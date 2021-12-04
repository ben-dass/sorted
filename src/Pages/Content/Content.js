import React, { useState, useEffect } from "react";
import { useCategories } from "../../Contexts/CategoriesContext";

import { saveAs } from "file-saver";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { AiOutlineCloudDownload } from "react-icons/ai";
import classes from "./Content.module.scss";

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

	const downloadImage = (url, fileName) => {
		saveAs(url, fileName);
	};

	useEffect(() => {
		getImages();
		// eslint-disable-next-line
	}, []);

	return (
		<div className={classes.contentContainer}>
			{images.map((image) => (
				<span key={Math.ceil(Math.random() * 10000)}>
					<Card sx={{ width: 300 }}>
						<CardMedia
							component="img"
							height="140"
							image={image.url}
							alt={image.fileName}
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
							>
								{image.fileName}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Some description will be added here.
							</Typography>
						</CardContent>
						<CardActions>
							{/* It doesn't download in current tab because you need a backend to allow cors! */}
							<Button
								size="small"
								onClick={() =>
									downloadImage(image.url, image.fileName)
								}
							>
								<AiOutlineCloudDownload
									className={classes.icon}
								/>
								&nbsp; Download
							</Button>
							{/* <Button size="small">
								<AiOutlineFullscreen className={classes.icon} />
								&nbsp; View
							</Button> */}
						</CardActions>
					</Card>
				</span>
			))}
		</div>
	);
};

export default Content;
