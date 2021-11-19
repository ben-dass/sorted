import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
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
				name: doc.data().name,
			});
		});

		setCategories(tempCategories);
		console.log("Fetched categories");
	};

	/**
	 * addCategory - Add entry to database.
	 *
	 * @param {String} category - category of entry.
	 */
	const addCategory = async (category) => {
		await setDoc(doc(db, "Categories"), {
			name: category,
		});
	};

	useEffect(() => {
		getCategoriesCollection();
		// eslint-disable-next-line
	}, []);

	const values = {
		categories,
		addCategory,
	};

	return (
		<CategoriesContext.Provider value={values}>
			{children}
		</CategoriesContext.Provider>
	);
};
