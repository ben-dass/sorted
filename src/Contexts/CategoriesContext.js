import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; 
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
