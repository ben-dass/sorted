import React, { createContext, useContext, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebase";

const CategoriesContext = createContext();

export const useCategories = () => {
  return useContext(CategoriesContext);
};

export const CategoriesProvider = ({ children }) => {
  const categories = [];

  /**
   * Get all categories data off Firebase.
   */
  const getCategoriesCollection = async () => {
    const snapshot = await getDocs(collection(db, "Categories"));

    snapshot.forEach((doc) => {
      categories.push({
        name: doc.data().name,
      });
    });

    console.log("Fetched categories");
  };

  useEffect(() => {
    getCategoriesCollection();
    // eslint-disable-next-line
  }, []);

  const values = {
    categories,
  };

  return (
    <CategoriesContext.Provider value={values}>
      {children}
    </CategoriesContext.Provider>
  );
};
