import React, { createContext, useContext, useEffect, useState } from "react";
import {
	collection,
	doc,
	getDocs,
	addDoc,
	deleteDoc,
	updateDoc
} from "firebase/firestore";
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
				id: doc.id,
				name: doc.data().name,
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
	 * deleteCategory - Delete category to database.
	 *
	 * @param {String} categoryId - Category Id.
	 */
	 const setNewCategoryName = async (categoryId, newCategoryName) => {
		console.log("Setting new category name...");

		const updateCategoryNameRef = doc(db, "Categories", categoryId);
		await updateDoc(updateCategoryNameRef, {
			name: newCategoryName,
		});
		getCategoriesCollection();
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
	};

	return (
		<CategoriesContext.Provider value={values}>
			{children}
		</CategoriesContext.Provider>
	);
};
