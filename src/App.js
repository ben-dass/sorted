import React from "react";
import { Switch, Route } from "react-router-dom";
import SideNav from "./Components/SideNav/SideNav";

import { useCategories } from "./Contexts/CategoriesContext";
import Content from "./Components/Content/Content";

function App() {
  const categoriesContext = useCategories();
  const categories = categoriesContext.categories;

  return (
    <>
      <SideNav />
      <Switch>
        <Route
          path={["/"]}
          exact
          render={(props) => <Content {...props} category="" />}
        />
        {categories.map((category) => (
          <Route
            key={Math.ceil(Math.random() * 1000)}
            path={`/${category.name}`}
            render={(props) => <Content {...props} category={category.name} />}
          />
        ))}
      </Switch>
    </>
  );
}

export default App;
