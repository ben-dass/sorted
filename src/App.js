import React from "react";
import { Switch, Route } from "react-router-dom";
import SortedBody from "./Pages/SortedBody";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
