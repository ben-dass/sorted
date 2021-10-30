import React from "react";
import { Switch, Route } from "react-router-dom";
import { CategoriesProvider } from "./Contexts/CategoriesContext";
import SortedBody from "./Pages/SortedBody/SortedBody";

function App() {
  return (
    <CategoriesProvider>
      <Switch>
        <Route
          path={["/General"]}
          render={(props) => <SortedBody {...props} category="general" />}
        />
        <Route
          path={["/Wallpapers"]}
          render={(props) => <SortedBody {...props} category="wallpapers" />}
        />
        <Route
          path={["/Trips"]}
          render={(props) => <SortedBody {...props} category="trips" />}
        />
      </Switch>
      </CategoriesProvider>
      )

}

export default App;
