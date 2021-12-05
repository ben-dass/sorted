import React, { createContext, useContext, useEffect, useState } from "react";
import {
	collection,
	doc,
	getDoc,
	getDocs,
	addDoc,
	deleteDoc,
	updateDoc,
	arrayUnion,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../firebase";

const CategoriesContext = createContext();

export const useCategories = () => {
	return useContext(CategoriesContext);
};

export const CategoriesProvider = ({ children }) => {
	const [categories, setCategories] = useState([]);

	/**
	 * Get all categories data off Firebase.
	 */
	const getCategoriesCollection = async () => {
		const tempCategories = [];
		const snapshot = await getDocs(collection(db, "Categories"));

		snapshot.forEach((doc) => {
			tempCategories.push({
				collectionId: doc.id,
				collectionName: doc.data().name,
			});
		});

		setCategories(tempCategories);
		console.log("Fetched categories");
	};

	/**
	 * addCategory - Add category to database.
	 *
	 * @param {String} category - name of category.
	 */
	const addCategory = async (category) => {
		console.log("Adding category...");
		await addDoc(collection(db, "Categories"), {
			name: category,
		});
		getCategoriesCollection();
	};

	/**
	 * deleteCategory - Delete category to database.
	 *
	 * @param {String} categoryId - Category Id.
	 */
	const deleteCategory = async (categoryId) => {
		console.log("Deleting category...");
		await deleteDoc(doc(db, "Categories", categoryId));
		getCategoriesCollection();
	};

	/**
	 * setNewCategoryName - Edit a category name in the database.
	 *
	 * @param {String} categoryId - Category Id.
	 * @param {String} newCategoryName - New category name.
	 */
	const setNewCategoryName = async (categoryId, newCategoryName) => {
		console.log("Setting new category name... ");

		const updateCategoryNameRef = doc(db, "Categories", categoryId);
		await updateDoc(updateCategoryNameRef, {
			name: newCategoryName,
		});
		getCategoriesCollection();
	};

	/**
	 * getImagesFromCollection - Gets all the images for the requested collection.
	 *
	 * @param {String} collectionName - Name of collection.
	 */
	const getImagesFromCollection = async (collectionName) => {
		let category = categories.find(
			(element) => element.collectionName === collectionName
		);

		if (category != null) {
			const categoryRef = doc(db, "Categories", category.collectionId);
			const docSnap = await getDoc(categoryRef);

			if (docSnap.exists()) {
				let imagesObject = docSnap.data().images;

				if (imagesObject != null) {
					console.log(
						"Images based on selected category has been set."
					);
					return imagesObject;
				}
			} else {
				console.log(
					"CategoriesContext - getImagesFromCollection - Document does not exist!"
				);
				return;
			}
		}
	};

	/**
	 * addImage - Add an image to a collection.
	 *
	 * @param {Object} file - The file that is being updated.
	 * @param {String} fileName - Name of file.
	 * @param {String} categoryId - the category id the image is going to.
	 */
	const addImage = async (file, fileName, categoryId) => {
		const storage = getStorage();
		const storageRef = ref(storage, fileName);

		// Upload file to Firebase Storage
		await uploadBytes(storageRef, file);
		console.log("Image uploaded to Storage");

		// Update category document in Firestore
		const dbRef = doc(db, "Categories", categoryId);
		const fileURL = await getDownloadURL(ref(storage, fileName));

		await updateDoc(dbRef, {
			images: arrayUnion({
				fileName: fileName,
				url: fileURL,
			}),
		});
	};

	useEffect(() => {
		getCategoriesCollection();
		// eslint-disable-next-line
	}, []);

	const values = {
		categories,
		addCategory,
		deleteCategory,
		setNewCategoryName,
		getImagesFromCollection,
		addImage,
	};

	return (
		<CategoriesContext.Provider value={values}>
			{children}
		</CategoriesContext.Provider>
	);
};
